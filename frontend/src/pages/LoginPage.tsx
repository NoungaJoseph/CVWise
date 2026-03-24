import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, Loader2 } from 'lucide-react';
import { Button, Input, Card } from '@/src/components/ui';
import { useAuth } from '../lib/AuthContext';

export const LoginPage = () => {
  const { login, isLoading, error, clearError } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [localError, setLocalError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError('');
    clearError();

    if (!email || !password) {
      setLocalError('Please enter both email and password');
      return;
    }

    try {
      await login(email, password);
      const from = location.state?.from?.pathname || '/dashboard';
      navigate(from, { replace: true });
    } catch (err) {
      setLocalError(err instanceof Error ? err.message : 'Login failed. Please try again.');
    }
  };

  const displayError = localError || error;

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
          {displayError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm font-medium">{displayError}</p>
            </div>
          )}
          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant ml-1" htmlFor="email">Email Address</label>
              <Input 
                id="email" 
                type="email" 
                placeholder="name@company.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                disabled={isLoading}
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center ml-1">
                <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant" htmlFor="password">Password</label>
                <Link to="/forgot-password" className="text-xs font-bold text-tertiary hover:opacity-80 transition-opacity">Forgot Password?</Link>
              </div>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                disabled={isLoading}
              />
            </div>

            <div className="flex items-center">
              <label className="flex items-center cursor-pointer group">
                <input type="checkbox" className="w-5 h-5 bg-surface-container-highest rounded border-none text-secondary focus:ring-0" disabled={isLoading} />
                <span className="ml-3 text-sm font-medium text-on-surface-variant group-hover:text-on-surface transition-colors">Keep me signed in</span>
              </label>
            </div>

            <Button type="submit" variant="gradient" className="w-full py-3.5 flex items-center justify-center gap-2" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Logging in...</span>
                </>
              ) : (
                <>
                  <span>Log In</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
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
            <Button variant="outline" className="flex items-center gap-3 py-3" disabled={isLoading}>
              <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
              <span className="text-sm font-bold">Google</span>
            </Button>
            <Button variant="outline" className="flex items-center gap-3 py-3" disabled={isLoading}>
              <svg className="w-4 h-4 text-[#0077b5]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.002 1.413-.103.25-.129.599-.129.949v5.443h-3.554s.047-8.836 0-9.754h3.554v1.383c.43-.664 1.199-1.609 2.915-1.609 2.129 0 3.727 1.39 3.727 4.377v5.603zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.956.77-1.71 1.958-1.71 1.187 0 1.914.75 1.939 1.71 0 .951-.752 1.71-1.982 1.71zm1.581 11.597H3.715V9.548h3.203v10.904zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
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
