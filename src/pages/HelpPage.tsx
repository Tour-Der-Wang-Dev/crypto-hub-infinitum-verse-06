
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Search, Wallet, Shield, CreditCard, Users, HelpCircle } from 'lucide-react';
import { useState } from 'react';

const HelpPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    {
      icon: <Wallet className="h-6 w-6" />,
      title: 'Wallet & Setup',
      count: 8,
      color: 'bg-blue-500',
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: 'Payments & Transactions',
      count: 12,
      color: 'bg-green-500',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Security & Privacy',
      count: 6,
      color: 'bg-red-500',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Account Management',
      count: 10,
      color: 'bg-purple-500',
    },
  ];

  const faqs = [
    {
      category: 'Wallet & Setup',
      question: 'How do I connect my MetaMask wallet?',
      answer: 'Click the "Connect Wallet" button in the top right corner, then select MetaMask from the options. Make sure you have MetaMask installed and set up properly.',
    },
    {
      category: 'Wallet & Setup',
      question: 'Which wallets are supported?',
      answer: 'We support MetaMask, WalletConnect, Coinbase Wallet, and most popular Ethereum-compatible wallets.',
    },
    {
      category: 'Payments & Transactions',
      question: 'What cryptocurrencies can I use?',
      answer: 'We support Bitcoin (BTC), Ethereum (ETH), USDC, USDT, and many other popular cryptocurrencies. Check the payment options during checkout.',
    },
    {
      category: 'Payments & Transactions',
      question: 'How long do transactions take?',
      answer: 'Transaction times vary by network. Ethereum transactions typically take 1-5 minutes, while Bitcoin can take 10-60 minutes depending on network congestion.',
    },
    {
      category: 'Security & Privacy',
      question: 'How is my data protected?',
      answer: 'We use industry-standard encryption and never store your private keys. Your wallet remains in your control at all times.',
    },
    {
      category: 'Security & Privacy',
      question: 'Is KYC required?',
      answer: 'Basic KYC may be required for certain high-value transactions or services, but most features can be used without identity verification.',
    },
    {
      category: 'Account Management',
      question: 'How do I update my profile?',
      answer: 'Connect your wallet and click on the profile icon. You can update your display name, email, and other preferences.',
    },
    {
      category: 'Account Management',
      question: 'Can I use multiple wallets?',
      answer: 'Yes, you can connect multiple wallets to your account. Switch between them using the wallet selector.',
    },
  ];

  const filteredFaqs = faqs.filter(
    faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Help Center
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Find answers to common questions and get help with using InfiWorld
          </p>
          
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search for help..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-infi-dark-blue/50 border-infi-gold/20"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <Card key={index} className="card-glass hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6 text-center">
                <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold mb-2">{category.title}</h3>
                <Badge variant="outline">{category.count} articles</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <Card className="card-glass">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <HelpCircle className="h-6 w-6 text-infi-gold" />
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-400">No results found for "{searchTerm}"</p>
              </div>
            ) : (
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-infi-gold/20 rounded-lg px-4">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex items-start gap-3">
                        <Badge variant="outline" className="mt-1 text-xs">
                          {faq.category}
                        </Badge>
                        <span>{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <Card className="card-glass">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold mb-4">Still need help?</h3>
              <p className="text-gray-300 mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-2 bg-infi-blue hover:bg-infi-blue/80 rounded-md transition-colors">
                  Contact Support
                </button>
                <button className="px-6 py-2 border border-infi-gold/30 hover:bg-infi-gold/10 rounded-md transition-colors">
                  Join Community
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default HelpPage;
