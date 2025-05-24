
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { User, Mail, UserCheck, Wallet } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const ProfileModal = () => {
  const { user, updateProfile } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(formData);
    setIsOpen(false);
  };

  if (!user) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="hover:bg-infi-blue/30">
          <User size={16} />
          Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="card-glass">
        <DialogHeader>
          <DialogTitle className="text-gradient">User Profile</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="address">Wallet Address</Label>
            <div className="flex items-center gap-2 p-3 bg-infi-dark-blue/50 rounded-md">
              <Wallet size={16} className="text-infi-gold" />
              <span className="text-sm font-mono">{user.address}</span>
              {user.verified && <UserCheck size={16} className="text-green-400" />}
            </div>
          </div>
          
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
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-3 text-infi-gold" />
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="Enter your email"
                className="bg-infi-dark-blue/50 border-infi-gold/20 pl-10"
              />
            </div>
          </div>
          
          <Button type="submit" className="gold-gradient w-full">
            Update Profile
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;
