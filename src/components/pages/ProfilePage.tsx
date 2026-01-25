import { useState } from 'react';
import { Shield, Heart, Users, TrendingUp, Settings, Eye, Lock, Zap, AlertTriangle, CheckCircle, Info } from 'lucide-react';

export function ProfilePage() {
  const [liteModeEnabled, setLiteModeEnabled] = useState(false);

  const badges = [
    {
      icon: Heart,
      name: 'Respect Badge',
      description: 'Earned for positive community interactions',
      color: 'from-rose-500 to-pink-500',
      earned: true
    },
    {
      icon: Shield,
      name: 'Privacy Champion',
      description: 'Completed advanced privacy setup',
      color: 'from-indigo-500 to-blue-500',
      earned: true
    },
    {
      icon: Users,
      name: 'Helpful Contributor',
      description: 'Actively helping other community members',
      color: 'from-teal-500 to-cyan-500',
      earned: true
    },
    {
      icon: TrendingUp,
      name: 'Early Adopter',
      description: 'Joined during beta phase',
      color: 'from-orange-500 to-amber-500',
      earned: false
    }
  ];

  const privacyScore = 85;

  const safetyMetrics = [
    { label: 'Posts Reported', value: '0', status: 'good' },
    { label: 'Content Flagged', value: '0', status: 'good' },
    { label: 'Blocked Users', value: '2', status: 'neutral' },
    { label: 'Data Requests', value: '0', status: 'good' }
  ];

  return (
    <div className="min-h-screen pb-12">
      <div className="w-full px-6 pt-8">
        {/* Profile Header */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden mb-8">
          {/* Cover */}
          <div className="h-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          
          {/* Profile Info */}
          <div className="px-8 pb-8">
            <div className="flex items-start justify-between -mt-16 mb-6">
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-4xl font-bold border-4 border-white shadow-xl">
                A
              </div>
              <button className="mt-20 px-6 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-all flex items-center gap-2">
                <Settings className="w-4 h-4" />
                <span className="font-medium">Edit Profile</span>
              </button>
            </div>
            
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Alex Thompson</h1>
              <p className="text-lg text-slate-600 mb-4">@alex_designer</p>
              <p className="text-slate-700 max-w-2xl">
                Privacy advocate and designer building ethical digital experiences. 
                Passionate about user agency and transparent technology.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-slate-200">
              <div>
                <p className="text-2xl font-bold text-slate-900">127</p>
                <p className="text-sm text-slate-600">Posts</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">1.2k</p>
                <p className="text-sm text-slate-600">Connections</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">3</p>
                <p className="text-sm text-slate-600">Communities</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Privacy Score */}
          <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-900">Privacy Score</h2>
              <button className="p-2 rounded-lg hover:bg-slate-100 transition-all group">
                <Info className="w-5 h-5 text-slate-400 group-hover:text-indigo-600" />
              </button>
            </div>

            <div className="relative mb-6">
              <div className="w-40 h-40 mx-auto relative">
                <svg className="transform -rotate-90 w-40 h-40">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    className="text-slate-100"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="url(#gradient)"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 70}`}
                    strokeDashoffset={`${2 * Math.PI * 70 * (1 - privacyScore / 100)}`}
                    className="transition-all duration-1000"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-slate-900">{privacyScore}</p>
                    <p className="text-sm text-slate-600">/ 100</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-slate-700">Two-factor enabled</span>
                </div>
                <span className="text-xs font-medium text-green-700">+15</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-slate-700">Privacy controls set</span>
                </div>
                <span className="text-xs font-medium text-green-700">+20</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  <span className="text-sm text-slate-700">Online status visible</span>
                </div>
                <span className="text-xs font-medium text-amber-700">-15</span>
              </div>
            </div>

            <button className="w-full mt-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all font-medium">
              Improve Privacy Score
            </button>
          </div>

          {/* Gamification Badges */}
          <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Your Badges</h2>
            
            <div className="grid grid-cols-2 gap-4">
              {badges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <div 
                    key={index}
                    className={`relative p-4 rounded-xl border-2 transition-all ${
                      badge.earned
                        ? 'border-transparent bg-gradient-to-br ' + badge.color + ' text-white hover:scale-105'
                        : 'border-slate-200 bg-slate-50 opacity-50'
                    }`}
                  >
                    {badge.earned && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                    )}
                    <Icon className={`w-8 h-8 mb-2 ${badge.earned ? '' : 'text-slate-400'}`} />
                    <h4 className={`font-semibold mb-1 text-sm ${badge.earned ? '' : 'text-slate-700'}`}>
                      {badge.name}
                    </h4>
                    <p className={`text-xs ${badge.earned ? 'opacity-90' : 'text-slate-500'}`}>
                      {badge.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
              <p className="text-sm text-slate-700">
                <span className="font-semibold">1 badge</span> away from{' '}
                <span className="text-indigo-600 font-semibold">Community Leader</span> status!
              </p>
            </div>
          </div>
        </div>

        {/* Safety Dashboard */}
        <div className="mt-8 bg-white rounded-2xl shadow-md border border-slate-200 p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900">Safety Dashboard</h2>
            <div className="flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-green-700 font-medium">All Clear</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {safetyMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-bold text-slate-900 mb-1">{metric.value}</p>
                <p className="text-sm text-slate-600">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center gap-3 p-4 rounded-xl border-2 border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all text-left">
              <Eye className="w-6 h-6 text-indigo-600" />
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">Manage Visibility</h4>
                <p className="text-xs text-slate-600">Control who sees what</p>
              </div>
            </button>
            
            <button className="flex items-center gap-3 p-4 rounded-xl border-2 border-slate-200 hover:border-red-300 hover:bg-red-50 transition-all text-left">
              <Lock className="w-6 h-6 text-red-600" />
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">Blocked Accounts</h4>
                <p className="text-xs text-slate-600">View & manage blocks</p>
              </div>
            </button>
            
            <button className="flex items-center gap-3 p-4 rounded-xl border-2 border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all text-left">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">Report History</h4>
                <p className="text-xs text-slate-600">Track your reports</p>
              </div>
            </button>
          </div>
        </div>

        {/* Lite Mode */}
        <div className="mt-8 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl shadow-xl p-8 text-white">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8" />
                <h2 className="text-2xl font-bold">Lite Mode</h2>
              </div>
              <p className="text-teal-50 mb-6 max-w-2xl">
                Optimize SafeSpace for low-bandwidth connections. Reduces data usage by up to 70% 
                while maintaining full functionality.
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setLiteModeEnabled(!liteModeEnabled)}
                  className={`relative w-16 h-9 rounded-full transition-all duration-300 ${
                    liteModeEnabled ? 'bg-white' : 'bg-white/30'
                  }`}
                >
                  <div className={`absolute top-1 w-7 h-7 bg-teal-600 rounded-full shadow-md transition-all duration-300 ${
                    liteModeEnabled ? 'right-1' : 'left-1'
                  }`}></div>
                </button>
                <span className="font-semibold">
                  {liteModeEnabled ? 'Enabled' : 'Disabled'}
                </span>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <p className="text-4xl font-bold mb-1">2.3 MB</p>
              <p className="text-sm text-teal-50">Data saved today</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
