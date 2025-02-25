import {
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
} from 'lucide-react';

export const useNavigation = () => {
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
              href: '#',
            },
            {
              icon: <Radio className="h-5 w-5 text-purple-600" />,
              label: 'Pixel',
              description: 'First-party data collection',
              href: '#',
            },
            {
              icon: <Database className="h-5 w-5 text-purple-600" />,
              label: 'Data Platform',
              description: 'Unified data infrastructure',
              href: '#',
            },
            {
              icon: <Share2 className="h-5 w-5 text-purple-600" />,
              label: 'Integrations',
              description: 'Connect your favorite tools',
              href: '#',
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
              href: '#',
            },
            {
              icon: <MessageSquare className="h-5 w-5 text-blue-600" />,
              label: 'Moby Chat',
              description: 'Interactive AI assistant',
              href: '#',
            },
            {
              icon: <Activity className="h-5 w-5 text-blue-600" />,
              label: 'Attribution',
              description: 'Track customer journeys',
              href: '#',
            },
            {
              icon: <Wifi className="h-5 w-5 text-blue-600" />,
              label: 'Sonar',
              description: 'Real-time monitoring',
              href: '#',
            },
            {
              icon: <BarChart3 className="h-5 w-5 text-blue-600" />,
              label: 'MMM',
              description: 'Marketing mix modeling',
              href: '#',
            },
            {
              icon: <LineChart className="h-5 w-5 text-blue-600" />,
              label: 'Self-Serve Analytics',
              description: 'Custom reporting tools',
              href: '#',
            },
            {
              icon: <Brain className="h-5 w-5 text-blue-600" />,
              label: 'Custom Business Intelligence',
              description: 'Advanced analytics solutions',
              href: '#',
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
              href: '#',
            },
            {
              icon: <Gauge className="h-5 w-5 text-green-600" />,
              label: 'Convert visitors',
              description: 'Optimize conversion rates',
              href: '#',
            },
            {
              icon: <Users className="h-5 w-5 text-green-600" />,
              label: 'Engage customers',
              description: 'Build lasting relationships',
              href: '#',
            },
            {
              icon: <ListChecks className="h-5 w-5 text-green-600" />,
              label: 'Scale operations',
              description: 'Coming soon',
              href: '#',
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
              href: '#',
            },
            {
              icon: <Users className="h-5 w-5 text-blue-600" />,
              label: 'Marketing Leader',
              description: 'Team and campaign optimization',
              href: '#',
            },
            {
              icon: <Target className="h-5 w-5 text-blue-600" />,
              label: 'Performance Marketer',
              description: 'Drive ROAS and conversions',
              href: '#',
            },
            {
              icon: <UserCircle className="h-5 w-5 text-blue-600" />,
              label: 'Retention Marketer',
              description: 'Boost customer lifetime value',
              href: '#',
            },
            {
              icon: <Layout className="h-5 w-5 text-blue-600" />,
              label: 'CRO Specialist',
              description: 'Optimize user experience',
              href: '#',
            },
            {
              icon: <Grid className="h-5 w-5 text-blue-600" />,
              label: 'Ops Manager',
              description: 'Streamline operations',
              href: '#',
            },
            {
              icon: <Database className="h-5 w-5 text-blue-600" />,
              label: 'Data Analyst',
              description: 'Deep data insights',
              href: '#',
            },
            {
              icon: <Users className="h-5 w-5 text-blue-600" />,
              label: 'Agency',
              description: 'Multi-client management',
              href: '#',
            },
            {
              icon: <Share2 className="h-5 w-5 text-blue-600" />,
              label: 'Tech Partners',
              description: 'Integration solutions',
              href: '#',
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
              description: '',
              href: '#',
            },
            {
              icon: <ClipboardList className="h-5 w-5 text-blue-600" />,
              label: 'Case Studies',
              description: '',
              href: '#',
            },
            {
              icon: <BookOpen className="h-5 w-5 text-blue-600" />,
              label: 'Blog',
              description: '',
              href: '#',
            },
            {
              icon: <FileText className="h-5 w-5 text-blue-600" />,
              label: 'Guides + Reports',
              description: '',
              href: '#',
            },
            {
              icon: <Mail className="h-5 w-5 text-blue-600" />,
              label: 'Industry Newsletter',
              description: '',
              href: '#',
            },
            {
              icon: <BarChart3 className="h-5 w-5 text-blue-600" />,
              label: 'TW vs Competitors',
              description: '',
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
              description: '',
              href: '#',
            },
            {
              icon: <Code2 className="h-5 w-5 text-purple-600" />,
              label: 'Developer Docs',
              description: '',
              href: '#',
            },
            {
              icon: <Users className="h-5 w-5 text-purple-600" />,
              label: 'Find an Agency',
              description: '',
              href: '#',
            },
            {
              icon: <Link className="h-5 w-5 text-purple-600" />,
              label: 'Find a Tech Partner',
              description: '',
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
              description: '',
              href: '#',
            },
            {
              icon: <Briefcase className="h-5 w-5 text-gray-600" />,
              label: 'Careers',
              description: '',
              href: '#',
            },
            {
              icon: <Shield className="h-5 w-5 text-gray-600" />,
              label: 'Trust Center',
              description: '',
              href: '#',
            },
          ],
        },
      ],
    },
  };

  return navigation;
};

export type Navigation = ReturnType<typeof useNavigation>;
