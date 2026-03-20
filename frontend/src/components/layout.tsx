import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  BarChart3, 
  Settings, 
  HelpCircle, 
  Download,
  Plus,
  User,
  Briefcase,
  GraduationCap,
  BrainCircuit,
  FolderKanban,
  Menu,
  X,
  Palette
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Button } from './ui';
import { useAuth } from '../lib/AuthContext';

export const TopNavBar = ({ onMenuClick }: { onMenuClick?: () => void }) => {
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent) => {
    if (isAuthenticated && (location.pathname === '/dashboard' || location.pathname.startsWith('/editor'))) {
      e.preventDefault();
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#F8F9FA] border-b border-outline-variant/10">
      <div className="flex justify-between items-center px-4 md:px-8 py-4 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-4">
          {isAuthenticated && (
            <button 
              onClick={onMenuClick}
              className="lg:hidden p-2 hover:bg-surface-container-low rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6 text-[#191C1E]" />
            </button>
          )}
          <Link to={isAuthenticated ? "/dashboard" : "/"} onClick={handleLogoClick} className="flex items-center gap-2 group">
            <img src="/images/logo.png" alt="CVWise" className="w-8 h-8 object-contain group-hover:scale-110 transition-transform" />
            <span className="text-xl md:text-2xl font-black tracking-tight text-[#191C1E] font-headline">CVWise</span>
          </Link>
        </div>
        
        <nav className="hidden lg:flex items-center gap-8">
          {isAuthenticated && <NavLink to="/dashboard">Editor</NavLink>}
          <NavLink to="/templates">Templates</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          {isAuthenticated && <NavLink to="/my-cvs">My CVs</NavLink>}
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          {isAuthenticated ? (
            <>
              {location.pathname.startsWith('/editor') && (
                <Button 
                  onClick={() => navigate('/preview')} 
                  variant="outline"
                  className="hidden md:flex items-center gap-2 border-[#F97316] text-[#F97316] hover:bg-[#F97316]/5 font-bold"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </Button>
              )}
              <Link to="/upgrade" className="hidden sm:block text-sm font-medium text-[#44474E] hover:text-[#191C1E] transition-colors">Upgrade</Link>
              <Button onClick={logout} className="bg-[#394457] text-white hover:bg-[#2c3645] px-4 md:px-6 py-2 md:py-2.5 rounded-lg font-bold text-xs md:text-sm shadow-sm transition-all duration-200">
                <span>Logout</span>
              </Button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm font-bold text-[#44474E] hover:text-[#191C1E] transition-colors">Log In</Link>
              <Link to="/signup">
                <Button className="bg-[#F97316] text-white hover:bg-[#EA580C] px-4 md:px-6 py-2 rounded-lg font-bold text-xs md:text-sm">
                  Get Started
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link 
      to={to} 
      className={cn(
        "text-on-surface-variant font-medium font-headline tracking-tight hover:text-secondary transition-colors duration-200",
        isActive && "text-secondary border-b-2 border-secondary pb-1"
      )}
    >
      {children}
    </Link>
  );
};

export const SideNavBar = ({ isMobileOpen, onMobileClose, cvTitle = "CV Architect", cvSub = "Senior Product Designer" }: { isMobileOpen?: boolean; onMobileClose?: () => void; cvTitle?: string; cvSub?: string }) => {
  const location = useLocation();
  
  const menuItems = [
    { icon: User, label: 'Personal Info', path: '/editor/personal' },
    { icon: Briefcase, label: 'Experience', path: '/editor/experience' },
    { icon: GraduationCap, label: 'Education', path: '/editor/education' },
    { icon: Settings, label: 'Skills', path: '/editor/skills' },
    { icon: FolderKanban, label: 'Projects', path: '/editor/projects' },
    { icon: Palette, label: 'Style Architecture', path: '/editor/styling' },
    { icon: FileText, label: 'My CVs', path: '/my-cvs' },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] lg:hidden"
          onClick={onMobileClose}
        />
      )}

      <aside className={cn(
        "h-screen w-72 fixed left-0 top-0 pt-24 bg-[#F8F9FA] flex flex-col p-6 border-r border-[#E1E2E4] overflow-y-auto pb-8 z-50 transition-transform duration-300 lg:translate-x-0",
        isMobileOpen ? "translate-x-0 z-[70] shadow-2xl" : "-translate-x-full"
      )}>
        <div className="flex justify-between items-center lg:hidden mb-8">
          <Link to="/" className="flex items-center gap-2">
            <img src="/images/logo.png" alt="CVWise" className="w-6 h-6 object-contain" />
            <span className="text-xl font-black text-[#191C1E]">CVWise</span>
          </Link>
          <button onClick={onMobileClose} className="p-2 hover:bg-surface-container-low rounded-lg transition-colors">
            <X className="w-5 h-5 text-on-surface-variant" />
          </button>
        </div>

        <div className="mb-10 px-2 lg:block hidden">
          <h2 className="text-xl font-black text-[#191C1E] font-headline tracking-tight">{cvTitle}</h2>
          <p className="text-sm text-[#44474E] font-medium">{cvSub}</p>
        </div>
        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onMobileClose}
                className={cn(
                  "flex items-center gap-4 px-5 py-3 rounded-xl transition-all duration-200 group",
                  isActive 
                    ? "bg-white text-[#F97316] shadow-[0_4px_12px_rgba(0,0,0,0.05)] font-bold border border-[#F1F0F4]" 
                    : "text-[#44474E] font-medium hover:bg-white hover:shadow-sm"
                )}
              >
                <item.icon className={cn("w-[18px] h-[18px] transition-colors duration-200", isActive ? "text-[#F97316]" : "text-[#44474E] group-hover:text-[#191C1E]")} />
                <span className={cn("font-headline text-sm tracking-tight", isActive ? "font-bold" : "font-medium")}>{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="mt-8 space-y-6">
          <Link to="/editor/new-section" className="block w-full" onClick={onMobileClose}>
            <Button className="w-full bg-[#F97316] text-white hover:bg-[#EA580C] py-6 gap-2 font-bold shadow-lg shadow-orange-500/10">
              <Plus className="w-5 h-5" />
              Add New Section
            </Button>
          </Link>
          <div className="pt-6 border-t border-[#E1E2E4] flex flex-col gap-1">
            <Link to="/settings" onClick={onMobileClose} className="flex items-center gap-3 px-4 py-2 text-[#44474E] font-bold text-xs uppercase tracking-widest hover:text-[#191C1E] transition-colors">
              <Settings className="w-4 h-4" />
              Settings
            </Link>
            <Link to="/support" onClick={onMobileClose} className="flex items-center gap-3 px-4 py-2 text-[#44474E] font-bold text-xs uppercase tracking-widest hover:text-[#191C1E] transition-colors">
              <HelpCircle className="w-4 h-4" />
              Support
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export const Footer = () => (
  <footer className="bg-[#F1F0F4] text-[#44474E] font-sans text-xs tracking-wide py-16">
    <div className="flex flex-col md:flex-row justify-between items-center px-8 md:px-24 w-full max-w-screen-2xl mx-auto gap-8">
      <div className="flex flex-col items-center md:items-start gap-2">
        <div className="flex items-center gap-2 mb-2">
          <img src="/images/logo.png" alt="CVWise" className="w-6 h-6 object-contain" />
          <span className="text-xl font-black text-[#191C1E] font-headline tracking-tight">CVWise</span>
        </div>
        <p>© 2024 CVWise. Smarter CVs. Better Opportunities.</p>
      </div>
      <div className="flex gap-8 font-medium flex-wrap justify-center md:justify-start">
        <Link to="/privacy" className="hover:text-[#191C1E] transition-colors">Privacy Policy</Link>
        <Link to="/terms" className="hover:text-[#191C1E] transition-colors">Terms of Service</Link>
        <Link to="/cookies" className="hover:text-[#191C1E] transition-colors">Cookie Policy</Link>
        <Link to="/contact" className="hover:text-[#191C1E] transition-colors">Contact Us</Link>
      </div>
    </div>
  </footer>
);

export const DashboardLayout = ({ children, cvTitle, cvSub }: { children: React.ReactNode; cvTitle?: string; cvSub?: string }) => {
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <TopNavBar onMenuClick={() => setIsMobileOpen(true)} />
      <div className="flex pt-[72px]">
        <SideNavBar 
          isMobileOpen={isMobileOpen} 
          onMobileClose={() => setIsMobileOpen(false)} 
          cvTitle={cvTitle}
          cvSub={cvSub}
        />
        <main className={cn(
          "w-full transition-all duration-300 min-h-[calc(100-72px)]",
          "lg:ml-72"
        )}>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export const MainLayout = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("min-h-screen flex flex-col", className)}>
      <TopNavBar />
      <main className="flex-1 pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
};
