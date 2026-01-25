import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LandingPage } from './components/pages/LandingPage';
import { OnboardingPage } from './components/pages/OnboardingPage';
import { PrivacySetupPage } from './components/pages/PrivacySetupPage';
import { HomeFeedPage } from './components/pages/HomeFeedPage';
import { CommunitiesPage } from './components/pages/CommunitiesPage';
import { ProfilePage } from './components/pages/ProfilePage';
import { MessagesPage } from './components/pages/MessagesPage';
import { VideoCallsPage } from './components/pages/VideoCallsPage';
import { ForumsPage } from './components/pages/ForumsPage';
import { GamificationPage } from './components/pages/GamificationPage';
import { ModerationPage } from './components/pages/ModerationPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'onboarding' | 'privacy-setup' | 'feed' | 'communities' | 'profile' | 'messages' | 'video-calls' | 'forums' | 'gamification' | 'moderation'>('landing');
  // @ts-ignore: isAuthenticated is used for future authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={setCurrentPage} />;
      case 'onboarding':
        return <OnboardingPage onNavigate={setCurrentPage} />;
      case 'privacy-setup':
        return <PrivacySetupPage onNavigate={setCurrentPage} setIsAuthenticated={setIsAuthenticated} />;
      case 'feed':
        return <HomeFeedPage />;
      case 'communities':
        return <CommunitiesPage />;
      case 'profile':
        return <ProfilePage />;
      case 'messages':
        return <MessagesPage />;
      case 'video-calls':
        return <VideoCallsPage />;
      case 'forums':
        return <ForumsPage />;
      case 'gamification':
        return <GamificationPage />;
      case 'moderation':
        return <ModerationPage />;
      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  const showNavAndFooter = currentPage !== 'landing' && currentPage !== 'onboarding' && currentPage !== 'privacy-setup';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex">
      {showNavAndFooter && <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />}
      <div className={`flex-1 ${showNavAndFooter ? '' : ''}`}>
        <main className="min-h-[calc(100vh-400px)]">
          {renderPage()}
        </main>
        {showNavAndFooter && <Footer />}
      </div>
    </div>
  );
}
