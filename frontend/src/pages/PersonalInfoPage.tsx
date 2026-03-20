import React from 'react';
import { 
  Linkedin, 
  Globe, 
  Trash2,
  ArrowRight,
  MapPin
} from 'lucide-react';
import { DashboardLayout } from '@/src/components/layout';
import { Button, Input, Card } from '@/src/components/ui';

export const PersonalInfoPage = () => {
  const [profileImage, setProfileImage] = React.useState("https://api.dicebear.com/7.x/avataaars/svg?seed=Alexander&backgroundColor=FFE5D9");
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [isEditingSocials, setIsEditingSocials] = React.useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <DashboardLayout cvTitle="Resume Architect" cvSub="Editorial Mode">
      <div className="max-w-[1000px] px-4 md:px-12 py-6 md:py-10">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-6">
              <div className="space-y-1">
                <h1 className="text-2xl md:text-[32px] font-bold text-[#191C1E] font-headline tracking-tight">Personal Information</h1>
                <p className="text-[#44474E] text-sm md:text-[15px] font-medium">Let's start with the basics. This information will appear at the top of your CV.</p>
              </div>
              <div className="text-left md:text-right flex flex-col items-start md:items-end">
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F97316] mb-1">Step 1 of 5</p>
                <p className="text-lg font-bold text-[#191C1E] font-headline">20% Complete</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full flex items-center mb-12">
              <div className="h-1 bg-[#F97316] w-[20%] rounded-l-full"></div>
              <div className="h-1 bg-[#E1E2E4] w-[80%] rounded-r-full"></div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Left Column: Photo & Socials */}
              <div className="w-full md:w-[300px] flex-shrink-0 flex flex-col gap-6">
                <Card className="p-8 bg-white border-none shadow-[0_4px_24px_rgba(0,0,0,0.04)] rounded-[20px] flex flex-col items-center text-center">
                  <div 
                    className="w-[120px] h-[120px] rounded-2xl bg-[#FFE5D9] overflow-hidden mb-5 flex items-end justify-center cursor-pointer group relative"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <img 
                      src={profileImage} 
                      alt="Profile" 
                      className="w-[120px] h-[120px] object-cover group-hover:opacity-75 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white text-xs font-bold uppercase tracking-widest">Change</span>
                    </div>
                  </div>
                  <input 
                    type="file" 
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="hidden"
                  />
                  <h3 className="text-[15px] font-bold text-[#191C1E] mb-1.5">Profile Photo</h3>
                  <p className="text-[11px] text-[#44474E] leading-relaxed max-w-[160px]">
                    Recommended: Square image, min 400×400px.
                  </p>
                </Card>

                <Card className="p-6 bg-[#F1F3F5] border-none shadow-none rounded-[20px] space-y-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#44474E]">Social Profiles</h3>
                    <button onClick={() => setIsEditingSocials(!isEditingSocials)} className="text-[11px] font-bold text-[#F97316] hover:underline uppercase tracking-wider">
                      {isEditingSocials ? 'Done' : 'Edit'}
                    </button>
                  </div>
                  
                  {isEditingSocials ? (
                    <div className="space-y-4">
                      <Input defaultValue="linkedin.com/in/alexander" className="h-10 text-[13px] bg-white border-none focus:ring-1 focus:ring-[#F97316]/30" placeholder="LinkedIn URL" />
                      <Input defaultValue="alexander.design" className="h-10 text-[13px] bg-white border-none focus:ring-1 focus:ring-[#F97316]/30" placeholder="Portfolio/Website URL" />
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-[13px] text-[#191C1E] font-medium">
                        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#F97316]/10">
                          <Linkedin className="w-3.5 h-3.5 text-[#F97316]" />
                        </div>
                        <span className="truncate">linkedin.com/in/alexander</span>
                      </div>
                      <div className="flex items-center gap-3 text-[13px] text-[#191C1E] font-medium">
                        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#F97316]/10">
                          <Globe className="w-3.5 h-3.5 text-[#F97316]" />
                        </div>
                        <span className="truncate">alexander.design</span>
                      </div>
                    </div>
                  )}
                </Card>
              </div>

              {/* Right Column: Form Fields */}
              <div className="flex-1 bg-white p-10 rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
                <div className="space-y-7">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#44474E]">First Name</label>
                      <Input 
                        defaultValue="Alexander" 
                        className="bg-[#EAECEF] border-none h-12 text-[#191C1E] font-medium text-[15px] rounded-lg px-4 focus:ring-2 focus:ring-[#006591]/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#44474E]">Last Name</label>
                      <Input 
                        defaultValue="Hamilton" 
                        className="bg-[#EAECEF] border-none h-12 text-[#191C1E] font-medium text-[15px] rounded-lg px-4 focus:ring-2 focus:ring-[#006591]/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#44474E]">Email Address</label>
                      <Input 
                        defaultValue="alex.hamilton@executive.com" 
                        className="bg-[#EAECEF] border-none h-12 text-[#191C1E] font-medium text-[15px] rounded-lg px-4 focus:ring-2 focus:ring-[#006591]/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#44474E]">Phone Number</label>
                      <Input 
                        defaultValue="+1 (555) 000-1234" 
                        className="bg-[#EAECEF] border-none h-12 text-[#191C1E] font-medium text-[15px] rounded-lg px-4 focus:ring-2 focus:ring-[#006591]/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#44474E]">Professional Title</label>
                    <Input 
                      defaultValue="Senior Product Designer" 
                      className="bg-[#EAECEF] border-none h-12 text-[#191C1E] font-medium text-[15px] rounded-lg px-4 focus:ring-2 focus:ring-[#F97316]/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#44474E]">Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#44474E]" />
                      <Input 
                        defaultValue="San Francisco, CA" 
                        className="bg-[#EAECEF] border-none h-12 pl-[42px] text-[#191C1E] font-medium text-[15px] rounded-lg focus:ring-2 focus:ring-[#006591]/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#44474E]">Professional Summary</label>
                    <textarea 
                      className="bg-[#EAECEF] border-none px-4 py-4 rounded-lg text-[#191C1E] font-medium text-[15px] min-h-[140px] resize-none focus:ring-2 focus:ring-[#F97316]/20 transition-all leading-relaxed"
                      defaultValue="Passionate Product Designer with 8+ years of experience in building scalable design systems and high-converting user interfaces for Fortune 500 companies. Expertise in editorial-driven UI and architectural design philosophies."
                    ></textarea>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-8 flex justify-between items-center border-t border-[#F1F0F4] mt-4">
                    <button className="flex items-center gap-2 text-[14px] font-bold text-[#44474E] hover:text-[#191C1E] transition-colors py-2 px-1">
                      <Trash2 className="w-[18px] h-[18px]" />
                      Discard
                    </button>
                    <div className="flex gap-4">
                      <Button variant="outline" className="bg-[#F1F3F5] hover:bg-[#EAECEF] border-none text-[#191C1E] px-8 py-2.5 rounded-lg font-bold text-[14px]">
                        Back
                      </Button>
                      <Button className="bg-[#F97316] text-white hover:bg-[#EA580C] px-8 py-2.5 rounded-lg font-bold text-[14px] flex items-center gap-2 shadow-lg shadow-orange-500/10">
                        Save & Next
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                </div>
            </div>
          </div>
    </DashboardLayout>
  );
};
