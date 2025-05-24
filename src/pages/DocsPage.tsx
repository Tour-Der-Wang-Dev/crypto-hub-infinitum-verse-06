
import Layout from '@/components/Layout';
import SystemDiagram from '@/components/docs/SystemDiagram';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, AlertCircle, Folder, FileText } from 'lucide-react';

const DocsPage = () => {
  const currentStructure = [
    { path: 'src/components/', status: 'good', description: 'Well organized by feature' },
    { path: 'src/pages/', status: 'good', description: 'Clear page separation' },
    { path: 'src/hooks/', status: 'good', description: 'Custom hooks isolated' },
    { path: 'src/lib/', status: 'good', description: 'Utilities and helpers' },
    { path: 'src/data/', status: 'good', description: 'Mock data separated' },
    { path: 'docs/', status: 'excellent', description: 'Comprehensive documentation' },
  ];

  const suggestions = [
    {
      title: 'Feature-based Organization',
      description: 'Consider grouping by features for larger components',
      example: 'src/features/marketplace/, src/features/travel/',
      priority: 'medium'
    },
    {
      title: 'Shared Components',
      description: 'Move reusable components to src/components/shared/',
      example: 'Cards, forms, modals that are used across features',
      priority: 'low'
    },
    {
      title: 'API Layer',
      description: 'Create src/api/ for external service integrations',
      example: 'Weather API, crypto rates, blockchain interactions',
      priority: 'medium'
    },
    {
      title: 'Constants & Config',
      description: 'Add src/config/ for application configuration',
      example: 'API endpoints, theme colors, feature flags',
      priority: 'low'
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Documentation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            System architecture, folder structure, and development guidelines for InfiWorld
          </p>
        </div>

        {/* System Diagram */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">System Architecture</h2>
          <SystemDiagram />
        </div>

        {/* Folder Structure Analysis */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Folder Structure Analysis</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Current Structure */}
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Folder className="h-5 w-5 text-infi-gold" />
                  Current Structure
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {currentStructure.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <div className="flex-1">
                      <code className="text-sm font-mono text-infi-gold">{item.path}</code>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {item.status}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Suggestions */}
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-infi-gold" />
                  Improvement Suggestions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {suggestions.map((suggestion, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center gap-2">
                          {suggestion.title}
                          <Badge 
                            variant={suggestion.priority === 'high' ? 'destructive' : suggestion.priority === 'medium' ? 'default' : 'secondary'}
                          >
                            {suggestion.priority}
                          </Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <p className="text-gray-600 dark:text-gray-400">{suggestion.description}</p>
                          <code className="block text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded">
                            {suggestion.example}
                          </code>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Documentation Links */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Documentation Files</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="card-glass hover:scale-105 transition-transform cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-infi-gold" />
                  README.md
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Setup instructions, tech stack, and contribution guidelines</p>
              </CardContent>
            </Card>

            <Card className="card-glass hover:scale-105 transition-transform cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-infi-gold" />
                  filesExplainer.md
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Complete file structure with import complexity indicators</p>
              </CardContent>
            </Card>

            <Card className="card-glass hover:scale-105 transition-transform cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-infi-gold" />
                  scripts.md
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">npm scripts reference with parameters and examples</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technologies Used */}
        <Card className="card-glass">
          <CardHeader>
            <CardTitle className="text-center">Technologies & Standards</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="outline">React 18</Badge>
              <Badge variant="outline">TypeScript</Badge>
              <Badge variant="outline">Vite</Badge>
              <Badge variant="outline">Tailwind CSS</Badge>
              <Badge variant="outline">shadcn/ui</Badge>
              <Badge variant="outline">TanStack Query</Badge>
              <Badge variant="outline">React Router</Badge>
              <Badge variant="outline">Recharts</Badge>
              <Badge variant="outline">PWA</Badge>
              <Badge variant="outline">Service Worker</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default DocsPage;
