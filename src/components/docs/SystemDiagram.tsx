
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Database, Shield, Globe, Zap, Users, Server } from 'lucide-react';

const SystemDiagram = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6">
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-gradient">
            InfiWorld System Architecture
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Frontend Layer */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Globe className="h-5 w-5 text-infi-gold" />
              Frontend Layer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Pages</h4>
                  <div className="space-y-1 text-sm">
                    <Badge variant="outline">Index</Badge>
                    <Badge variant="outline">Marketplace</Badge>
                    <Badge variant="outline">Freelance</Badge>
                    <Badge variant="outline">Travel</Badge>
                    <Badge variant="outline">Dashboard</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Components</h4>
                  <div className="space-y-1 text-sm">
                    <Badge variant="outline">Layout</Badge>
                    <Badge variant="outline">Navbar</Badge>
                    <Badge variant="outline">ProductCard</Badge>
                    <Badge variant="outline">FreelancerCard</Badge>
                    <Badge variant="outline">Travel Tabs</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">State & Hooks</h4>
                  <div className="space-y-1 text-sm">
                    <Badge variant="outline">AuthContext</Badge>
                    <Badge variant="outline">TanStack Query</Badge>
                    <Badge variant="outline">useWeather</Badge>
                    <Badge variant="outline">use-toast</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Security Layer */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-infi-gold" />
              Security & Auth Layer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Authentication</h4>
                  <div className="space-y-1 text-sm">
                    <Badge variant="outline">Protected Routes</Badge>
                    <Badge variant="outline">Wallet Connect</Badge>
                    <Badge variant="outline">Profile Modal</Badge>
                    <Badge variant="outline">Login Flow</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Security</h4>
                  <div className="space-y-1 text-sm">
                    <Badge variant="outline">CSRF Protection</Badge>
                    <Badge variant="outline">XSS Sanitization</Badge>
                    <Badge variant="outline">Security Headers</Badge>
                    <Badge variant="outline">Vulnerability Scanner</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Data Layer */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Database className="h-5 w-5 text-infi-gold" />
              Data Layer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-indigo-50 dark:bg-indigo-950/20 border-indigo-200 dark:border-indigo-800">
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Mock Data</h4>
                  <div className="space-y-1 text-sm">
                    <Badge variant="outline">Marketplace</Badge>
                    <Badge variant="outline">Freelance</Badge>
                    <Badge variant="outline">Travel</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-teal-50 dark:bg-teal-950/20 border-teal-200 dark:border-teal-800">
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">External APIs</h4>
                  <div className="space-y-1 text-sm">
                    <Badge variant="outline">Weather API</Badge>
                    <Badge variant="outline">Crypto Rates</Badge>
                    <Badge variant="outline">Mapbox</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-pink-50 dark:bg-pink-950/20 border-pink-200 dark:border-pink-800">
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Blockchain</h4>
                  <div className="space-y-1 text-sm">
                    <Badge variant="outline">Ethereum</Badge>
                    <Badge variant="outline">Web3 Wallet</Badge>
                    <Badge variant="outline">Smart Contracts</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Infrastructure */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Server className="h-5 w-5 text-infi-gold" />
              Infrastructure & Performance
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-gray-50 dark:bg-gray-950/20 border-gray-200 dark:border-gray-800">
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Performance</h4>
                  <div className="space-y-1 text-sm">
                    <Badge variant="outline">Service Worker</Badge>
                    <Badge variant="outline">Code Splitting</Badge>
                    <Badge variant="outline">Lazy Loading</Badge>
                    <Badge variant="outline">PWA Support</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800">
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Monitoring</h4>
                  <div className="space-y-1 text-sm">
                    <Badge variant="outline">Lighthouse CI</Badge>
                    <Badge variant="outline">Performance Metrics</Badge>
                    <Badge variant="outline">SEO Monitoring</Badge>
                    <Badge variant="outline">Error Tracking</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SystemDiagram;
