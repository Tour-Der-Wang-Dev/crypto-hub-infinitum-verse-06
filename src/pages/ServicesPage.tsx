
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Map, ShoppingCart, Briefcase, Plane, Shield, Zap, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const mainServices = [
    {
      icon: <Map className="h-8 w-8" />,
      title: 'Crypto Payment Map',
      description: 'Find crypto-friendly businesses, ATMs, and exchanges worldwide.',
      features: ['Global merchant directory', 'Real-time availability', 'User reviews'],
      link: '/map',
      badge: 'Navigation',
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: 'Marketplace',
      description: 'Buy and sell products using cryptocurrency securely.',
      features: ['Escrow protection', 'Multi-coin support', 'Verified sellers'],
      link: '/marketplace',
      badge: 'Commerce',
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: 'Freelance Platform',
      description: 'Connect with freelancers and pay with crypto.',
      features: ['Smart contracts', 'Milestone payments', 'Global talent'],
      link: '/freelance',
      badge: 'Work',
    },
    {
      icon: <Plane className="h-8 w-8" />,
      title: 'Crypto Travel',
      description: 'Book flights, hotels, and experiences with cryptocurrency.',
      features: ['Exclusive deals', 'Instant booking', 'Travel insurance'],
      link: '/travel',
      badge: 'Travel',
    },
  ];

  const additionalServices = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Security & Verification',
      description: 'Advanced identity verification and transaction security.',
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Instant Transfers',
      description: 'Lightning-fast crypto transfers with minimal fees.',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Community Support',
      description: '24/7 community-driven support and assistance.',
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Multi-Currency',
      description: 'Support for major cryptocurrencies and stablecoins.',
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive cryptocurrency solutions for modern digital life
          </p>
        </div>

        {/* Main Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Core Platforms</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="card-glass hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-infi-gold">{service.icon}</div>
                    <Badge variant="outline">{service.badge}</Badge>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-infi-gold rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full gold-gradient">
                    <Link to={service.link}>Explore {service.title}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="card-glass text-center">
                <CardHeader>
                  <div className="text-infi-gold mx-auto mb-4">{service.icon}</div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="card-glass text-center">
          <CardContent className="pt-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of users who trust InfiWorld for their cryptocurrency needs. 
              Connect your wallet today and explore the future of digital finance.
            </p>
            <Button size="lg" className="gold-gradient">
              Connect Wallet
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default ServicesPage;
