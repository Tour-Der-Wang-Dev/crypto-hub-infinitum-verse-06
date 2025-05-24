
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Wallet, Mail, User, UserCheck, Settings } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useState } from 'react';

const ProfilePage = () => {
  const { user, updateProfile } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
  });

  if (!user) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(formData);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gradient mb-2">Profile Settings</h1>
            <p className="text-gray-300">Manage your InfiWorld account</p>
          </div>

          <Card className="card-glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="text-infi-gold" size={20} />
                Account Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Wallet Address</Label>
                <div className="flex items-center justify-between p-3 bg-infi-dark-blue/50 rounded-md">
                  <div className="flex items-center gap-2">
                    <Wallet size={16} className="text-infi-gold" />
                    <span className="font-mono text-sm">{user.address}</span>
                  </div>
                  <Badge variant={user.verified ? "default" : "secondary"}>
                    {user.verified ? (
                      <>
                        <UserCheck size={12} />
                        Verified
                      </>
                    ) : (
                      'Unverified'
                    )}
                  </Badge>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Display Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your display name"
                    className="bg-infi-dark-blue/50 border-infi-gold/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-3 text-infi-gold" />
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="Enter your email address"
                      className="bg-infi-dark-blue/50 border-infi-gold/20 pl-10"
                    />
                  </div>
                </div>

                <Button type="submit" className="gold-gradient">
                  <Settings size={16} />
                  Update Profile
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="card-glass">
            <CardHeader>
              <CardTitle className="text-infi-gold">Security Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-infi-blue/20 rounded-lg">
                  <div>
                    <h3 className="font-medium">Wallet Connection</h3>
                    <p className="text-sm text-gray-400">MetaMask wallet connected</p>
                  </div>
                  <Badge className="bg-green-500/20 text-green-400">Active</Badge>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-infi-blue/20 rounded-lg">
                  <div>
                    <h3 className="font-medium">Two-Factor Authentication</h3>
                    <p className="text-sm text-gray-400">Add extra security to your account</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Enable
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
