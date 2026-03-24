import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Loader2 } from 'lucide-react';
import { Button, Input, Card } from '@/src/components/ui';
import { useAuth } from '../lib/AuthContext';

export const SignupPage = () => {
  const { signup, isLoading, error, clearError } = useAuth();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [localError, setLocalError] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError('');
    clearError();

    if (!firstName || !lastName || !email || !password) {
      setLocalError('Please fill in all fields');
      return;
    }

    if (!agreeTerms) {
      setLocalError('Please agree to the Terms of Service and Privacy Policy');
      return;
    }

    if (password.length < 6) {
      setLocalError('Password must be at least 6 characters');
      return;
    }

    try {
      await signup(firstName, lastName, email, password);
      navigate('/onboarding', { replace: true });
    } catch (err) {
      setLocalError(err instanceof Error ? err.message : 'Signup failed. Please try again.');
    }
  };

  const displayError = localError || error;

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
          
          {displayError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm font-medium">{displayError}</p>
            </div>
          )}
          
          <form className="space-y-6" onSubmit={handleSignup}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider" htmlFor="firstName">First Name</label>
                <Input 
                  id="firstName" 
                  placeholder="Alexander" 
                  type="text" 
                  value={firstName} 
                  onChange={e => setFirstName(e.target.value)} 
                  disabled={isLoading}
                  required 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider" htmlFor="lastName">Last Name</label>
                <Input 
                  id="lastName" 
                  placeholder="Hamilton" 
                  type="text" 
                  value={lastName} 
                  onChange={e => setLastName(e.target.value)} 
                  disabled={isLoading}
                  required 
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider" htmlFor="email">Email Address</label>
              <Input 
                id="email" 
                placeholder="alexander@editorial.com" 
                type="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                disabled={isLoading}
                required 
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider" htmlFor="password">Password</label>
              <Input 
                id="password" 
                placeholder="••••••••" 
                type="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                disabled={isLoading}
                required 
              />
              <p className="text-xs text-on-surface-variant">Must be at least 6 characters</p>
            </div>

            <div className="flex items-start gap-3 pt-2">
              <input 
                type="checkbox" 
                id="terms" 
                checked={agreeTerms}
                onChange={e => setAgreeTerms(e.target.checked)}
                disabled={isLoading}
                className="mt-1 w-4 h-4 rounded border-outline-variant text-[#F97316] focus:ring-[#F97316]/20" 
              />
              <label className="text-xs text-on-surface-variant leading-relaxed" htmlFor="terms">
                I agree to the <Link className="text-[#F97316] font-semibold hover:underline" to="/terms">Terms of Service</Link> and <Link className="text-[#F97316] font-semibold hover:underline" to="/privacy">Privacy Policy</Link>.
              </label>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-[#F97316] text-white hover:bg-[#EA580C] py-6 rounded-xl font-bold mt-4 shadow-lg shadow-orange-500/10 flex items-center justify-center gap-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Creating Account...</span>
                </>
              ) : (
                <>
                  <span>Create Account</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </form>

          <div className="mt-8">
            <div className="relative flex items-center justify-center mb-6">
              <div className="w-full border-t border-outline-variant opacity-30"></div>
              <span className="absolute bg-surface-container-lowest px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-outline">Or join with</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="flex items-center gap-2 py-3" disabled={isLoading}>
                <img className="w-4 h-4" src="https://www.google.com/favicon.ico" alt="Google" />
                <span className="text-sm font-semibold">Google</span>
              </Button>
              <Button variant="outline" className="flex items-center gap-2 py-3" disabled={isLoading}>
                <svg className="w-4 h-4 text-[#0077b5]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.002 1.413-.103.25-.129.599-.129.949v5.443h-3.554s.047-8.836 0-9.754h3.554v1.383c.43-.664 1.199-1.609 2.915-1.609 2.129 0 3.727 1.39 3.727 4.377v5.603zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.956.77-1.71 1.958-1.71 1.187 0 1.914.75 1.939 1.71 0 .951-.752 1.71-1.982 1.71zm1.581 11.597H3.715V9.548h3.203v10.904zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
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
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-outline">© 2025 CVWise</p>
        </div>
      </div>
    </main>
  );
};
