
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InfinityLogo from './InfinityLogo';

const Hero = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState({
    cryptoUsers: 0,
    transactions: 0,
    merchants: 0,
    volume: 0,
  });

  useEffect(() => {
    // Animate the counter numbers
    const interval = setInterval(() => {
      setCount(prev => ({
        cryptoUsers: prev.cryptoUsers < 50 ? prev.cryptoUsers + 1 : 50,
        transactions: prev.transactions < 10000 ? prev.transactions + 250 : 10000,
        merchants: prev.merchants < 2500 ? prev.merchants + 62 : 2500,
        volume: prev.volume < 1.2 ? prev.volume + 0.03 : 1.2,
      }));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-16 pb-10 flex flex-col">
      {/* Hero section - Enhanced mobile typography and spacing */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 mt-5">
        <div className="mb-6">
          <InfinityLogo className="h-16 w-16 sm:h-20 sm:w-20 mx-auto" />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          The Future of <br className="hidden sm:block" />
          <span className="text-gradient">Crypto Payments</span>
        </h1>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed px-4">
          InfiWorld connects cryptocurrency with real-world services in one seamless ecosystem. From marketplace to travel, experience the limitless possibilities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md sm:max-w-none">
          <Button 
            onClick={() => navigate('/map')} 
            size="lg" 
            className="gold-gradient animate-pulse-gold min-h-[48px] text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto"
          >
            Explore Map
          </Button>
          <Button 
            onClick={() => navigate('/marketplace')} 
            variant="outline" 
            size="lg" 
            className="border-infi-gold text-infi-gold hover:bg-infi-gold/10 transition min-h-[48px] text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto"
          >
            View All Services
          </Button>
        </div>
      </div>

      {/* Stats - Enhanced mobile grid and typography */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 py-8 sm:py-10">
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-infi-gold-light mb-1">{count.cryptoUsers}+</div>
          <div className="text-gray-400 text-xs sm:text-sm">Crypto Merchants</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-infi-gold-light mb-1">{count.transactions.toLocaleString()}+</div>
          <div className="text-gray-400 text-xs sm:text-sm">Transactions</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-infi-gold-light mb-1">{count.merchants.toLocaleString()}+</div>
          <div className="text-gray-400 text-xs sm:text-sm">Partners</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-infi-gold-light mb-1">${count.volume.toFixed(1)}M</div>
          <div className="text-gray-400 text-xs sm:text-sm">Daily Transactions</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
