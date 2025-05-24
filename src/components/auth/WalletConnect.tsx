
import { Button } from '@/components/ui/button';
import { Wallet, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const WalletConnect = () => {
  const { user, isConnecting, connectWallet, disconnectWallet } = useAuth();

  if (user) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm text-infi-gold">
          {user.address.slice(0, 6)}...{user.address.slice(-4)}
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={disconnectWallet}
          className="hover:bg-infi-blue/30"
        >
          <LogOut size={16} />
        </Button>
      </div>
    );
  }

  return (
    <Button
      onClick={connectWallet}
      disabled={isConnecting}
      className="gold-gradient animate-pulse-gold"
    >
      <Wallet size={16} />
      {isConnecting ? 'Connecting...' : 'Connect Wallet'}
    </Button>
  );
};

export default WalletConnect;
