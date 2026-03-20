import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MainLayout } from '@/src/components/layout';
import { Button } from '@/src/components/ui';

export const LandingPage = () => {
  return (
    <MainLayout>
      <div className="bg-[#F8F9FA]">
        {/* Hero Section */}
        <section className="relative px-8 md:px-24 py-20 overflow-hidden">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="z-10"
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold font-headline tracking-tighter text-[#191C1E] mb-6 leading-[1.1]">
                Architect Your <br/><span className="text-[#F97316]">Career Legacy.</span>
              </h1>
              <p className="text-lg text-[#44474E] max-w-xl mb-10 leading-relaxed">
                Transform raw professional data into high-end editorial narratives. Our AI-driven engine polishes your experience into a boardroom-ready masterpiece.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/login">
                  <Button className="bg-[#333D47] text-white hover:bg-[#191C1E] px-8 py-6 text-lg rounded-lg">Get Started</Button>
                </Link>
                <Link to="/templates">
                  <Button variant="outline" className="bg-white text-[#191C1E] border-[#E1E2E4] px-8 py-6 text-lg rounded-lg hover:bg-[#F8F9FA]">View Templates</Button>
                </Link>
              </div>
              <div className="mt-12 flex items-center gap-4 text-sm text-[#44474E]/70">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <img 
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white" 
                      src={`https://picsum.photos/seed/user${i}/100/100`} 
                      alt="User"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <p className="font-medium">Trusted by 10k+ Fortune 500 executives</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-[#F97316] p-8 rounded-3xl shadow-2xl transform rotate-2">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b pb-4">
                      <div>
                        <p className="text-[10px] font-bold text-[#F97316] uppercase tracking-widest">Executive</p>
                        <p className="text-xl font-black font-headline">C.V.</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-[#F1F0F4] rounded-full w-3/4"></div>
                      <div className="h-2 bg-[#F1F0F4] rounded-full w-full"></div>
                      <div className="h-2 bg-[#F1F0F4] rounded-full w-5/6"></div>
                    </div>
                    <div className="pt-4 space-y-4">
                      <div className="h-4 bg-[#F1F0F4] rounded w-1/4"></div>
                      <div className="space-y-2">
                        <div className="h-2 bg-[#F1F0F4] rounded-full w-full"></div>
                        <div className="h-2 bg-[#F1F0F4] rounded-full w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl flex items-center gap-4 border border-[#E1E2E4] z-20">
                  <div className="w-12 h-12 rounded-full bg-[#F1F0F4] flex items-center justify-center text-[#F97316]">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#44474E] uppercase tracking-widest">AI Polishing</p>
                    <p className="font-headline font-bold text-[#191C1E]">Optimizing impact...</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section className="px-8 md:px-24 py-32 bg-white">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-20 text-center">
              <h2 className="text-4xl font-extrabold font-headline tracking-tight text-[#191C1E] mb-4">Precision Engineering for Your Persona</h2>
              <p className="text-[#44474E] max-w-2xl mx-auto">Reject the generic. We provide the tools to curate a professional narrative that resonates at the highest levels.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature Card 1 */}
              <div className="md:col-span-2 bg-[#F8F9FA] p-12 rounded-[2.5rem] flex flex-col justify-between group">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#333D47] text-white flex items-center justify-center mb-8">
                    <span className="material-symbols-outlined text-3xl">psychology</span>
                  </div>
                  <h3 className="text-3xl font-headline font-bold text-[#191C1E] mb-4">AI Polishing</h3>
                  <p className="text-[#44474E] leading-relaxed max-w-md">Our proprietary algorithm analyzes job descriptions and refines your tone, vocabulary, and achievements to match executive expectations instantly.</p>
                </div>
                <div className="mt-12 h-40 bg-white rounded-2xl shadow-sm overflow-hidden relative border border-[#E1E2E4]">
                  <div className="absolute inset-0 flex flex-col justify-center p-10 space-y-4">
                    <div className="h-2 bg-[#F1F0F4] rounded-full w-3/4"></div>
                    <div className="h-2 bg-[#333D47]/20 rounded-full w-full"></div>
                    <div className="h-2 bg-[#F1F0F4] rounded-full w-1/2"></div>
                  </div>
                </div>
              </div>
              {/* Feature Card 2 */}
              <div className="bg-[#EA580C] p-12 rounded-[2.5rem] text-white flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-3xl">picture_as_pdf</span>
                </div>
                <h3 className="text-3xl font-headline font-bold mb-4">PDF Export</h3>
                <p className="text-white/80 leading-relaxed mb-12">One-click production-grade exports. Every document is optimized for both human readers and ATS tracking systems.</p>
                <div className="mt-auto bg-white/10 rounded-2xl p-5 flex items-center justify-between border border-white/10">
                  <span className="font-bold text-sm">Executive_CV.pdf</span>
                  <span className="material-symbols-outlined text-xl">download</span>
                </div>
              </div>
              {/* Feature Card 3 */}
              <div className="md:col-span-3 bg-[#F8F9FA] p-12 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-16 overflow-hidden">
                <div className="flex-1">
                  <div className="w-14 h-14 rounded-2xl bg-[#333D47] text-white flex items-center justify-center mb-8">
                    <span className="material-symbols-outlined text-3xl">dashboard_customize</span>
                  </div>
                  <h3 className="text-3xl font-headline font-bold text-[#191C1E] mb-4">Professional Templates</h3>
                  <p className="text-[#44474E] leading-relaxed">Curated by top-tier recruiters and designers. Our templates follow the "No-Line" architecture for a clean, modern, and high-authority aesthetic.</p>
                </div>
                <div className="flex-1 flex gap-6 translate-x-12">
                  <div className="bg-white w-64 aspect-[3/4] rounded-xl shadow-2xl border border-[#E1E2E4] -rotate-6"></div>
                  <div className="bg-white w-64 aspect-[3/4] rounded-xl shadow-2xl border border-[#E1E2E4] rotate-3 translate-y-8"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-8 md:px-24 py-32 bg-[#F8F9FA]">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-extrabold font-headline tracking-tight text-[#191C1E] mb-4">Endorsed by the Industry</h2>
              <p className="text-[#44474E]">Hear from the leaders who have secured their next chapter using CVWise.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Testimonial 
                quote="The precision of the AI polishing was unexpected. It didn't just fix grammar; it understood the nuance of my leadership role and presented it with an editorial flair I couldn't achieve alone."
                author="Sarah Jenkins"
                role="CTO, Global Tech Solutions"
                image="https://picsum.photos/seed/sarah/100/100"
              />
              <Testimonial 
                quote="Most builders look like templates. This looks like a portfolio. The 'No-Line' aesthetic immediately stood out to the hiring committee at my new firm. Truly high-end."
                author="Marcus Thorne"
                role="Venture Partner, Alpha Capital"
                image="https://picsum.photos/seed/marcus/100/100"
              />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-8 md:px-24 py-32 bg-white">
          <div className="max-w-screen-2xl mx-auto bg-[#333D47] rounded-[3rem] p-16 md:p-24 text-center text-white overflow-hidden relative shadow-2xl">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-extrabold font-headline mb-8 tracking-tighter">Ready to lead the conversation?</h2>
              <p className="text-xl text-white/80 mb-12 leading-relaxed">Join the world's most ambitious professionals and build a CV that commands attention.</p>
              <Link to="/login">
                <Button className="bg-white text-[#333D47] hover:bg-white/90 px-12 py-8 text-xl font-bold rounded-xl border-none">
                  Build Your Executive CV
                </Button>
              </Link>
              <p className="mt-8 text-sm text-white/60">Free to start. No credit card required.</p>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

const Testimonial = ({ quote, author, role, image }: { quote: string; author: string; role: string; image: string }) => (
  <div className="bg-white p-12 rounded-[2.5rem] border border-[#E1E2E4] shadow-sm relative">
    <span className="material-symbols-outlined text-6xl text-[#333D47]/5 absolute top-8 right-8" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
    <p className="text-xl italic text-[#191C1E] leading-relaxed mb-10 relative z-10">"{quote}"</p>
    <div className="flex items-center gap-4">
      <img className="w-16 h-16 rounded-full object-cover" src={image} alt={author} referrerPolicy="no-referrer" />
      <div>
        <h4 className="font-headline font-bold text-[#191C1E]">{author}</h4>
        <p className="text-sm text-[#44474E] font-medium">{role}</p>
      </div>
    </div>
  </div>
);
