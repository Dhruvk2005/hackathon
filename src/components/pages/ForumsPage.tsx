import { useState } from 'react';
import { MessageSquare, Users, TrendingUp, Clock, ThumbsUp, MessageCircle, Eye, Pin, Search, Filter } from 'lucide-react';

export function ForumsPage() {
  const [selectedForum, setSelectedForum] = useState<number | null>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const forums = [
    {
      id: 1,
      name: 'General Discussion',
      description: 'Open discussions about privacy, technology, and community topics',
      icon: MessageSquare,
      color: 'from-blue-500 to-cyan-500',
      threads: 245,
      posts: 1234,
      lastActivity: '2 minutes ago'
    },
    {
      id: 2,
      name: 'Privacy & Security',
      description: 'Technical discussions about data protection and security practices',
      icon: Users,
      color: 'from-indigo-500 to-purple-500',
      threads: 189,
      posts: 892,
      lastActivity: '15 minutes ago'
    },
    {
      id: 3,
      name: 'Development',
      description: 'Programming, tools, and development best practices',
      icon: TrendingUp,
      color: 'from-teal-500 to-cyan-500',
      threads: 156,
      posts: 743,
      lastActivity: '1 hour ago'
    }
  ];

  const threads = [
    {
      id: 1,
      title: 'Best practices for implementing end-to-end encryption in web apps',
      author: 'Sarah Chen',
      avatar: 'SC',
      avatarColor: 'from-pink-500 to-rose-500',
      replies: 23,
      views: 156,
      lastReply: '5 minutes ago',
      lastReplyBy: 'Marcus Johnson',
      isPinned: true,
      tags: ['Security', 'Web Development'],
      forum: 'Privacy & Security'
    },
    {
      id: 2,
      title: 'How do you handle user consent for data collection?',
      author: 'Emma Rodriguez',
      avatar: 'ER',
      avatarColor: 'from-purple-500 to-indigo-500',
      replies: 18,
      views: 89,
      lastReply: '12 minutes ago',
      lastReplyBy: 'Alex Kim',
      isPinned: false,
      tags: ['Privacy', 'UX'],
      forum: 'General Discussion'
    },
    {
      id: 3,
      title: 'React vs Vue: Privacy-first development considerations',
      author: 'Marcus Johnson',
      avatar: 'MJ',
      avatarColor: 'from-blue-500 to-cyan-500',
      replies: 31,
      views: 234,
      lastReply: '1 hour ago',
      lastReplyBy: 'Sarah Chen',
      isPinned: false,
      tags: ['React', 'Vue', 'Frontend'],
      forum: 'Development'
    },
    {
      id: 4,
      title: 'GDPR compliance checklist for small applications',
      author: 'David Park',
      avatar: 'DP',
      avatarColor: 'from-green-500 to-emerald-500',
      replies: 12,
      views: 67,
      lastReply: '2 hours ago',
      lastReplyBy: 'Emma Rodriguez',
      isPinned: false,
      tags: ['GDPR', 'Compliance'],
      forum: 'Privacy & Security'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Forums', count: 590 },
    { id: 'privacy', name: 'Privacy & Security', count: 189 },
    { id: 'development', name: 'Development', count: 156 },
    { id: 'general', name: 'General Discussion', count: 245 }
  ];

  const filteredThreads = selectedCategory === 'all'
    ? threads
    : threads.filter(thread => {
        if (selectedCategory === 'privacy') return thread.forum === 'Privacy & Security';
        if (selectedCategory === 'development') return thread.forum === 'Development';
        if (selectedCategory === 'general') return thread.forum === 'General Discussion';
        return true;
      });

  return (
    <div className="min-h-screen pb-12">
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Community Forums</h1>
          <p className="text-slate-600">Engage in meaningful discussions about privacy, technology, and community</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-800 mb-4">Forums</h2>

              <div className="space-y-2">
                {forums.map((forum) => (
                  <button
                    key={forum.id}
                    onClick={() => setSelectedForum(forum.id)}
                    className={`w-full p-3 rounded-lg text-left transition-all ${
                      selectedForum === forum.id
                        ? 'bg-indigo-50 border border-indigo-200'
                        : 'hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${forum.color} flex items-center justify-center`}>
                        <forum.icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-slate-800 text-sm">{forum.name}</p>
                        <p className="text-xs text-slate-500">{forum.threads} threads</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <h3 className="text-sm font-medium text-slate-800 mb-3">Categories</h3>
                <div className="space-y-1">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded text-sm transition-all ${
                        selectedCategory === category.id
                          ? 'bg-indigo-100 text-indigo-700'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filters */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search discussions..."
                    className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-all flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    Filter
                  </button>
                  <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-all">
                    New Thread
                  </button>
                </div>
              </div>
            </div>

            {/* Threads List */}
            <div className="space-y-4">
              {filteredThreads.map((thread) => (
                <div key={thread.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    {/* Author Avatar */}
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${thread.avatarColor} flex items-center justify-center text-white font-semibold text-sm flex-shrink-0`}>
                      {thread.avatar}
                    </div>

                    {/* Thread Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            {thread.isPinned && (
                              <Pin className="w-4 h-4 text-indigo-500" />
                            )}
                            <h3 className="text-lg font-semibold text-slate-800 hover:text-indigo-600 transition-colors cursor-pointer">
                              {thread.title}
                            </h3>
                          </div>

                          <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                            <span>by {thread.author}</span>
                            <span>in {thread.forum}</span>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{thread.lastReply}</span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-3">
                            {thread.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Thread Stats */}
                        <div className="flex items-center gap-6 text-sm text-slate-500">
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>{thread.replies}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{thread.views}</span>
                          </div>
                          <div className="text-right">
                            <p className="text-xs">Last reply by</p>
                            <p className="font-medium text-slate-700">{thread.lastReplyBy}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <button className="px-6 py-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-all">
                Load More Discussions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}