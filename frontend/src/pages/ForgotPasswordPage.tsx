import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, CheckCircle2 } from 'lucide-react';
import { Button, Input, Card } from '@/src/components/ui';

export const ForgotPasswordPage = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center p-6 relative bg-background overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[60%] rounded-full bg-primary-fixed/30 blur-[120px]"></div>
      </div>

      <div className="w-full max-w-[440px] z-10">
        <div className="text-center mb-10">
          <h1 className="font-headline font-extrabold text-3xl tracking-tighter text-on-surface mb-2">CVWise</h1>
          <p className="text-[#44474E] mb-8 font-medium">Security & Recovery</p>
        </div>

        <Card className="p-10 shadow-[0_40px_100px_-20px_rgba(25,28,30,0.06)]">
          {!isSubmitted ? (
            <>
              <header className="mb-8">
                <h2 className="font-headline text-2xl font-bold text-on-surface">Reset Password</h2>
                <p className="text-on-surface-variant text-sm mt-2">Enter your email and we'll send you architectural recovery instructions.</p>
              </header>
              
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider ml-1" htmlFor="email">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
                    <Input id="email" className="pl-12" placeholder="name@company.com" type="email" required />
                  </div>
                </div>

                <Button variant="gradient" size="lg" className="w-full">
                  Send Recovery Link
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-secondary-container/20 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="font-headline text-2xl font-bold text-on-surface mb-2">Check your inbox</h2>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                We've sent architectural recovery instructions to <span className="font-bold text-on-surface">name@company.com</span>.
              </p>
              <Button variant="outline" className="w-full" onClick={() => setIsSubmitted(false)}>
                Resend Email
              </Button>
            </div>
          )}

          <footer className="mt-10 text-center">
            <Link to="/login" className="inline-flex items-center gap-2 text-sm text-on-surface-variant font-bold hover:text-secondary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Login
            </Link>
          </footer>
        </Card>
      </div>
    </main>
  );
};
