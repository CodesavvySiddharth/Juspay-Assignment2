import {
Home,
Package,
Building2,
Briefcase,
BookOpen,
Headset,
Beaker,
Leaf,
TrendingUp,
Mail,
Code2,
Cloud,
Users,
Lightbulb,
Shield,
BarChart3,
Settings,
Wrench,
Layout as Presentation,
Target,
GraduationCap,
Database,
Brain,
ChartLine as LineChart,
} from 'lucide-react'


// NOTE: some lucide icon names differ; adjust imports above to available lucide names in your version.


const menuItems = {
main: [
{ id: 'home', icon: Home, title: 'Home', subtitle: 'Welcome to our comprehensive platform' },
{ id: 'products-services', icon: Package, title: 'Products & Services', subtitle: 'Explore our comprehensive offerings' },
{ id: 'industry', icon: Building2, title: 'Industry Solutions', subtitle: 'Specialized solutions for different industries' },
{ id: 'company', icon: Briefcase, title: 'Company', subtitle: 'Learn about our organization and culture' },
{ id: 'resources', icon: BookOpen, title: 'Resources', subtitle: 'Knowledge base, tools, and learning materials' },
{ id: 'support', icon: Headset, title: 'Support', subtitle: 'Get help and support when needed' },
{ id: 'research', icon: Beaker, title: 'Research & Innovation', subtitle: 'Cutting-edge research and innovation' },
{ id: 'sustainability', icon: Leaf, title: 'Sustainability', subtitle: 'Environmental responsibility' },
{ id: 'investor', icon: TrendingUp, title: 'Investor Relations', subtitle: 'Financial information and investor resources' },
{ id: 'contact', icon: Mail, title: 'Contact', subtitle: 'Get in touch with our team' },
],


productsServices: [
{ id: 1, icon: Code2, title: 'Software Solutions', subtitle: 'Custom software development and deployment', navigateTo: null },
{ id: 2, icon: Cloud, title: 'Cloud & Infrastructure', subtitle: 'Scalable cloud solutions and infrastructure', navigateTo: null },
{ id: 3, icon: Users, title: 'Consulting Services', subtitle: 'Expert guidance and strategic support', navigateTo: 'screen4' },
{ id: 4, icon: Lightbulb, title: 'Digital Transformation', subtitle: 'Comprehensive digital transformation strategies', navigateTo: null },
{ id: 5, icon: Shield, title: 'Cybersecurity Consulting', subtitle: 'Comprehensive cybersecurity solutions', navigateTo: null },
{ id: 6, icon: BarChart3, title: 'Data & Analytics Consulting', subtitle: 'Data strategy, analytics, and BI', navigateTo: 'screen5' },
{ id: 7, icon: Settings, title: 'DevOps & Platform Engineering', subtitle: 'DevOps transformation', navigateTo: null },
{ id: 8, icon: Wrench, title: 'Support & Maintenance', subtitle: 'Ongoing maintenance services', navigateTo: null },
],


consulting: [
{ id: 1, icon: Presentation, title: 'Technical Consulting', subtitle: 'Architecture and implementation guidance', navigateTo: null },
{ id: 2, icon: Target, title: 'Business Strategy', subtitle: 'Digital transformation and business planning', navigateTo: null },
{ id: 3, icon: GraduationCap, title: 'Training & Workshops', subtitle: 'Skill development and knowledge transfer', navigateTo: null },
{ id: 4, icon: BarChart3, title: 'Data & Analytics Consulting', subtitle: 'Data strategy, analytics, and business intelligence', navigateTo: 'screen5' },
],


dataStrategy: [
{ id: 1, icon: Database, title: 'Data Strategy', subtitle: 'Data governance and strategy development' },
{ id: 2, icon: Brain, title: 'Advanced Analytics', subtitle: 'Machine learning & predictive analytics' },
{ id: 3, icon: LineChart, title: 'Business Intelligence', subtitle: 'BI platform implementation and optimization' },
]
}


export default menuItems