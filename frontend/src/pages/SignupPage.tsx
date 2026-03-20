import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, Linkedin } from 'lucide-react';
import { Button, Input, Card } from '@/src/components/ui';
import { useAuth } from '../lib/AuthContext';

export const SignupPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    const from = location.state?.from?.pathname || '/dashboard';
    navigate(from, { replace: true });
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6 relative bg-background overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-fixed/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-secondary-fixed/30 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-[480px]">
        <div className="flex items-center gap-2 mb-8 justify-center">
          <img src="/images/logo.png" alt="CVWise" className="w-8 h-8 object-contain" />
          <span className="text-2xl font-black font-headline tracking-tight text-[#191C1E]">CVWise</span>
        </div>

        <Card className="p-10 shadow-[0_40px_100px_-20px_rgba(25,28,30,0.06)]">
          <header className="mb-8">
            <h1 className="text-3xl font-extrabold font-headline mb-2 text-[#191C1E]">Begin Your Blueprint</h1>
            <p className="text-on-surface-variant text-sm font-medium">Join 10k+ executives building with CVWise.</p>
          </header>
          
          <form className="space-y-6" onSubmit={handleSignup}>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider" htmlFor="name">Full Name</label>
              <Input id="name" placeholder="Alexander Hamilton" type="text" />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider" htmlFor="email">Email Address</label>
              <Input id="email" placeholder="alexander@editorial.com" type="email" />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider" htmlFor="password">Password</label>
              <div className="relative">
                <Input id="password" placeholder="••••••••" type="password" />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-secondary transition-colors" type="button">
                  <span className="material-symbols-outlined text-[20px]">visibility</span>
                </button>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2">
              <input type="checkbox" id="terms" className="mt-1 w-4 h-4 rounded border-outline-variant text-[#F97316] focus:ring-[#F97316]/20" />
              <label className="text-xs text-on-surface-variant leading-relaxed" htmlFor="terms">
                I agree to the <a className="text-[#F97316] font-semibold hover:underline" href="#">Terms of Service</a> and <a className="text-[#F97316] font-semibold hover:underline" href="#">Privacy Policy</a>.
              </label>
            </div>

            <Button type="submit" className="w-full bg-[#F97316] text-white hover:bg-[#EA580C] py-6 rounded-xl font-bold mt-4 shadow-lg shadow-orange-500/10 flex items-center justify-center gap-2">
               Create Account
               <ArrowRight className="w-4 h-4" />
            </Button>
          </form>

          <div className="mt-8">
            <div className="relative flex items-center justify-center mb-6">
              <div className="w-full border-t border-outline-variant opacity-30"></div>
              <span className="absolute bg-surface-container-lowest px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-outline">Or join with</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="flex items-center gap-2 py-3">
                <img className="w-4 h-4" src="https://www.google.com/favicon.ico" alt="Google" />
                <span className="text-sm font-semibold">Google</span>
              </Button>
              <Button variant="outline" className="flex items-center gap-2 py-3">
                <Linkedin className="w-4 h-4 text-[#0077b5]" />
                <span className="text-sm font-semibold">LinkedIn</span>
              </Button>
            </div>
          </div>

          <footer className="mt-10 text-center">
            <p className="text-sm text-on-surface-variant font-medium">
              Already have an account? <Link to="/login" className="text-[#F97316] font-bold hover:underline ml-1">Log in</Link>
            </p>
          </footer>
        </Card>

        <div className="mt-12 grid grid-cols-3 gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-on-surface-variant">verified</span>
            <span className="text-[10px] font-bold tracking-widest uppercase">ATS Proof</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-on-surface-variant">security</span>
            <span className="text-[10px] font-bold tracking-widest uppercase">Encrypted</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-on-surface-variant">draw</span>
            <span className="text-[10px] font-bold tracking-widest uppercase">Editorial UI</span>
          </div>
        </div>
        
        <div className="text-center mt-12">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-outline">© 2024 CVWise</p>
        </div>
      </div>
    </main>
  );
};
