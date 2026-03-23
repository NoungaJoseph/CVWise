import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MainLayout } from '@/src/components/layout';
import { Button } from '@/src/components/ui';
import { CheckCircle2, ArrowRight, Zap, FileDown, Palette } from 'lucide-react';

const TEMPLATE_IMAGES = [
  '/cv templates/Beige Minimalist Corporate IT Project Manager Resume.png',
  '/cv templates/Blue and Gray Simple Professional CV Resume.png',
  '/cv templates/Brown Simple Professional Resume.png',
  '/cv templates/Green Modern Bold Software Developer Simple Resume.png',
  '/cv templates/Green and White Modern Graphic Designer Resume.png',
  '/cv templates/Minimalist CV Resume.png',
  '/cv templates/Navy Yellow Modern Professional Designer CV Resume.png',
  '/cv templates/Pink Aesthetic Beauty Influencer CV Resume.png',
];

export const LandingPage = () => {
  const [activeTemplate, setActiveTemplate] = useState(0);

  return (
    <MainLayout>
      <div className="bg-[#F8F9FA]">

        {/* ───── Hero ───── */}
        <section className="relative px-8 md:px-24 py-20 overflow-hidden">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="z-10"
            >
              <div className="inline-flex items-center gap-2 bg-[#F97316]/10 text-[#F97316] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <Zap className="w-3.5 h-3.5" /> AI-Powered CV Builder
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold font-headline tracking-tighter text-[#191C1E] mb-6 leading-[1.05]">
                Build a CV That<br />
                <span className="text-[#F97316]">Gets You Hired.</span>
              </h1>
              <p className="text-lg text-[#44474E] max-w-xl mb-10 leading-relaxed">
                Choose from 8 professionally designed templates, fill in your details, and download a flawless A4 PDF in minutes. AI-powered writing assistance included.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link to="/signup">
                  <Button className="bg-[#F97316] text-white hover:bg-[#EA580C] px-8 py-4 text-base rounded-xl font-bold flex items-center gap-2">
                    Start Building Free <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/templates">
                  <Button variant="outline" className="bg-white text-[#191C1E] border-[#E1E2E4] px-8 py-4 text-base rounded-xl hover:bg-[#F8F9FA] font-bold">
                    Browse Templates
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-6 text-sm text-[#44474E]/70">
                {['Free to start', 'No credit card', 'PDF in 1 click', '8 templates'].map(f => (
                  <span key={f} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F97316]" /> {f}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Hero CV showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:flex justify-center"
            >
              <div className="relative w-[340px]">
                {/* Main card stacked */}
                <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#E1E2E4] w-full aspect-[3/4]">
                  <img
                    src={TEMPLATE_IMAGES[activeTemplate]}
                    alt="CV Template"
                    className="w-full h-full object-cover object-top transition-all duration-500"
                  />
                </div>
                {/* Second card */}
                <div className="absolute -right-8 -bottom-8 z-0 bg-white rounded-2xl shadow-xl overflow-hidden border border-[#E1E2E4] w-[200px] aspect-[3/4] opacity-70 rotate-6">
                  <img
                    src={TEMPLATE_IMAGES[(activeTemplate + 1) % TEMPLATE_IMAGES.length]}
                    alt="CV Template"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* AI badge */}
                <div className="absolute -left-6 top-8 bg-white px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-[#E1E2E4] z-20">
                  <div className="w-10 h-10 rounded-full bg-[#F97316]/10 flex items-center justify-center text-[#F97316]">
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-[#44474E] uppercase tracking-widest">AI Polishing</p>
                    <p className="font-headline font-bold text-[#191C1E] text-sm">Optimizing...</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ───── Stats Banner ───── */}
        <section className="px-8 md:px-24 py-10 bg-[#333D47]">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            {[
              { number: '10,000+', label: 'CVs Created' },
              { number: '8', label: 'Pro Templates' },
              { number: '50,000+', label: 'PDF Downloads' },
              { number: '98%', label: 'ATS Pass Rate' },
            ].map(stat => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-black font-headline text-[#F97316] mb-1">{stat.number}</p>
                <p className="text-sm text-white/70 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ───── Features Bento Grid ───── */}
        <section className="px-8 md:px-24 py-28 bg-white">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-extrabold font-headline tracking-tight text-[#191C1E] mb-4">Everything You Need to Land the Job</h2>
              <p className="text-[#44474E] max-w-2xl mx-auto">From AI writing assistance to one-click PDF export — every tool is built to help you shine.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* AI Polishing */}
              <div className="md:col-span-2 bg-[#F8F9FA] p-10 rounded-[2.5rem] flex flex-col justify-between group">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#333D47] text-white flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-3xl">psychology</span>
                  </div>
                  <h3 className="text-2xl font-headline font-bold text-[#191C1E] mb-3">AI Writing Assistant</h3>
                  <p className="text-[#44474E] leading-relaxed max-w-md">Describe your experience and let AI craft impactful, recruiter-ready bullet points. Tailored to your industry and seniority level.</p>
                </div>
                <div className="mt-10 h-32 bg-white rounded-2xl shadow-sm overflow-hidden relative border border-[#E1E2E4] flex items-center px-6 gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#F97316]/10 flex items-center justify-center text-[#F97316] shrink-0">
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="h-2 bg-[#F1F0F4] rounded-full w-3/4 animate-pulse"></div>
                    <div className="h-2 bg-[#F97316]/20 rounded-full w-full animate-pulse delay-75"></div>
                    <div className="h-2 bg-[#F1F0F4] rounded-full w-1/2 animate-pulse delay-150"></div>
                  </div>
                </div>
              </div>
              {/* PDF Export */}
              <div className="bg-[#F97316] p-10 rounded-[2.5rem] text-white flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                  <FileDown className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-headline font-bold mb-3">Download in 1 Click</h3>
                <p className="text-white/80 leading-relaxed mb-8">Perfect A4 PDF every time. Optimised for ATS systems and human recruiters alike.</p>
                <div className="mt-auto bg-white/10 rounded-2xl p-4 flex items-center justify-between border border-white/10">
                  <span className="font-bold text-sm">My_Resume.pdf</span>
                  <span className="material-symbols-outlined text-xl">download</span>
                </div>
              </div>
              {/* Templates */}
              <div className="md:col-span-3 bg-[#F8F9FA] p-10 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                  <div className="w-14 h-14 rounded-2xl bg-[#333D47] text-white flex items-center justify-center mb-6">
                    <Palette className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-headline font-bold text-[#191C1E] mb-3">8 Professional Templates</h3>
                  <p className="text-[#44474E] leading-relaxed mb-5">From minimalist to bold. Every template is A4-perfect and designed by professional recruiters.</p>
                  <Link to="/templates">
                    <Button className="bg-[#333D47] text-white hover:bg-[#191C1E] flex items-center gap-2 font-bold">
                      Explore All Templates <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
                <div className="flex gap-4 overflow-hidden max-w-[520px]">
                  {TEMPLATE_IMAGES.slice(0, 4).map((img, i) => (
                    <div
                      key={i}
                      onClick={() => setActiveTemplate(i)}
                      className="bg-white w-32 md:w-40 aspect-[3/4] rounded-xl shadow-lg border border-[#E1E2E4] overflow-hidden cursor-pointer hover:scale-105 transition-transform shrink-0"
                      style={{ transform: i % 2 === 0 ? 'rotate(-3deg)' : 'rotate(3deg) translateY(8px)' }}
                    >
                      <img src={img} alt={`Template ${i + 1}`} className="w-full h-full object-cover object-top" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── How It Works ───── */}
        <section className="px-8 md:px-24 py-28 bg-[#F8F9FA]">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold font-headline tracking-tight text-[#191C1E] mb-4">
                From Zero to Interview-Ready in 3 Steps
              </h2>
              <p className="text-[#44474E] max-w-xl mx-auto">CVWise makes building a professional CV fast, easy, and enjoyable.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  icon: 'dashboard_customize',
                  title: 'Pick a Template',
                  desc: 'Browse 8 professionally designed templates and select the one that matches your industry and personality.',
                },
                {
                  step: '02',
                  icon: 'edit_note',
                  title: 'Fill In Your Details',
                  desc: 'Use our guided editor to add your experience, skills, and education. AI helps you write compelling bullet points.',
                },
                {
                  step: '03',
                  icon: 'picture_as_pdf',
                  title: 'Download Your PDF',
                  desc: 'Preview your CV live, make final tweaks, and download a pixel-perfect A4 PDF ready to send to employers.',
                },
              ].map((step, i) => (
                <div key={i} className="relative bg-white p-10 rounded-[2.5rem] border border-[#E1E2E4] shadow-sm">
                  <span className="text-7xl font-black text-[#F97316]/10 absolute top-6 right-8 font-headline">{step.step}</span>
                  <div className="w-14 h-14 rounded-2xl bg-[#F97316]/10 flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-3xl text-[#F97316]">{step.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold font-headline text-[#191C1E] mb-3">{step.title}</h3>
                  <p className="text-[#44474E] leading-relaxed text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── Template Showcase ───── */}
        <section className="px-8 md:px-24 py-28 bg-white overflow-hidden">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
              <div>
                <h2 className="text-4xl font-extrabold font-headline tracking-tight text-[#191C1E] mb-3">8 Templates.<br />Infinite Possibilities.</h2>
                <p className="text-[#44474E] max-w-md">From corporate to creative — there's a template built exactly for your role.</p>
              </div>
              <Link to="/templates">
                <Button className="bg-[#F97316] text-white hover:bg-[#EA580C] font-bold flex items-center gap-2">
                  View All Templates <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Scrollable template grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {TEMPLATE_IMAGES.map((img, i) => (
                <Link to="/templates" key={i}>
                  <div className="aspect-[3/4] bg-[#F8F9FA] rounded-2xl overflow-hidden border border-[#E1E2E4] hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                    <img src={img} alt={`Template ${i + 1}`} className="w-full h-full object-cover object-top" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ───── Testimonials ───── */}
        <section className="px-8 md:px-24 py-28 bg-[#F8F9FA]">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-14">
              <h2 className="text-4xl font-extrabold font-headline tracking-tight text-[#191C1E] mb-3">Trusted by Professionals Worldwide</h2>
              <p className="text-[#44474E]">Real results from real people who built their CVs with CVWise.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Testimonial
                quote="I used CVWise on a Sunday night and had 3 interview calls by Wednesday. The Navy Yellow template stood out from the crowd."
                author="Sarah Jenkins"
                role="UX Designer, Google"
                image="https://picsum.photos/seed/sarah1/100/100"
              />
              <Testimonial
                quote="The AI polish feature saved me hours. It turned my rough bullet points into executive-level statements. Worth every click."
                author="Marcus Thorne"
                role="Senior PM, Stripe"
                image="https://picsum.photos/seed/marcus1/100/100"
              />
              <Testimonial
                quote="As a career coach, I now recommend CVWise to all my clients. The quality of the PDF output is unlike any free tool out there."
                author="Dr. Aisha Okonkwo"
                role="Career Coach & Consultant"
                image="https://picsum.photos/seed/aisha1/100/100"
              />
            </div>
          </div>
        </section>

        {/* ───── Final CTA ───── */}
        <section className="px-8 md:px-24 py-28 bg-white">
          <div className="max-w-screen-2xl mx-auto bg-[#333D47] rounded-[3rem] p-16 md:p-24 text-center text-white overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 border-[60px] border-white rounded-full translate-x-32 -translate-y-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 border-[40px] border-white rounded-full -translate-x-16 translate-y-16" />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-extrabold font-headline mb-6 tracking-tighter">
                Your dream job starts with the right CV.
              </h2>
              <p className="text-xl text-white/70 mb-10 leading-relaxed">
                Join 10,000+ professionals who chose CVWise. Free to start. No credit card required.
              </p>
              <Link to="/signup">
                <Button className="bg-[#F97316] text-white hover:bg-[#EA580C] px-12 py-5 text-xl font-bold rounded-2xl border-none shadow-xl shadow-orange-500/20">
                  Build My CV for Free
                </Button>
              </Link>
              <p className="mt-6 text-sm text-white/50">Takes less than 5 minutes to get started.</p>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

const Testimonial = ({ quote, author, role, image }: { quote: string; author: string; role: string; image: string }) => (
  <div className="bg-white p-10 rounded-[2.5rem] border border-[#E1E2E4] shadow-sm relative">
    <span className="material-symbols-outlined text-6xl text-[#333D47]/5 absolute top-8 right-8" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
    <p className="text-base text-[#191C1E] leading-relaxed mb-8 relative z-10 italic">"{quote}"</p>
    <div className="flex items-center gap-4">
      <img className="w-14 h-14 rounded-full object-cover" src={image} alt={author} referrerPolicy="no-referrer" />
      <div>
        <h4 className="font-headline font-bold text-[#191C1E]">{author}</h4>
        <p className="text-sm text-[#44474E] font-medium">{role}</p>
      </div>
    </div>
  </div>
);
