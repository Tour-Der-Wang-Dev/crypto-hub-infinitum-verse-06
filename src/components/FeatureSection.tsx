
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Marketplace, Freelance, Travel } from '@/components/custom-icons';
import { Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  route: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, route }) => {
  const navigate = useNavigate();
  
  return (
    <Card className="card-glass p-4 sm:p-6 h-full flex flex-col">
      <div className="bg-infi-blue/30 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full mb-4 text-infi-gold">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4 flex-grow text-sm sm:text-base leading-relaxed">{description}</p>
      <Button 
        variant="outline" 
        className="border-infi-gold/50 text-infi-gold-light hover:bg-infi-gold/10 min-h-[44px] text-sm sm:text-base"
        onClick={() => navigate(route)}
      >
        Learn More
      </Button>
    </Card>
  );
};

const FeatureSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto mb-8 sm:mb-10 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight px-4">
          InfiWorld integrates cryptocurrency into everyday services, connecting the blockchain world with real-life applications.
        </h2>
        <div className="w-16 sm:w-20 h-1 bg-infi-gold mx-auto"></div>
      </div>
      
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <FeatureCard
          title="Crypto Marketplace"
          description="Buy and sell products with cryptocurrency. Find unique items and connect with vendors worldwide."
          icon={<Marketplace size={20} className="sm:w-6 sm:h-6" />}
          route="/marketplace"
        />
        
        <FeatureCard
          title="Freelance Services"
          description="Hire talented professionals or offer your services with secure cryptocurrency payments."
          icon={<Freelance size={20} className="sm:w-6 sm:h-6" />}
          route="/freelance"
        />
        
        <FeatureCard
          title="Travel Reservations"
          description="Book flights, hotels, and experiences using your crypto payment wallet. Enjoy seamless travel planning."
          icon={<Travel size={20} className="sm:w-6 sm:h-6" />}
          route="/travel"
        />
        
        <FeatureCard
          title="Secure Transactions"
          description="All payments are secured through blockchain technology, ensuring transparency and security in your transactions."
          icon={<Shield size={20} className="sm:w-6 sm:h-6" />}
          route="/verification"
        />
      </div>
    </section>
  );
};

export default FeatureSection;
