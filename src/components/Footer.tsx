
import { Link } from 'react-router-dom';
import InfinityLogo from './InfinityLogo';
import { Map, Marketplace, Freelance, Travel } from './custom-icons';

const Footer = () => {
  return (
    <footer className="bg-infi-dark-blue border-t border-infi-gold/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <InfinityLogo className="h-8 w-8" />
              <span className="text-xl font-bold text-gradient">InfiWorld</span>
            </Link>
            <p className="text-gray-400 text-sm max-w-xs">
              The future of cryptocurrency integration - payments, travel, freelancing, and more.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-infi-gold">Services</h3>
            <div className="space-y-2">
              <Link to="/map" className="flex items-center gap-2 text-sm text-gray-400 hover:text-infi-gold transition-colors">
                <Map size={14} /> Payment Map
              </Link>
              <Link to="/marketplace" className="flex items-center gap-2 text-sm text-gray-400 hover:text-infi-gold transition-colors">
                <Marketplace size={14} /> Marketplace
              </Link>
              <Link to="/freelance" className="flex items-center gap-2 text-sm text-gray-400 hover:text-infi-gold transition-colors">
                <Freelance size={14} /> Freelance
              </Link>
              <Link to="/travel" className="flex items-center gap-2 text-sm text-gray-400 hover:text-infi-gold transition-colors">
                <Travel size={14} /> Travel
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-infi-gold">Company</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm text-gray-400 hover:text-infi-gold transition-colors">
                About Us
              </Link>
              <Link to="/services" className="block text-sm text-gray-400 hover:text-infi-gold transition-colors">
                Our Services
              </Link>
              <Link to="/contact" className="block text-sm text-gray-400 hover:text-infi-gold transition-colors">
                Contact
              </Link>
              <Link to="/help" className="block text-sm text-gray-400 hover:text-infi-gold transition-colors">
                Help Center
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-infi-gold">Legal</h3>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-gray-400 hover:text-infi-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-sm text-gray-400 hover:text-infi-gold transition-colors">
                Terms of Service
              </a>
              <a href="#" className="block text-sm text-gray-400 hover:text-infi-gold transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="block text-sm text-gray-400 hover:text-infi-gold transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-infi-gold/20 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 InfiWorld. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
