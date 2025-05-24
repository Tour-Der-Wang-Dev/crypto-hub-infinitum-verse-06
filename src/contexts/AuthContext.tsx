
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  address: string;
  name?: string;
  email?: string;
  avatar?: string;
  verified: boolean;
}

interface AuthContextType {
  user: User | null;
  isConnecting: boolean;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  updateProfile: (data: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    // Check if user is already connected
    const savedUser = localStorage.getItem('connectedUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const connectWallet = async () => {
    setIsConnecting(true);
    try {
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        
        if (accounts.length > 0) {
          const newUser: User = {
            id: Date.now().toString(),
            address: accounts[0],
            verified: false,
          };
          
          setUser(newUser);
          localStorage.setItem('connectedUser', JSON.stringify(newUser));
        }
      } else {
        alert('Please install MetaMask to connect your wallet');
      }
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setUser(null);
    localStorage.removeItem('connectedUser');
  };

  const updateProfile = (data: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...data };
      setUser(updatedUser);
      localStorage.setItem('connectedUser', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      isConnecting,
      connectWallet,
      disconnectWallet,
      updateProfile,
    }}>
      {children}
    </AuthContext.Provider>
  );
};
