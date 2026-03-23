import React from 'react';
import { 
  Linkedin, 
  Globe, 
  Trash2,
  ArrowRight,
  MapPin,
  User
} from 'lucide-react';
import { DashboardLayout } from '@/src/components/layout';
import { Button, Input, Card } from '@/src/components/ui';

import { useEditor } from '@/src/lib/EditorContext';
import { useAuth } from '@/src/lib/AuthContext';
import { useNavigate } from 'react-router-dom';

export const PersonalInfoPage = () => {
  const { cvData, updatePersonalInfo, calculateProgress } = useEditor();
  const { user } = useAuth();
  const navigate = useNavigate();
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [isEditingSocials, setIsEditingSocials] = React.useState(false);
  const [autoFilled, setAutoFilled] = React.useState(false);

  const personalInfo = cvData.personalInfo;
  const progress = calculateProgress();

  // Auto-fill from profile if fields are empty
  const handleAutoFill = () => {
    if (!user) return;
    const nameParts = (user.name || '').trim().split(' ');
    updatePersonalInfo({
      firstName: nameParts[0] || personalInfo.firstName,
      lastName: nameParts.slice(1).join(' ') || personalInfo.lastName,
      email: user.email || personalInfo.email,
      phone: user.phone || personalInfo.phone,
      title: user.title || personalInfo.title,
      location: user.location || personalInfo.location,
      linkedin: user.linkedin || personalInfo.linkedin,
      summary: user.summary || personalInfo.summary,
    });
    setAutoFilled(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updatePersonalInfo({ [name]: value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updatePersonalInfo({ profileImage: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveAndNext = () => {
    navigate('/editor/experience');
  };

  return (
    <DashboardLayout cvTitle={cvData.title} cvSub={personalInfo.title || "Editorial Mode"}>
      <div className="max-w-[1000px] px-4 md:px-12 py-6 md:py-10">
            {/* Header Section */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-6">
              <div className="space-y-1">
                <h1 className="text-2xl md:text-[32px] font-bold text-[#191C1E] font-headline tracking-tight">Personal Information</h1>
                <p className="text-[#44474E] text-sm md:text-[15px] font-medium">Let's start with the basics. This information will appear at the top of your CV.</p>
              </div>
              <div className="flex flex-col items-start md:items-end gap-3">
                <div className="text-left md:text-right">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F97316] mb-1">Step 1 of 5</p>
                  <p className="text-lg font-bold text-[#191C1E] font-headline">{Math.round(progress)}% Complete</p>
                </div>
                {user && (
                  <button
                    onClick={handleAutoFill}
                    className="flex items-center gap-2 text-xs font-bold text-[#F97316] hover:text-[#EA580C] transition-colors bg-[#F97316]/10 hover:bg-[#F97316]/20 px-3 py-1.5 rounded-lg"
                  >
                    <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                    {autoFilled ? '✓ Profile Applied' : 'Auto-fill from Profile'}
                  </button>
                )}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full flex items-center mb-12">
              <div className="h-1 bg-[#F97316] rounded-l-full" style={{ width: `${progress}%` }}></div>
              <div className="h-1 bg-[#E1E2E4] rounded-r-full" style={{ width: `${100 - progress}%` }}></div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Left Column: Photo & Socials */}
              <div className="w-full md:w-[300px] flex-shrink-0 flex flex-col gap-6">
                <Card className="p-8 bg-white border-none shadow-[0_4px_24px_rgba(0,0,0,0.04)] rounded-[20px] flex flex-col items-center text-center">
                  <div 
                    className="w-[120px] h-[120px] rounded-2xl bg-[#FFE5D9] overflow-hidden mb-5 flex items-end justify-center cursor-pointer group relative"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    {personalInfo.profileImage ? (
                      <img 
                        src={personalInfo.profileImage} 
                        alt="Profile" 
                        className="w-[120px] h-[120px] object-cover group-hover:opacity-75 transition-opacity"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#F97316]/10">
                        <User className="w-12 h-12 text-[#F97316]" />
                      </div>
                    )}
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
                      <div className="space-y-1">
                        <label className="text-[9px] font-bold text-[#44474E] uppercase ml-1">LinkedIn</label>
                        <Input 
                          name="linkedin"
                          value={personalInfo.linkedin || ''} 
                          onChange={handleInputChange}
                          className="h-10 text-[13px] bg-white border-none focus:ring-1 focus:ring-[#F97316]/30" 
                          placeholder="linkedin.com/in/username" 
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-bold text-[#44474E] uppercase ml-1">Portfolio/Website</label>
                        <Input 
                          name="portfolio"
                          value={personalInfo.portfolio || ''} 
                          onChange={handleInputChange}
                          className="h-10 text-[13px] bg-white border-none focus:ring-1 focus:ring-[#F97316]/30" 
                          placeholder="yourportfolio.com" 
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-[13px] text-[#191C1E] font-medium">
                        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#F97316]/10">
                          <Linkedin className="w-3.5 h-3.5 text-[#F97316]" />
                        </div>
                        <span className="truncate">{personalInfo.linkedin || 'Not set'}</span>
                      </div>
                      <div className="flex items-center gap-3 text-[13px] text-[#191C1E] font-medium">
                        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#F97316]/10">
                          <Globe className="w-3.5 h-3.5 text-[#F97316]" />
                        </div>
                        <span className="truncate">{personalInfo.portfolio || 'Not set'}</span>
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
                        name="firstName"
                        value={personalInfo.firstName} 
                        onChange={handleInputChange}
                        className="bg-[#EAECEF] border-none h-12 text-[#191C1E] font-medium text-[15px] rounded-lg px-4 focus:ring-2 focus:ring-[#F97316]/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#44474E]">Last Name</label>
                      <Input 
                        name="lastName"
                        value={personalInfo.lastName} 
                        onChange={handleInputChange}
                        className="bg-[#EAECEF] border-none h-12 text-[#191C1E] font-medium text-[15px] rounded-lg px-4 focus:ring-2 focus:ring-[#F97316]/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#44474E]">Email Address</label>
                      <Input 
                        name="email"
                        value={personalInfo.email} 
                        onChange={handleInputChange}
                        className="bg-[#EAECEF] border-none h-12 text-[#191C1E] font-medium text-[15px] rounded-lg px-4 focus:ring-2 focus:ring-[#F97316]/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#44474E]">Phone Number</label>
                      <Input 
                        name="phone"
                        value={personalInfo.phone} 
                        onChange={handleInputChange}
                        className="bg-[#EAECEF] border-none h-12 text-[#191C1E] font-medium text-[15px] rounded-lg px-4 focus:ring-2 focus:ring-[#F97316]/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#44474E]">Professional Title</label>
                    <Input 
                      name="title"
                      value={personalInfo.title} 
                      onChange={handleInputChange}
                      className="bg-[#EAECEF] border-none h-12 text-[#191C1E] font-medium text-[15px] rounded-lg px-4 focus:ring-2 focus:ring-[#F97316]/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#44474E]">Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#44474E]" />
                      <Input 
                        name="location"
                        value={personalInfo.location} 
                        onChange={handleInputChange}
                        className="bg-[#EAECEF] border-none h-12 pl-[42px] text-[#191C1E] font-medium text-[15px] rounded-lg focus:ring-2 focus:ring-[#F97316]/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#44474E]">Professional Summary</label>
                    <textarea 
                      name="summary"
                      value={personalInfo.summary}
                      onChange={handleInputChange}
                      className="bg-[#EAECEF] border-none px-4 py-4 rounded-lg text-[#191C1E] font-medium text-[15px] min-h-[140px] resize-none focus:ring-2 focus:ring-[#F97316]/20 transition-all leading-relaxed"
                    ></textarea>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-8 flex justify-between items-center border-t border-[#F1F0F4] mt-4">
                    <button className="flex items-center gap-2 text-[14px] font-bold text-[#44474E] hover:text-[#191C1E] transition-colors py-2 px-1">
                      <Trash2 className="w-[18px] h-[18px]" />
                      Discard
                    </button>
                    <div className="flex gap-4">
                      <Button variant="outline" className="bg-[#F1F3F5] hover:bg-[#EAECEF] border-none text-[#191C1E] px-8 py-2.5 rounded-lg font-bold text-[14px]" onClick={() => navigate('/dashboard')}>
                        Back
                      </Button>
                      <Button className="bg-[#F97316] text-white hover:bg-[#EA580C] px-8 py-2.5 rounded-lg font-bold text-[14px] flex items-center gap-2 shadow-lg shadow-orange-500/10" onClick={handleSaveAndNext}>
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
