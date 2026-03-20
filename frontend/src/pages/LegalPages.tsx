import React from 'react';
import { MainLayout } from '@/src/components/layout';

const LegalPageLayout = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <MainLayout>
    <div className="max-w-3xl mx-auto px-6 md:px-12 py-12 md:py-20">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-[#E1E2E4]">
        <h1 className="text-3xl md:text-4xl font-extrabold font-headline tracking-tighter text-[#191C1E] mb-8">{title}</h1>
        <div className="prose prose-sm md:prose-base prose-slate text-[#44474E] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  </MainLayout>
);

export const PrivacyPolicyPage = () => (
  <LegalPageLayout title="Privacy Policy">
    <p>Last updated: October 2024</p>
    <h3>1. Information We Collect</h3>
    <p>We collect information you provide directly to us when you create an account, build a CV, or communicate with us.</p>
    <h3>2. How We Use Your Information</h3>
    <p>We use the information we collect to provide, maintain, and improve our services, including to personalize your experience and generate ATS-optimized CVs.</p>
    <h3>3. Data Security</h3>
    <p>We implement appropriate technical and organizational measures to maintain the safety of your personal information.</p>
  </LegalPageLayout>
);

export const TermsOfServicePage = () => (
  <LegalPageLayout title="Terms of Service">
    <p>Last updated: October 2024</p>
    <h3>1. Acceptance of Terms</h3>
    <p>By accessing or using our services, you agree to be bound by these Terms.</p>
    <h3>2. User Responsibilities</h3>
    <p>You are responsible for maintaining the accuracy of the information you provide and ensuring you have the right to use any images or text you upload.</p>
    <h3>3. Intellectual Property</h3>
    <p>Our templates and generated materials remain our intellectual property, licensed to you for your personal career advancement.</p>
  </LegalPageLayout>
);

export const CookiePolicyPage = () => (
  <LegalPageLayout title="Cookie Policy">
    <p>Last updated: October 2024</p>
    <h3>What Are Cookies</h3>
    <p>Cookies are small pieces of text sent to your web browser by a website you visit. They help the site remember information about your visit.</p>
    <h3>How We Use Cookies</h3>
    <p>We use cookies to maintain your login session, remember your preferences, and understand how you interact with our templates.</p>
  </LegalPageLayout>
);

export const ContactUsPage = () => (
  <LegalPageLayout title="Contact Us">
    <p>We're here to help you architect your career legacy.</p>
    <div className="mt-8 space-y-4">
      <p><strong>Email:</strong> support@cvwise.com</p>
      <p><strong>Press Inquiries:</strong> press@cvwise.com</p>
      <p><strong>Address:</strong> 100 Market Street, Suite 400, San Francisco, CA 94105</p>
    </div>
  </LegalPageLayout>
);
