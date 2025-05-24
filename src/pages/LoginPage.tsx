
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wallet, Shield, Zap } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const LoginPage = () => {
  const { user, connectWallet, isConnecting } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <Layout>
      <div className="min-h-screen pt-20 flex items-center justify-center px-4">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gradient mb-4">
              Welcome to InfiWorld
            </h1>
            <p className="text-gray-300">
              Connect your wallet to access the crypto ecosystem
            </p>
          </div>

          <Card className="card-glass">
            <CardHeader>
              <CardTitle className="text-center text-gradient">
                Connect Your Wallet
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-infi-blue/20">
                  <Shield className="text-infi-gold" size={20} />
                  <div>
                    <p className="font-medium">Secure Connection</p>
                    <p className="text-sm text-gray-400">Your wallet stays in your control</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-infi-blue/20">
                  <Zap className="text-infi-gold" size={20} />
                  <div>
                    <p className="font-medium">Instant Access</p>
                    <p className="text-sm text-gray-400">Start trading and booking immediately</p>
                  </div>
                </div>
              </div>

              <Button
                onClick={connectWallet}
                disabled={isConnecting}
                className="w-full gold-gradient animate-pulse-gold"
                size="lg"
              >
                <Wallet size={20} />
                {isConnecting ? 'Connecting...' : 'Connect MetaMask Wallet'}
              </Button>

              <p className="text-center text-sm text-gray-400">
                Don't have MetaMask?{' '}
                <a
                  href="https://metamask.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-infi-gold hover:underline"
                >
                  Download here
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
