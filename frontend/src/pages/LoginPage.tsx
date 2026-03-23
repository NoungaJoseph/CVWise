import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { Button, Input, Card } from '@/src/components/ui';
import { useAuth } from '../lib/AuthContext';

export const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    const from = location.state?.from?.pathname || '/dashboard';
    navigate(from, { replace: true });
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6 relative bg-background overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[60%] rounded-full bg-primary-fixed/30 blur-[120px]"></div>
        <div className="absolute -bottom-[10%] -right-[5%] w-[30%] h-[50%] rounded-full bg-secondary-fixed/20 blur-[100px]"></div>
      </div>

      <div className="w-full max-w-[440px] z-10">
        <div className="flex items-center gap-2 mb-8">
          <img src="/images/logo.png" alt="CVWise" className="w-8 h-8 object-contain" />
          <span className="text-2xl font-black font-headline tracking-tight text-[#191C1E]">CVWise</span>
        </div>
        <h1 className="text-3xl font-extrabold font-headline mb-4 text-[#191C1E]">Welcome Back</h1>
        <p className="text-[#44474E] mb-8 font-medium">Continue your architectural career journey.</p>

        <Card className="p-8 shadow-[0_40px_100px_-20px_rgba(25,28,30,0.06)]">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant ml-1" htmlFor="email">Email Address</label>
              <Input id="email" type="email" placeholder="name@company.com" required />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center ml-1">
                <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant" htmlFor="password">Password</label>
                <Link to="/forgot-password" className="text-xs font-bold text-tertiary hover:opacity-80 transition-opacity">Forgot Password?</Link>
              </div>
              <Input id="password" type="password" placeholder="••••••••" required />
            </div>

            <div className="flex items-center">
              <label className="flex items-center cursor-pointer group">
                <input type="checkbox" className="w-5 h-5 bg-surface-container-highest rounded border-none text-secondary focus:ring-0" />
                <span className="ml-3 text-sm font-medium text-on-surface-variant group-hover:text-on-surface transition-colors">Keep me signed in</span>
              </label>
            </div>

            <Button type="submit" variant="gradient" className="w-full py-3.5 flex items-center justify-center gap-2">
              <span>Log In</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-[1px] bg-surface-container-high"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold">
              <span className="bg-surface-container-lowest px-4 text-outline">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="flex items-center gap-3 py-3">
              <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
              <span className="text-sm font-bold">Google</span>
            </Button>
            <Button variant="outline" className="flex items-center gap-3 py-3">
              <Linkedin className="w-4 h-4 text-[#0077b5]" />
              <span className="text-sm font-bold">LinkedIn</span>
            </Button>
          </div>
        </Card>

        <p className="text-center mt-8 text-sm text-on-surface-variant font-medium">
          New to CVWise? <Link to="/signup" className="text-[#F97316] font-bold hover:underline">Create an account</Link>
        </p>
      </div>

      <footer className="fixed bottom-0 w-full py-8 pointer-events-none">
        <div className="max-w-screen-2xl mx-auto px-12 flex justify-between items-center">
          <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-outline pointer-events-auto">
            © 2024 CVWise
          </div>
          <div className="flex gap-8 pointer-events-auto">
            <a className="text-[10px] uppercase tracking-[0.2em] font-bold text-outline hover:text-on-surface transition-colors" href="#">Privacy</a>
            <a className="text-[10px] uppercase tracking-[0.2em] font-bold text-outline hover:text-on-surface transition-colors" href="#">Security</a>
            <a className="text-[10px] uppercase tracking-[0.2em] font-bold text-outline hover:text-on-surface transition-colors" href="#">Help</a>
          </div>
        </div>
      </footer>
    </main>
  );
};
