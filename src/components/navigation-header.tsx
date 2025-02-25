import React, { useState } from 'react';
import {
  ChevronDown,
  Bot,
  Radio,
  Database,
  MessageSquare,
  Activity,
  Wifi,
  BarChart3,
  LineChart,
  Brain,
  Target,
  Rocket,
  Users,
  Layout,
  Grid,
  UserCircle,
  Share2,
  BellRing,
  BookOpen,
  FileText,
  Mail,
  ClipboardList,
  HelpCircle,
  Code2,
  Link,
  Building,
  Briefcase,
  Shield,
  ListChecks,
  Gauge,
  ExternalLink,
} from 'lucide-react';

const NavigationHeader = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navigation = {
    platform: {
      label: 'Product',
      spotlight: {
        title: 'Get started for free',
        description: 'Learn more about the free dashboard for ecommerce brands',
        cta: 'Learn more',
        image: 'https://placehold.co/400x280',
      },
      sections: [
        {
          label: 'Platform',
          items: [
            {
              icon: <Bot className="h-5 w-5 text-purple-600" />,
              label: 'Moby AI',
              description: 'AI-powered insights and automation',
            },
            {
              icon: <Radio className="h-5 w-5 text-purple-600" />,
              label: 'Pixel',
              description: 'First-party data collection',
            },
            {
              icon: <Database className="h-5 w-5 text-purple-600" />,
              label: 'Data Platform',
              description: 'Unified data infrastructure',
            },
            {
              icon: <Share2 className="h-5 w-5 text-purple-600" />,
              label: 'Integrations',
              description: 'Connect your favorite tools',
            },
          ],
        },
        {
          label: 'Products + Features',
          items: [
            {
              icon: <Bot className="h-5 w-5 text-blue-600" />,
              label: 'Moby Agents',
              description: 'AI-powered automation tools',
            },
            {
              icon: <MessageSquare className="h-5 w-5 text-blue-600" />,
              label: 'Moby Chat',
              description: 'Interactive AI assistant',
            },
            {
              icon: <Activity className="h-5 w-5 text-blue-600" />,
              label: 'Attribution',
              description: 'Track customer journeys',
            },
            {
              icon: <Wifi className="h-5 w-5 text-blue-600" />,
              label: 'Sonar',
              description: 'Real-time monitoring',
            },
            {
              icon: <BarChart3 className="h-5 w-5 text-blue-600" />,
              label: 'MMM',
              description: 'Marketing mix modeling',
            },
            {
              icon: <LineChart className="h-5 w-5 text-blue-600" />,
              label: 'Self-Serve Analytics',
              description: 'Custom reporting tools',
            },
            {
              icon: <Brain className="h-5 w-5 text-blue-600" />,
              label: 'Custom Business Intelligence',
              description: 'Advanced analytics solutions',
            },
          ],
        },
      ],
    },
    solutions: {
      label: 'Solutions',
      spotlight: {
        title: 'Get a tour of Triple Whale',
        description: 'See the platform in action',
        cta: 'Get a tour',
        image: 'https://placehold.co/400x280',
      },
      sections: [
        {
          label: 'Use Cases',
          items: [
            {
              icon: <Target className="h-5 w-5 text-green-600" />,
              label: 'Acquire customers',
              description: 'Grow your customer base',
            },
            {
              icon: <Gauge className="h-5 w-5 text-green-600" />,
              label: 'Convert visitors',
              description: 'Optimize conversion rates',
            },
            {
              icon: <Users className="h-5 w-5 text-green-600" />,
              label: 'Engage customers',
              description: 'Build lasting relationships',
            },
            {
              icon: <ListChecks className="h-5 w-5 text-green-600" />,
              label: 'Scale operations',
              description: 'Coming soon',
            },
          ],
        },
        {
          label: 'Personas',
          items: [
            {
              icon: <Rocket className="h-5 w-5 text-blue-600" />,
              label: 'Founder',
              description: 'Strategic business insights',
            },
            {
              icon: <Users className="h-5 w-5 text-blue-600" />,
              label: 'Marketing Leader',
              description: 'Team and campaign optimization',
            },
            {
              icon: <Target className="h-5 w-5 text-blue-600" />,
              label: 'Performance Marketer',
              description: 'Drive ROAS and conversions',
            },
            {
              icon: <UserCircle className="h-5 w-5 text-blue-600" />,
              label: 'Retention Marketer',
              description: 'Boost customer lifetime value',
            },
            {
              icon: <Layout className="h-5 w-5 text-blue-600" />,
              label: 'CRO Specialist',
              description: 'Optimize user experience',
            },
            {
              icon: <Grid className="h-5 w-5 text-blue-600" />,
              label: 'Ops Manager',
              description: 'Streamline operations',
            },
            {
              icon: <Database className="h-5 w-5 text-blue-600" />,
              label: 'Data Analyst',
              description: 'Deep data insights',
            },
            {
              icon: <Users className="h-5 w-5 text-blue-600" />,
              label: 'Agency',
              description: 'Multi-client management',
            },
            {
              icon: <Share2 className="h-5 w-5 text-blue-600" />,
              label: 'Tech Partners',
              description: 'Integration solutions',
            },
          ],
        },
      ],
    },
    resources: {
      label: 'Resources',
      spotlight: {
        title: 'Q1 Benchmarks Report',
        description: 'Get all the insights on industry insights for Q1',
        cta: 'Get the report',
        image: 'https://placehold.co/400x280',
      },
      sections: [
        {
          label: 'Learn',
          items: [
            {
              icon: <BellRing className="h-5 w-5 text-blue-600" />,
              label: 'Product Releases',
              href: '#',
            },
            {
              icon: <ClipboardList className="h-5 w-5 text-blue-600" />,
              label: 'Case Studies',
              href: '#',
            },
            {
              icon: <BookOpen className="h-5 w-5 text-blue-600" />,
              label: 'Blog',
              href: '#',
            },
            {
              icon: <FileText className="h-5 w-5 text-blue-600" />,
              label: 'Guides + Reports',
              href: '#',
            },
            {
              icon: <Mail className="h-5 w-5 text-blue-600" />,
              label: 'Industry Newsletter',
              href: '#',
            },
            {
              icon: <BarChart3 className="h-5 w-5 text-blue-600" />,
              label: 'TW vs Competitors',
              href: '#',
            },
          ],
        },
        {
          label: 'Support',
          items: [
            {
              icon: <HelpCircle className="h-5 w-5 text-purple-600" />,
              label: 'Help Center',
              href: '#',
            },
            {
              icon: <Code2 className="h-5 w-5 text-purple-600" />,
              label: 'Developer Docs',
              href: '#',
            },
            {
              icon: <Users className="h-5 w-5 text-purple-600" />,
              label: 'Find an Agency',
              href: '#',
            },
            {
              icon: <Link className="h-5 w-5 text-purple-600" />,
              label: 'Find a Tech Partner',
              href: '#',
            },
          ],
        },
        {
          label: 'Company',
          items: [
            {
              icon: <Building className="h-5 w-5 text-gray-600" />,
              label: 'About Us',
              href: '#',
            },
            {
              icon: <Briefcase className="h-5 w-5 text-gray-600" />,
              label: 'Careers',
              href: '#',
            },
            {
              icon: <Shield className="h-5 w-5 text-gray-600" />,
              label: 'Trust Center',
              href: '#',
            },
          ],
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-7xl">
        {/* Main Navigation Line */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="#" className="mr-8 text-xl font-bold text-blue-600">
              Triple Whale
            </a>

            {Object.entries(navigation).map(([key, section]) => (
              <button
                key={key}
                onClick={() => setActiveDropdown(activeDropdown === key ? null : key)}
                className={`flex items-center space-x-1 rounded-md px-3 py-2 text-sm font-medium ${
                  activeDropdown === key
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                <span>{section.label}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            ))}

            <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">
              Whalies
            </a>
            <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">
              Pricing
            </a>
          </div>

          <a
            href="#"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Book Demo
          </a>
        </div>

        {/* Dropdown Content */}
        {activeDropdown && (
          <div className="mt-4 rounded-lg bg-white p-6 shadow-xl">
            <div className="grid grid-cols-12 gap-8">
              {/* Main content columns */}
              <div className="col-span-8 grid grid-cols-2 gap-16">
                {navigation[activeDropdown].sections && activeDropdown !== 'resources' ? (
                  navigation[activeDropdown].sections.map((section, idx) => (
                    <div key={idx} className="space-y-4">
                      <h3 className="font-semibold text-gray-900">{section.label}</h3>
                      <div className="grid gap-4">
                        {section.items.map((item, itemIdx) => (
                          <a
                            key={itemIdx}
                            href={item.href || '#'}
                            className="flex items-start space-x-3 rounded-lg p-3 hover:bg-gray-50"
                          >
                            {item.icon && <div className="flex-shrink-0">{item.icon}</div>}
                            <div>
                              <div className="font-medium text-gray-900">{item.label}</div>
                              {item.description && (
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              )}
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))
                ) : activeDropdown === 'resources' ? (
                  <div className="col-span-2 grid grid-cols-3 gap-8">
                    {navigation.resources.sections.map((section, idx) => (
                      <div key={idx} className="space-y-4">
                        <h3 className="font-semibold text-gray-900">{section.label}</h3>
                        <div className="grid gap-4">
                          {section.items.map((item, itemIdx) => (
                            <a
                              key={itemIdx}
                              href={item.href || '#'}
                              className="flex items-start space-x-3 rounded-lg p-3 hover:bg-gray-50"
                            >
                              {item.icon && <div className="flex-shrink-0">{item.icon}</div>}
                              <div>
                                <div className="font-medium text-gray-900">{item.label}</div>
                                {item.description && (
                                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                )}
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>

              {/* Spotlight section */}
              <div className="col-span-4 rounded-lg bg-blue-50">
                <div className="flex flex-col h-full">
                  <div className="p-4">
                    <img
                      src={navigation[activeDropdown].spotlight.image}
                      alt="Spotlight"
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {navigation[activeDropdown].spotlight.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-6">
                      {navigation[activeDropdown].spotlight.description}
                    </p>
                    <div className="mt-auto">
                      <a
                        href="#"
                        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                      >
                        {navigation[activeDropdown].spotlight.cta}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationHeader;
