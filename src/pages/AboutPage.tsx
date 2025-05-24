
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Globe, Shield, Zap } from 'lucide-react';

const AboutPage = () => {
  const features = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Global Crypto Network',
      description: 'Connect with crypto enthusiasts and businesses worldwide through our comprehensive platform.',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Secure Transactions',
      description: 'Advanced security measures and blockchain technology ensure your transactions are safe.',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Community Driven',
      description: 'Built by the community, for the community. Join thousands of crypto users globally.',
    },
    {
      icon: <Zap className="h-6 w-6" />,
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
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            About InfiWorld
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Revolutionizing the way people interact with cryptocurrency through 
            an integrated ecosystem of services, from payments to travel.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary">Blockchain</Badge>
            <Badge variant="secondary">DeFi</Badge>
            <Badge variant="secondary">Travel</Badge>
            <Badge variant="secondary">Marketplace</Badge>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="card-glass text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-infi-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose InfiWorld?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-glass">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="text-infi-gold">{feature.icon}</div>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <Card className="card-glass">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
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
