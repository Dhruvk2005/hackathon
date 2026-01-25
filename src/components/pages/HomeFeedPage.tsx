import { useState } from 'react';
import { Image, Smile, Calendar, Info, Heart, MessageCircle, Share2, MoreHorizontal, Sparkles } from 'lucide-react';

export function HomeFeedPage() {
  const [postText, setPostText] = useState('');

  const posts = [
    {
      id: 1,
      author: 'Sarah Chen',
      username: '@sarah_dev',
      avatar: 'SC',
      avatarColor: 'from-pink-500 to-rose-500',
      time: '2h ago',
      content: 'Just launched my first privacy-first web app! Building with ethics in mind makes the process so much more meaningful. 🚀',
      tags: ['Dev', 'Privacy'],
      likes: 234,
      comments: 18,
      shares: 12,
      reason: 'Based on your interest in Development and Privacy topics'
    },
    {
      id: 2,
      author: 'Marcus Johnson',
      username: '@marcus_ai',
      avatar: 'MJ',
      avatarColor: 'from-blue-500 to-cyan-500',
      time: '4h ago',
      content: 'Hot take: AI models should always explain their reasoning. Transparency isn\'t just nice to have—it\'s essential for trust.',
      tags: ['AI', 'Ethics'],
      likes: 456,
      comments: 89,
      shares: 34,
      reason: 'Popular in AI Enthusiasts community you follow'
    },
    {
      id: 3,
      author: 'Emma Rodriguez',
      username: '@emma_design',
      avatar: 'ER',
      avatarColor: 'from-purple-500 to-indigo-500',
      time: '6h ago',
      content: 'New design system is live! Created with accessibility and user agency at the core. Would love your feedback.',
      tags: ['Design', 'UX'],
      likes: 189,
      comments: 23,
      shares: 8,
      reason: 'Based on your interest in Design topics'
    }
  ];

  return (
    <div className="min-h-screen pb-12">
      <div className="w-full px-6 pt-8">
        {/* Post Creation */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 mb-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold flex-shrink-0">
              A
            </div>
            <div className="flex-1">
              <textarea
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                placeholder="Share something meaningful..."
                className="w-full resize-none outline-none text-slate-700 placeholder-slate-400 mb-4 min-h-[80px]"
              />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-all">
                    <Image className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-all">
                    <Smile className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-all">
                    <Calendar className="w-5 h-5" />
                  </button>
                </div>
                <button 
                  disabled={!postText.trim()}
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Feed Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Your Feed</h2>
          <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-lg border border-indigo-100">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="text-sm text-indigo-700 font-medium">AI Personalized</span>
          </div>
        </div>

        {/* Feed Posts */}
        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 hover:shadow-lg transition-all">
              {/* Post Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${post.avatarColor} flex items-center justify-center text-white font-semibold`}>
                    {post.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{post.author}</h3>
                    <p className="text-sm text-slate-500">{post.username} · {post.time}</p>
                  </div>
                </div>
                <button className="p-2 rounded-lg text-slate-400 hover:bg-slate-100 transition-all">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>

              {/* Post Content */}
              <p className="text-slate-700 mb-4 leading-relaxed">{post.content}</p>

              {/* Interest Tags */}
              <div className="flex items-center gap-2 mb-4">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Transparency Card */}
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-3 mb-4 border border-cyan-100">
                <button className="flex items-center gap-2 text-sm text-slate-700 hover:text-indigo-600 transition-colors w-full">
                  <Info className="w-4 h-4 text-cyan-600" />
                  <span className="font-medium">Why am I seeing this post?</span>
                </button>
                <p className="text-xs text-slate-600 mt-1 ml-6">{post.reason}</p>
              </div>

              {/* Post Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-600 hover:bg-rose-50 hover:text-rose-600 transition-all group">
                  <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-all group">
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{post.comments}</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-600 hover:bg-cyan-50 hover:text-cyan-600 transition-all group">
                  <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{post.shares}</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <button className="px-6 py-3 bg-white border-2 border-slate-200 text-slate-700 rounded-xl hover:border-indigo-300 hover:bg-indigo-50 transition-all font-medium">
            Load More Posts
          </button>
        </div>
      </div>
    </div>
  );
}
