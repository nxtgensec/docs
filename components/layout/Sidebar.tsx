import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  ChevronDown, 
  ChevronRight, 
  Menu, 
  X,
  Search,
  Code,
  Building2,
  Shield,
  Newspaper,
  BookOpen,
  Users,
  FileText,
  Briefcase,
  Heart,
  Scale,
  Lock,
  Download,
  Zap,
  Globe,
  MessageSquare,
  Calendar,
  Award,
  Target,
  Layers
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  href?: string;
  icon: React.ComponentType<{ className?: string }>;
  children?: { title: string; href: string; icon: React.ComponentType<{ className?: string }> }[];
}

const navigation: NavItem[] = [
  {
    title: "Development",
    icon: Code,
    children: [
      { title: "Projects", href: "/development/projects", icon: Layers },
      { title: "Tech Stack", href: "/development/tech-stack", icon: Code },
      { title: "Open Source", href: "/development/open-source", icon: Globe },
    ],
  },
  {
    title: "Cybersecurity",
    icon: Shield,
    children: [
      { title: "Security Research", href: "/cybersecurity/research", icon: Search },
      { title: "Threat Intelligence", href: "/cybersecurity/threat-intelligence", icon: Target },
      { title: "Advisories", href: "/cybersecurity/advisories", icon: Shield },
      { title: "Penetration Testing", href: "/cybersecurity/pentesting", icon: Lock },
    ],
  },
  {
    title: "Activities",
    icon: Calendar,
    children: [
      { title: "Hackathons", href: "/activities/hackathons", icon: Zap },
      { title: "CTF Challenges", href: "/activities/ctf", icon: Target },
      { title: "Workshops", href: "/activities/workshops", icon: BookOpen },
    ],
  },
  {
    title: "For Developers",
    icon: Code,
    children: [
      { title: "Documentation", href: "/developers/documentation", icon: BookOpen },
      { title: "API Reference", href: "/developers/api-reference", icon: Code },
      { title: "SDKs & Tools", href: "/developers/sdks-tools", icon: Layers },
      { title: "Community", href: "/developers/community", icon: Users },
    ],
  },
  {
    title: "For Business",
    icon: Building2,
    children: [
      { title: "Solutions Overview", href: "/business/solutions", icon: Zap },
      { title: "Enterprise Security", href: "/business/enterprise-security", icon: Shield },
      { title: "Compliance & Risk", href: "/business/compliance-risk", icon: Scale },
      { title: "Pricing", href: "/business/pricing", icon: Target },
    ],
  },
  {
    title: "AWmate",
    icon: Shield,
    children: [
      { title: "Overview", href: "/awmate/overview", icon: Zap },
      { title: "Features", href: "/awmate/features", icon: Layers },
      { title: "Integration", href: "/awmate/integration", icon: Globe },
      { title: "Get Started", href: "/awmate/get-started", icon: Download },
    ],
  },
  {
    title: "Company",
    icon: Building2,
    children: [
      { title: "About Us", href: "/company/about", icon: Users },
      { title: "Foundation", href: "/company/foundation", icon: Heart },
      { title: "Careers", href: "/company/careers", icon: Briefcase },
      { title: "Brand Guidelines", href: "/company/brand-guidelines", icon: Award },
      { title: "Rules & Regulations", href: "/company/rules-regulations", icon: Scale },
      { title: "Terms & Conditions", href: "/company/terms", icon: FileText },
      { title: "Policies", href: "/company/policies", icon: Lock },
    ],
  },
  {
    title: "News",
    icon: Newspaper,
    children: [
      { title: "Latest Articles", href: "/news/articles", icon: BookOpen },
      { title: "Press Releases", href: "/news/press-releases", icon: MessageSquare },
      { title: "Events", href: "/news/events", icon: Calendar },
    ],
  },
];

export function Sidebar() {
  const [manuallyExpandedItems, setManuallyExpandedItems] = useState<string[]>([]);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const toggleExpand = (title: string) => {
    setManuallyExpandedItems((prev) =>
      prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]
    );
  };

  const isActive = (href: string) => location.pathname === href;
  const isParentActive = (children?: { href: string }[]) =>
    children?.some((child) => location.pathname.startsWith(child.href));

  // Auto-expand section with active child, but close others
  useEffect(() => {
    const activeParents = navigation
      .filter(item => item.children && isParentActive(item.children))
      .map(item => item.title);
    
    // Only update if we have active parents
    if (activeParents.length > 0) {
      setManuallyExpandedItems(activeParents);
    }
  }, [location.pathname]);


  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-lg bg-card border border-border hover:bg-secondary transition-colors"
      >
        {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen w-72 bg-sidebar border-r border-sidebar-border flex flex-col transition-transform duration-300",
          "lg:translate-x-0",
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-between p-6 border-b border-sidebar-border">
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="/logo.png" 
              alt="nxtgensec Logo" 
              className="w-8 h-8 rounded-lg object-contain" 
            />
            <span className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
              nxtgensec
            </span>
          </Link>
          <button
            onClick={() => {
              if (manuallyExpandedItems.length > 0) {
                setManuallyExpandedItems([]);
              } else {
                setManuallyExpandedItems(navigation.map(n => n.title));
              }
            }}
            className="p-1.5 rounded-md hover:bg-sidebar-accent transition-colors"
            title={manuallyExpandedItems.length > 0 ? "Collapse all" : "Expand all"}
          >
            {(manuallyExpandedItems.length > 0) ? (
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            ) : (
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            )}
          </button>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          <ul className="space-y-1">
            {navigation.map((item) => {
              const hasActiveChild = isParentActive(item.children);
              // Only expand if manually expanded OR if it has active child
              const isExpanded = manuallyExpandedItems.includes(item.title) || hasActiveChild;
        
              return (
                <li key={item.title}>
                  <button
                    onClick={() => toggleExpand(item.title)}
                    className={cn(
                      "w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                      hasActiveChild
                        ? "bg-sidebar-accent text-primary"
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className={cn("h-4 w-4", hasActiveChild && "text-primary")} />
                      <span>{item.title}</span>
                    </div>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        isExpanded && "rotate-180"
                      )}
                    />
                  </button>

                  {/* Children */}
                  <ul
                    className={cn(
                      "overflow-hidden transition-all duration-200",
                      isExpanded ? "max-h-96 opacity-100 mt-1" : "max-h-0 opacity-0"
                    )}
                  >
                    {item.children?.map((child) => (
                      <li key={child.href}>
                        <Link
                          to={child.href}
                          onClick={() => setIsMobileOpen(false)}
                          className={cn(
                            "flex items-center gap-3 px-3 py-2 ml-4 rounded-lg text-sm transition-all duration-200",
                            isActive(child.href)
                              ? "bg-primary text-primary-foreground font-medium"
                              : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent"
                          )}
                        >
                          <child.icon className="h-3.5 w-3.5" />
                          <span>{child.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-sidebar-border">
          <p className="text-xs text-muted-foreground text-center">
            © 2024 nxtgensec. All rights reserved.
          </p>
        </div>
      </aside>
    </>
  );
}
