
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Globe, Shield, Zap } from 'lucide-react';

const AboutPage = () => {
  const features = [
    {
      icon: <Globe className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: 'Global Crypto Network',
      description: 'Connect with crypto enthusiasts and businesses worldwide through our comprehensive platform.',
    },
    {
      icon: <Shield className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: 'Secure Transactions',
      description: 'Advanced security measures and blockchain technology ensure your transactions are safe.',
    },
    {
      icon: <Users className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: 'Community Driven',
      description: 'Built by the community, for the community. Join thousands of crypto users globally.',
    },
    {
      icon: <Zap className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: 'Fast & Efficient',
      description: 'Lightning-fast transactions and real-time updates keep you ahead of the market.',
    },
  ];

  const stats = [
    { label: 'Active Users', value: '50K+' },
    { label: 'Transactions', value: '1M+' },
    { label: 'Countries', value: '120+' },
    { label: 'Uptime', value: '99.9%' },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Hero Section - Enhanced mobile typography */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient leading-tight">
            About InfiWorld
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
            Revolutionizing the way people interact with cryptocurrency through 
            an integrated ecosystem of services, from payments to travel.
          </p>
          <div className="flex flex-wrap justify-center gap-2 px-4">
            <Badge variant="secondary" className="text-xs sm:text-sm">Blockchain</Badge>
            <Badge variant="secondary" className="text-xs sm:text-sm">DeFi</Badge>
            <Badge variant="secondary" className="text-xs sm:text-sm">Travel</Badge>
            <Badge variant="secondary" className="text-xs sm:text-sm">Marketplace</Badge>
          </div>
        </div>

        {/* Stats Section - Enhanced mobile grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="card-glass text-center">
              <CardContent className="pt-4 sm:pt-6 pb-4 sm:pb-6 px-3 sm:px-6">
                <div className="text-2xl sm:text-3xl font-bold text-infi-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section - Enhanced mobile layout */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 px-4">Why Choose InfiWorld?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-glass">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="flex items-center gap-3 text-lg sm:text-xl">
                    <div className="text-infi-gold flex-shrink-0">{feature.icon}</div>
                    <span className="leading-tight">{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Section - Enhanced mobile padding */}
        <Card className="card-glass">
          <CardHeader className="pb-4 sm:pb-6">
            <CardTitle className="text-xl sm:text-2xl text-center">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-center px-4 sm:px-6">
            <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              To create a unified ecosystem where cryptocurrency transcends traditional boundaries, 
              enabling seamless transactions, global connectivity, and innovative financial solutions 
              that empower individuals and businesses worldwide.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AboutPage;
