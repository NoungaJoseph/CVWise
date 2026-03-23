import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, User, Briefcase, MapPin, Phone, Mail, Linkedin, Globe, CheckCircle2 } from 'lucide-react';
import { Button, Input, Card } from '@/src/components/ui';
import { useAuth } from '../lib/AuthContext';
import { useEditor } from '../lib/EditorContext';

export const OnboardingPage = () => {
  const { user, updateUser, clearNewUser } = useAuth();
  const { updatePersonalInfo } = useEditor();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    title: '',
    location: '',
    linkedin: '',
    summary: '',
  });

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save to auth user profile
    updateUser({
      name: form.name,
      email: form.email,
      phone: form.phone,
      title: form.title,
      location: form.location,
      linkedin: form.linkedin,
      summary: form.summary,
    });

    // Pre-fill Editor with this info
    const nameParts = form.name.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';
    updatePersonalInfo({
      firstName,
      lastName,
      email: form.email,
      phone: form.phone,
      title: form.title,
      location: form.location,
      linkedin: form.linkedin,
      summary: form.summary,
    });

    clearNewUser();
    navigate('/templates', { replace: true });
  };

  const handleSkip = () => {
    clearNewUser();
    navigate('/templates', { replace: true });
  };

  return (
    <main className="min-h-screen bg-[#F8F9FA] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#F97316]/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-[#333D47]/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="w-full max-w-[620px]">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center gap-2 mb-6 justify-center">
            <img src="/images/logo.png" alt="CVWise" className="w-8 h-8 object-contain" />
            <span className="text-2xl font-black font-headline tracking-tight text-[#191C1E]">CVWise</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-[#F97316]/10 text-[#F97316] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <CheckCircle2 className="w-3.5 h-3.5" /> Account Created!
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold font-headline tracking-tight text-[#191C1E] mb-3">
            Let's Set Up Your Profile
          </h1>
          <p className="text-[#44474E] max-w-md mx-auto text-sm leading-relaxed">
            Fill in your details once — they'll automatically populate every CV you create. <strong>You can always edit these later.</strong>
          </p>
        </div>

        <Card className="p-8 md:p-10 shadow-[0_40px_80px_-20px_rgba(25,28,30,0.08)]">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Title */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-xs font-bold text-[#44474E] uppercase tracking-wider">
                  <User className="w-3.5 h-3.5" /> Full Name
                </label>
                <Input
                  placeholder="John Smith"
                  value={form.name}
                  onChange={e => handleChange('name', e.target.value)}
                />
              </div>
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-xs font-bold text-[#44474E] uppercase tracking-wider">
                  <Briefcase className="w-3.5 h-3.5" /> Job Title
                </label>
                <Input
                  placeholder="Senior Product Designer"
                  value={form.title}
                  onChange={e => handleChange('title', e.target.value)}
                />
              </div>
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-xs font-bold text-[#44474E] uppercase tracking-wider">
                  <Mail className="w-3.5 h-3.5" /> Email
                </label>
                <Input
                  type="email"
                  placeholder="john@company.com"
                  value={form.email}
                  onChange={e => handleChange('email', e.target.value)}
                />
              </div>
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-xs font-bold text-[#44474E] uppercase tracking-wider">
                  <Phone className="w-3.5 h-3.5" /> Phone
                </label>
                <Input
                  placeholder="+1 (555) 000-0000"
                  value={form.phone}
                  onChange={e => handleChange('phone', e.target.value)}
                />
              </div>
            </div>

            {/* Location and LinkedIn */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-xs font-bold text-[#44474E] uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5" /> Location
                </label>
                <Input
                  placeholder="New York, NY"
                  value={form.location}
                  onChange={e => handleChange('location', e.target.value)}
                />
              </div>
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-xs font-bold text-[#44474E] uppercase tracking-wider">
                  <Linkedin className="w-3.5 h-3.5" /> LinkedIn URL
                </label>
                <Input
                  placeholder="linkedin.com/in/johnsmith"
                  value={form.linkedin}
                  onChange={e => handleChange('linkedin', e.target.value)}
                />
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-1.5">
              <label className="flex items-center gap-1.5 text-xs font-bold text-[#44474E] uppercase tracking-wider">
                <Globe className="w-3.5 h-3.5" /> Professional Summary
              </label>
              <textarea
                className="w-full rounded-xl border border-[#E1E2E4] bg-[#F8F9FA] px-4 py-3 text-sm text-[#191C1E] placeholder-[#44474E]/50 focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316] transition-colors resize-none"
                rows={4}
                placeholder="A brief professional summary that will appear at the top of your CVs..."
                value={form.summary}
                onChange={e => handleChange('summary', e.target.value)}
              />
            </div>

            {/* Info banner */}
            <div className="bg-[#F97316]/5 border border-[#F97316]/20 rounded-xl px-5 py-4 flex items-start gap-3">
              <span className="material-symbols-outlined text-[#F97316] text-base mt-0.5">auto_awesome</span>
              <p className="text-xs text-[#44474E] leading-relaxed">
                This info will <strong>automatically fill in</strong> when you start a new CV, saving you significant time. You can always edit these details inside the editor.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                type="submit"
                className="flex-1 bg-[#F97316] text-white hover:bg-[#EA580C] py-4 rounded-xl font-bold shadow-lg shadow-orange-500/10 flex items-center justify-center gap-2"
              >
                Save & Choose a Template
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleSkip}
                className="sm:w-auto text-[#44474E] border-[#E1E2E4] py-4 rounded-xl font-bold hover:bg-[#F8F9FA]"
              >
                Skip for now
              </Button>
            </div>
          </form>
        </Card>

        <p className="text-center mt-6 text-[10px] uppercase tracking-[0.2em] font-bold text-[#44474E]/40">
          © 2025 CVWise — Your data stays private
        </p>
      </div>
    </main>
  );
};
