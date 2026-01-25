import { useState } from 'react';
import { Shield, ArrowRight, Info, Eye, Users, Wifi, Check } from 'lucide-react';

interface PrivacySetupPageProps {
  onNavigate: (page: 'feed') => void;
  setIsAuthenticated: (value: boolean) => void;
}

export function PrivacySetupPage({ onNavigate, setIsAuthenticated }: PrivacySetupPageProps) {
  const [personalizedFeed, setPersonalizedFeed] = useState(true);
  const [postVisibility, setPostVisibility] = useState<'public' | 'friends'>('public');
  const [onlineStatus, setOnlineStatus] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleComplete = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsAuthenticated(true);
      onNavigate('feed');
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 -z-10"></div>
      
      {/* Decorative blobs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="w-full max-w-4xl">
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-200">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-indigo-600">Step 2 of 2</span>
              <span className="text-sm text-slate-500">Privacy & Personalization</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-full transition-all duration-500"
                style={{ width: '100%' }}
              ></div>
            </div>
          </div>

          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 mb-4 shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Customize Your Privacy</h1>
            <p className="text-slate-600 max-w-2xl mx-auto">
              These settings control how you experience SafeSpace. You can change them anytime in your profile.
            </p>
          </div>

          <div className="space-y-6 mb-8">
            {/* Personalized Feed Toggle */}
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200 hover:border-indigo-200 transition-all">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Wifi className="w-5 h-5 text-indigo-600" />
                    <h3 className="font-semibold text-slate-900">Personalized Feed</h3>
                    <button className="group relative">
                      <Info className="w-4 h-4 text-slate-400 hover:text-indigo-600 transition-colors" />
                      <div className="absolute left-0 bottom-full mb-2 w-64 p-3 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        When enabled, we'll use AI to suggest content based on your interests. You'll see why each post appears.
                      </div>
                    </button>
                  </div>
                  <p className="text-sm text-slate-600">
                    Use AI to show you relevant content based on your interactions. All recommendations are transparent.
                  </p>
                </div>
                <button
                  onClick={() => setPersonalizedFeed(!personalizedFeed)}
                  className={`relative w-14 h-8 rounded-full transition-all duration-300 ${
                    personalizedFeed ? 'bg-indigo-600' : 'bg-slate-300'
                  }`}
                >
                  <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 ${
                    personalizedFeed ? 'right-1' : 'left-1'
                  }`}></div>
                </button>
              </div>
            </div>

            {/* Post Visibility Toggle */}
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200 hover:border-indigo-200 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-indigo-600" />
                    <h3 className="font-semibold text-slate-900">Default Post Visibility</h3>
                    <button className="group relative">
                      <Info className="w-4 h-4 text-slate-400 hover:text-indigo-600 transition-colors" />
                      <div className="absolute left-0 bottom-full mb-2 w-64 p-3 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        Choose who can see your posts by default. You can change this for each post individually.
                      </div>
                    </button>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">
                    Control who can see your posts. You can change this for individual posts later.
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setPostVisibility('public')}
                      className={`flex-1 px-4 py-3 rounded-xl border-2 transition-all ${
                        postVisibility === 'public'
                          ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Eye className="w-4 h-4" />
                        <span className="font-medium">Public</span>
                        {postVisibility === 'public' && <Check className="w-4 h-4" />}
                      </div>
                    </button>
                    <button
                      onClick={() => setPostVisibility('friends')}
                      className={`flex-1 px-4 py-3 rounded-xl border-2 transition-all ${
                        postVisibility === 'friends'
                          ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Users className="w-4 h-4" />
                        <span className="font-medium">Friends Only</span>
                        {postVisibility === 'friends' && <Check className="w-4 h-4" />}
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Online Status Toggle */}
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200 hover:border-indigo-200 transition-all">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <h3 className="font-semibold text-slate-900">Online Status Visibility</h3>
                    <button className="group relative">
                      <Info className="w-4 h-4 text-slate-400 hover:text-indigo-600 transition-colors" />
                      <div className="absolute left-0 bottom-full mb-2 w-64 p-3 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        Let others see when you're online. This helps with real-time conversations.
                      </div>
                    </button>
                  </div>
                  <p className="text-sm text-slate-600">
                    Allow others to see when you're active on SafeSpace.
                  </p>
                </div>
                <button
                  onClick={() => setOnlineStatus(!onlineStatus)}
                  className={`relative w-14 h-8 rounded-full transition-all duration-300 ${
                    onlineStatus ? 'bg-indigo-600' : 'bg-slate-300'
                  }`}
                >
                  <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 ${
                    onlineStatus ? 'right-1' : 'left-1'
                  }`}></div>
                </button>
              </div>
            </div>
          </div>

          {/* Privacy Summary */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100 mb-8">
            <h4 className="font-semibold text-slate-900 mb-3">Your Privacy Summary</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-600"></div>
                <span>Feed: {personalizedFeed ? 'Personalized with transparent AI' : 'Chronological only'}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-600"></div>
                <span>Posts: {postVisibility === 'public' ? 'Public by default' : 'Friends only by default'}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-600"></div>
                <span>Status: {onlineStatus ? 'Visible to others' : 'Hidden'}</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleComplete}
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed font-semibold group"
          >
            <span>{isSubmitting ? 'Setting up...' : 'Complete Setup & Enter SafeSpace'}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-xs text-center text-slate-500 mt-4">
            You can change all these settings anytime in your profile
          </p>
        </div>
      </div>
    </div>
  );
}
