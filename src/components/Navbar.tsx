
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Map, Marketplace, Freelance, Travel } from '@/components/custom-icons';
import { Link } from 'react-router-dom';
import InfinityLogo from '@/components/InfinityLogo';
import { ThemeToggle } from '@/components/ThemeToggle';
import WalletConnect from '@/components/auth/WalletConnect';
import ProfileModal from '@/components/auth/ProfileModal';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-infi-dark/90 backdrop-blur-md border-b border-infi-gold/20">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo - Enhanced mobile sizing */}
        <Link to="/" className="flex items-center gap-2 min-h-[44px]">
          <InfinityLogo className="h-8 w-8 sm:h-10 sm:w-10" />
          <span className="text-lg sm:text-xl font-bold text-gradient">InfiWorld</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <Link to="/map" className="px-3 py-2 rounded-md text-sm flex items-center gap-1.5 hover:bg-infi-blue/30 transition-colors min-h-[44px]">
            <Map size={16} /> Map
          </Link>
          <Link to="/marketplace" className="px-3 py-2 rounded-md text-sm flex items-center gap-1.5 hover:bg-infi-blue/30 transition-colors min-h-[44px]">
            <Marketplace size={16} /> Marketplace
          </Link>
          <Link to="/freelance" className="px-3 py-2 rounded-md text-sm flex items-center gap-1.5 hover:bg-infi-blue/30 transition-colors min-h-[44px]">
            <Freelance size={16} /> Freelance
          </Link>
          <Link to="/travel" className="px-3 py-2 rounded-md text-sm flex items-center gap-1.5 hover:bg-infi-blue/30 transition-colors min-h-[44px]">
            <Travel size={16} /> Travel
          </Link>
          {user && (
            <>
              <Link to="/dashboard" className="px-3 py-2 rounded-md text-sm hover:bg-infi-blue/30 transition-colors min-h-[44px] flex items-center">
                Dashboard
              </Link>
              <Link to="/admin" className="px-3 py-2 rounded-md text-sm hover:bg-infi-blue/30 transition-colors min-h-[44px] flex items-center">
                Admin
              </Link>
            </>
          )}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          {user && <ProfileModal />}
          <WalletConnect />
        </div>

        {/* Mobile menu button - Enhanced touch target */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="p-3 rounded-md hover:bg-infi-blue/30 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu - Enhanced animations and spacing */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-infi-dark-blue/95 backdrop-blur-md animate-accordion-down">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link
              to="/map"
              className="flex items-center gap-3 px-4 py-3 rounded-md text-base font-medium hover:bg-infi-blue/30 transition-colors min-h-[48px]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Map size={20} /> Map
            </Link>
            <Link
              to="/marketplace"
              className="flex items-center gap-3 px-4 py-3 rounded-md text-base font-medium hover:bg-infi-blue/30 transition-colors min-h-[48px]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Marketplace size={20} /> Marketplace
            </Link>
            <Link
              to="/freelance"
              className="flex items-center gap-3 px-4 py-3 rounded-md text-base font-medium hover:bg-infi-blue/30 transition-colors min-h-[48px]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Freelance size={20} /> Freelance
            </Link>
            <Link
              to="/travel"
              className="flex items-center gap-3 px-4 py-3 rounded-md text-base font-medium hover:bg-infi-blue/30 transition-colors min-h-[48px]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Travel size={20} /> Travel
            </Link>
            {user && (
              <>
                <Link
                  to="/dashboard"
                  className="block px-4 py-3 rounded-md text-base font-medium hover:bg-infi-blue/30 transition-colors min-h-[48px] flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  to="/admin"
                  className="block px-4 py-3 rounded-md text-base font-medium hover:bg-infi-blue/30 transition-colors min-h-[48px] flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Admin
                </Link>
                <Link
                  to="/profile"
                  className="block px-4 py-3 rounded-md text-base font-medium hover:bg-infi-blue/30 transition-colors min-h-[48px] flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Profile
                </Link>
              </>
            )}
            <div className="pt-3 px-2">
              <WalletConnect />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
