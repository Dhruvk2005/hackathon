import { useState } from 'react';
import { Shield, User, ArrowRight, Lock, Eye, Database } from 'lucide-react';

interface OnboardingPageProps {
  onNavigate: (page: 'privacy-setup') => void;
}

export function OnboardingPage({ onNavigate }: OnboardingPageProps) {
  const [username, setUsername] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      setIsSubmitting(true);
      setTimeout(() => {
        onNavigate('privacy-setup');
      }, 500);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 -z-10"></div>
      
      {/* Decorative blobs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left side - Privacy Assurance Card */}
        <div className="bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-3xl p-10 text-white shadow-2xl">
          <Shield className="w-12 h-12 mb-6" />
          <h2 className="text-3xl font-bold mb-4">Your Privacy, Your Control</h2>
          <p className="text-indigo-100 mb-8 leading-relaxed">
            Welcome to a different kind of social network. Here's what makes us different:
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">No Tracking</h4>
                <p className="text-sm text-indigo-100">We don't track you across the web or sell your data.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Transparent AI</h4>
                <p className="text-sm text-indigo-100">See exactly why content appears in your feed.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">User-Owned Data</h4>
                <p className="text-sm text-indigo-100">Your data belongs to you. Export or delete anytime.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
            <p className="text-sm text-indigo-50 italic">
              "Finally, a social network that treats me like a human, not a product." - Early Tester
            </p>
          </div>
        </div>

        {/* Right side - Sign Up Form */}
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-200">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-indigo-600">Step 1 of 2</span>
              <span className="text-sm text-slate-500">Create Account</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-full transition-all duration-500"
                style={{ width: '50%' }}
              ></div>
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Create Your Account</h1>
            <p className="text-slate-600">Join SafeSpace and connect meaningfully.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-slate-700 mb-2">
                Choose a Username
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="e.g., alex_designer"
                  className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                  required
                />
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Choose something you're comfortable sharing publicly.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-1">Privacy Note</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Your username is the only required field. No email, no phone number, no personal data needed to get started.
                  </p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={!username.trim() || isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed font-semibold group"
            >
              <span>{isSubmitting ? 'Creating...' : 'Continue to Privacy Setup'}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-500">
              Already have an account?{' '}
              <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
