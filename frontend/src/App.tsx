/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
import { DashboardPage } from './pages/DashboardPage';
import { PersonalInfoPage } from './pages/PersonalInfoPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { SkillsPage } from './pages/SkillsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { StylingPage } from './pages/StylingPage';
import { PreviewPage } from './pages/PreviewPage';
import { TemplatesPage } from './pages/TemplatesPage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { PricingPage } from './pages/PricingPage';
import { UpgradePage } from './pages/UpgradePage';
import { EducationPage } from './pages/EducationPage';
import { SettingsPage } from './pages/SettingsPage';
import { SupportPage } from './pages/SupportPage';
import { PrivacyPolicyPage, TermsOfServicePage, CookiePolicyPage, ContactUsPage } from './pages/LegalPages';
import { MyCVsPage } from './pages/MyCVsPage';
import { NewSectionPage } from './pages/NewSectionPage';
import { OnboardingPage } from './pages/OnboardingPage';
import { AuthProvider } from './lib/AuthContext';
import { EditorProvider } from './lib/EditorContext';
import { ProtectedRoute } from './components/ProtectedRoute';

export default function App() {
  return (
    <AuthProvider>
      <EditorProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/templates" element={<TemplatesPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
            <Route path="/cookies" element={<CookiePolicyPage />} />
            <Route path="/contact" element={<ContactUsPage />} />

            {/* Onboarding (after signup) */}
            <Route path="/onboarding" element={<ProtectedRoute><OnboardingPage /></ProtectedRoute>} />

            {/* User Protected Routes */}
            <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
            <Route path="/my-cvs" element={<ProtectedRoute><MyCVsPage /></ProtectedRoute>} />
            <Route path="/upgrade" element={<ProtectedRoute><UpgradePage /></ProtectedRoute>} />
            <Route path="/analytics" element={<ProtectedRoute><AnalyticsPage /></ProtectedRoute>} />
            <Route path="/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
            <Route path="/support" element={<ProtectedRoute><SupportPage /></ProtectedRoute>} />

            {/* Editor Protected Routes */}
            <Route path="/editor/personal" element={<ProtectedRoute><PersonalInfoPage /></ProtectedRoute>} />
            <Route path="/editor/experience" element={<ProtectedRoute><ExperiencePage /></ProtectedRoute>} />
            <Route path="/editor/education" element={<ProtectedRoute><EducationPage /></ProtectedRoute>} />
            <Route path="/editor/skills" element={<ProtectedRoute><SkillsPage /></ProtectedRoute>} />
            <Route path="/editor/projects" element={<ProtectedRoute><ProjectsPage /></ProtectedRoute>} />
            <Route path="/editor/styling" element={<ProtectedRoute><StylingPage /></ProtectedRoute>} />
            <Route path="/preview" element={<ProtectedRoute><PreviewPage /></ProtectedRoute>} />
            <Route path="/editor/new-section" element={<ProtectedRoute><NewSectionPage /></ProtectedRoute>} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </EditorProvider>
    </AuthProvider>
  );
}
