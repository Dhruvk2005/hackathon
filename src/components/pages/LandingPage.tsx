import { Shield, Lock, Cpu, Zap, Eye, Users, ArrowRight, Check } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: 'onboarding') => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  const features = [
    {
      icon: Lock,
      title: 'Privacy Control',
      description: 'You own your data. Control what you share, with whom, and for how long.',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Cpu,
      title: 'Ethical AI Feed',
      description: 'Transparent recommendations. Know why you see what you see. No manipulation.',
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Low Bandwidth Optimized',
      description: 'Built for everyone. Lite Mode ensures accessibility regardless of connection.',
      gradient: 'from-orange-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-indigo-600" />
            <span className="text-xl font-semibold text-slate-800">TrueSocial</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#features" className="text-slate-600 hover:text-indigo-600 transition-colors">Features</a>
            <a href="#about" className="text-slate-600 hover:text-indigo-600 transition-colors">About</a>
            <button 
              onClick={() => onNavigate('onboarding')}
              className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
            >
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 -z-10"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-indigo-100 mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm text-slate-700">Launching 2026 • Privacy-First</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            A Privacy-First<br />
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              Social Network
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Take control of your online presence. Connect meaningfully with transparent AI, 
            user-owned data, and ethical design. No dark patterns. No manipulation.
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-16">
            <button 
              onClick={() => onNavigate('onboarding')}
              className="group flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Shield className="w-5 h-5" />
              <span className="font-semibold">Join Securely</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white text-slate-700 rounded-xl hover:bg-slate-50 transition-all shadow-md">
              Learn More
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-8 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>No tracking</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>Open algorithms</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>User-owned data</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Built Different</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Every feature is designed with your privacy, safety, and wellbeing in mind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-transparent hover:scale-105"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Value Props */}
      <section className="py-20 px-6 bg-gradient-to-br from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Transparency You Can Trust</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Unlike traditional social networks, we believe you deserve to know how our platform works. 
                Every recommendation comes with an explanation. Every privacy setting is clear and simple.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Eye className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">See Why You See</h4>
                    <p className="text-slate-600">Every post shows why it's in your feed. No hidden algorithms.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Privacy First, Always</h4>
                    <p className="text-slate-600">Your data stays yours. Delete anytime, export everything.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Community-Driven</h4>
                    <p className="text-slate-600">Built with input from privacy advocates and everyday users.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-lg">
                    <span className="text-slate-700">Personalized Feed</span>
                    <div className="w-12 h-6 bg-indigo-600 rounded-full relative">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <span className="text-slate-700">Online Status</span>
                    <div className="w-12 h-6 bg-slate-300 rounded-full relative">
                      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-lg">
                    <span className="text-slate-700">Data Analytics</span>
                    <div className="w-12 h-6 bg-indigo-600 rounded-full relative">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-500 mt-6 text-center">Simple, clear privacy controls</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-3xl p-12 shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Join?</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Be part of a social network that respects you.
          </p>
          <button 
            onClick={() => onNavigate('onboarding')}
            className="px-8 py-4 bg-white text-indigo-600 rounded-xl hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl font-semibold text-lg hover:scale-105"
          >
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-indigo-600" />
              <span className="font-semibold text-slate-800">SafeSpace</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-600">
              <a href="#" className="hover:text-indigo-600 transition-colors">Privacy</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Terms</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
