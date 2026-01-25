import { useState } from 'react';
import { Users, Code, Palette, Cpu, Book, Coffee, TrendingUp, MessageSquare, UserPlus, Check } from 'lucide-react';

export function CommunitiesPage() {
  const [joinedCommunities, setJoinedCommunities] = useState<number[]>([1, 2]);

  const communities = [
    {
      id: 1,
      name: 'Developers',
      icon: Code,
      members: '12.5k',
      posts: '2.3k this week',
      description: 'A community for developers building ethical, privacy-first applications.',
      color: 'from-blue-500 to-cyan-500',
      recentTopics: [
        { title: 'Best practices for secure authentication', replies: 45, time: '2h ago' },
        { title: 'Open source privacy tools', replies: 23, time: '5h ago' }
      ]
    },
    {
      id: 2,
      name: 'Designers',
      icon: Palette,
      members: '8.2k',
      posts: '1.8k this week',
      description: 'Design with purpose. Discuss UX, accessibility, and human-centered design.',
      color: 'from-purple-500 to-pink-500',
      recentTopics: [
        { title: 'Designing for accessibility first', replies: 67, time: '1h ago' },
        { title: 'Color theory and psychology', replies: 34, time: '4h ago' }
      ]
    },
    {
      id: 3,
      name: 'AI Enthusiasts',
      icon: Cpu,
      members: '15.7k',
      posts: '3.1k this week',
      description: 'Exploring artificial intelligence with transparency and ethics at the core.',
      color: 'from-indigo-500 to-blue-500',
      recentTopics: [
        { title: 'Explainable AI: Making models transparent', replies: 89, time: '30m ago' },
        { title: 'Bias detection in ML models', replies: 56, time: '3h ago' }
      ]
    },
    {
      id: 4,
      name: 'Privacy Advocates',
      icon: Book,
      members: '6.4k',
      posts: '892 this week',
      description: 'Protecting digital rights and promoting privacy-first technologies.',
      color: 'from-teal-500 to-green-500',
      recentTopics: [
        { title: 'GDPR compliance for startups', replies: 28, time: '6h ago' },
        { title: 'End-to-end encryption best practices', replies: 41, time: '8h ago' }
      ]
    },
    {
      id: 5,
      name: 'Startup Founders',
      icon: TrendingUp,
      members: '4.9k',
      posts: '654 this week',
      description: 'Building businesses that respect users and create real value.',
      color: 'from-orange-500 to-red-500',
      recentTopics: [
        { title: 'Bootstrapping vs VC funding', replies: 72, time: '4h ago' },
        { title: 'Building in public journey', replies: 38, time: '7h ago' }
      ]
    },
    {
      id: 6,
      name: 'Coffee & Code',
      icon: Coffee,
      members: '9.1k',
      posts: '1.2k this week',
      description: 'Casual conversations about tech, life, and everything in between.',
      color: 'from-amber-500 to-orange-500',
      recentTopics: [
        { title: 'Your favorite productivity setup?', replies: 95, time: '2h ago' },
        { title: 'Weekend project showcase', replies: 61, time: '5h ago' }
      ]
    }
  ];

  const toggleJoin = (id: number) => {
    setJoinedCommunities(prev => 
      prev.includes(id) ? prev.filter(cid => cid !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen pb-12">
      <div className="w-full px-6 pt-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Communities</h1>
          <p className="text-lg text-slate-600">
            Join interest-based communities and connect with like-minded people.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl p-6 text-white shadow-lg">
            <Users className="w-8 h-8 mb-2 opacity-80" />
            <p className="text-3xl font-bold mb-1">{joinedCommunities.length}</p>
            <p className="text-indigo-100">Communities Joined</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl p-6 text-white shadow-lg">
            <MessageSquare className="w-8 h-8 mb-2 opacity-80" />
            <p className="text-3xl font-bold mb-1">247</p>
            <p className="text-cyan-100">Discussions This Week</p>
          </div>
          <div className="bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl p-6 text-white shadow-lg">
            <TrendingUp className="w-8 h-8 mb-2 opacity-80" />
            <p className="text-3xl font-bold mb-1">1.2k</p>
            <p className="text-teal-100">Active Members Today</p>
          </div>
        </div>

        {/* Communities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {communities.map((community) => {
            const Icon = community.icon;
            const isJoined = joinedCommunities.includes(community.id);
            
            return (
              <div 
                key={community.id}
                className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden hover:shadow-xl transition-all"
              >
                {/* Community Header */}
                <div className={`bg-gradient-to-r ${community.color} p-6 text-white`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{community.name}</h3>
                        <div className="flex items-center gap-3 text-sm opacity-90 mt-1">
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {community.members}
                          </span>
                          <span>·</span>
                          <span>{community.posts}</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleJoin(community.id)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                        isJoined
                          ? 'bg-white/20 backdrop-blur-sm hover:bg-white/30'
                          : 'bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {isJoined ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Joined</span>
                        </>
                      ) : (
                        <>
                          <UserPlus className="w-4 h-4" />
                          <span>Join</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-sm opacity-90">{community.description}</p>
                </div>

                {/* Recent Topics */}
                <div className="p-6">
                  <h4 className="text-sm font-semibold text-slate-900 mb-4">Recent Discussions</h4>
                  <div className="space-y-3">
                    {community.recentTopics.map((topic, index) => (
                      <div 
                        key={index}
                        className="flex items-start justify-between p-3 rounded-lg hover:bg-slate-50 transition-all cursor-pointer group"
                      >
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-900 group-hover:text-indigo-600 transition-colors">
                            {topic.title}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                            <MessageSquare className="w-3 h-3" />
                            <span>{topic.replies} replies</span>
                            <span>·</span>
                            <span>{topic.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-4 py-2 text-sm text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all font-medium">
                    View All Discussions
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Discover More */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200">
            <Users className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Looking for something else?</h3>
            <p className="text-slate-600 mb-4">Can't find the right community? Request a new one!</p>
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all shadow-lg font-medium">
              Request New Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
