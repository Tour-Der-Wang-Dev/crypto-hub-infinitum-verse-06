
import { Link } from 'react-router-dom';
import InfinityLogo from './InfinityLogo';
import { Map, Marketplace, Freelance, Travel } from './custom-icons';

const Footer = () => {
  return (
    <footer className="bg-infi-dark-blue border-t border-infi-gold/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 min-h-[44px]">
              <InfinityLogo className="h-6 w-6 sm:h-8 sm:w-8" />
              <span className="text-lg sm:text-xl font-bold text-gradient">InfiWorld</span>
            </Link>
            <p className="text-gray-400 text-sm sm:text-base max-w-xs leading-relaxed">
              The future of cryptocurrency integration - payments, travel, freelancing, and more.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-infi-gold text-base sm:text-lg">Services</h3>
            <div className="space-y-2">
              <Link to="/map" className="flex items-center gap-2 text-sm sm:text-base text-gray-400 hover:text-infi-gold transition-colors min-h-[44px]">
                <Map size={14} className="flex-shrink-0" /> Payment Map
              </Link>
              <Link to="/marketplace" className="flex items-center gap-2 text-sm sm:text-base text-gray-400 hover:text-infi-gold transition-colors min-h-[44px]">
                <Marketplace size={14} className="flex-shrink-0" /> Marketplace
              </Link>
              <Link to="/freelance" className="flex items-center gap-2 text-sm sm:text-base text-gray-400 hover:text-infi-gold transition-colors min-h-[44px]">
                <Freelance size={14} className="flex-shrink-0" /> Freelance
              </Link>
              <Link to="/travel" className="flex items-center gap-2 text-sm sm:text-base text-gray-400 hover:text-infi-gold transition-colors min-h-[44px]">
                <Travel size={14} className="flex-shrink-0" /> Travel
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-infi-gold text-base sm:text-lg">Company</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm sm:text-base text-gray-400 hover:text-infi-gold transition-colors min-h-[44px] flex items-center">
                About Us
              </Link>
              <Link to="/services" className="block text-sm sm:text-base text-gray-400 hover:text-infi-gold transition-colors min-h-[44px] flex items-center">
                Our Services
              </Link>
              <Link to="/contact" className="block text-sm sm:text-base text-gray-400 hover:text-infi-gold transition-colors min-h-[44px] flex items-center">
                Contact
              </Link>
              <Link to="/help" className="block text-sm sm:text-base text-gray-400 hover:text-infi-gold transition-colors min-h-[44px] flex items-center">
                Help Center
              </Link>
              <Link to="/docs" className="block text-sm sm:text-base text-gray-400 hover:text-infi-gold transition-colors min-h-[44px] flex items-center">
                Documentation
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-infi-gold text-base sm:text-lg">Legal</h3>
            <div className="space-y-2">
              <a href="#" className="block text-sm sm:text-base text-gray-400 hover:text-infi-gold transition-colors min-h-[44px] flex items-center">
                Privacy Policy
              </a>
              <a href="#" className="block text-sm sm:text-base text-gray-400 hover:text-infi-gold transition-colors min-h-[44px] flex items-center">
                Terms of Service
              </a>
              <a href="#" className="block text-sm sm:text-base text-gray-400 hover:text-infi-gold transition-colors min-h-[44px] flex items-center">
                Cookie Policy
              </a>
              <a href="#" className="block text-sm sm:text-base text-gray-400 hover:text-infi-gold transition-colors min-h-[44px] flex items-center">
                Disclaimer
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-infi-gold/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-sm sm:text-base text-gray-400">
            © 2024 InfiWorld. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
