import { useState } from 'react';
import { Trophy, Star, Target, Zap, Award, TrendingUp, Users, Calendar, Gift, Flame, Crown, Medal, Shield, MessageSquare, Video } from 'lucide-react';

export function GamificationPage() {
  const [selectedTab, setSelectedTab] = useState<'achievements' | 'leaderboard' | 'challenges'>('achievements');

  const achievements = [
    {
      id: 1,
      title: 'First Steps',
      description: 'Complete your privacy setup',
      icon: Shield,
      progress: 100,
      earned: true,
      points: 100,
      rarity: 'Common',
      earnedDate: '2024-01-15'
    },
    {
      id: 2,
      title: 'Community Builder',
      description: 'Join 5 communities',
      icon: Users,
      progress: 100,
      earned: true,
      points: 250,
      rarity: 'Uncommon',
      earnedDate: '2024-01-18'
    },
    {
      id: 3,
      title: 'Privacy Champion',
      description: 'Help 10 users with privacy questions',
      icon: Crown,
      progress: 70,
      earned: false,
      points: 500,
      rarity: 'Rare',
      earnedDate: null
    },
    {
      id: 4,
      title: 'Content Creator',
      description: 'Create 25 posts in communities',
      icon: Zap,
      progress: 45,
      earned: false,
      points: 300,
      rarity: 'Uncommon',
      earnedDate: null
    },
    {
      id: 5,
      title: 'Forum Master',
      description: 'Start 10 forum discussions',
      icon: MessageSquare,
      progress: 20,
      earned: false,
      points: 400,
      rarity: 'Rare',
      earnedDate: null
    },
    {
      id: 6,
      title: 'Video Call Veteran',
      description: 'Participate in 50 video calls',
      icon: Video,
      progress: 85,
      earned: false,
      points: 600,
      rarity: 'Epic',
      earnedDate: null
    }
  ];

  const leaderboard = [
    {
      rank: 1,
      name: 'Sarah Chen',
      avatar: 'SC',
      avatarColor: 'from-pink-500 to-rose-500',
      points: 2840,
      level: 15,
      badges: 12,
      change: '+120'
    },
    {
      rank: 2,
      name: 'Marcus Johnson',
      avatar: 'MJ',
      avatarColor: 'from-blue-500 to-cyan-500',
      points: 2650,
      level: 14,
      badges: 11,
      change: '+95'
    },
    {
      rank: 3,
      name: 'Emma Rodriguez',
      avatar: 'ER',
      avatarColor: 'from-purple-500 to-indigo-500',
      points: 2430,
      level: 13,
      badges: 10,
      change: '+85'
    },
    {
      rank: 4,
      name: 'You',
      avatar: 'A',
      avatarColor: 'from-indigo-500 to-purple-500',
      points: 1890,
      level: 11,
      badges: 8,
      change: '+65'
    }
  ];

  const challenges = [
    {
      id: 1,
      title: 'Weekly Engagement',
      description: 'Post in 3 different communities this week',
      progress: 2,
      total: 3,
      reward: 150,
      timeLeft: '4 days',
      type: 'Weekly'
    },
    {
      id: 2,
      title: 'Privacy Advocate',
      description: 'Answer 5 privacy-related questions',
      progress: 3,
      total: 5,
      reward: 200,
      timeLeft: '2 days',
      type: 'Weekly'
    },
    {
      id: 3,
      title: 'Community Helper',
      description: 'Receive 10 helpful votes on your posts',
      progress: 7,
      total: 10,
      reward: 300,
      timeLeft: '1 week',
      type: 'Monthly'
    },
    {
      id: 4,
      title: 'Video Call Master',
      description: 'Host 5 successful video calls',
      progress: 2,
      total: 5,
      reward: 400,
      timeLeft: '2 weeks',
      type: 'Monthly'
    }
  ];

  const userStats = {
    level: 11,
    points: 1890,
    nextLevelPoints: 2000,
    badges: 8,
    streak: 12,
    rank: 4
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'text-slate-600 bg-slate-100';
      case 'Uncommon': return 'text-green-600 bg-green-100';
      case 'Rare': return 'text-blue-600 bg-blue-100';
      case 'Epic': return 'text-purple-600 bg-purple-100';
      case 'Legendary': return 'text-orange-600 bg-orange-100';
      default: return 'text-slate-600 bg-slate-100';
    }
  };

  return (
    <div className="min-h-screen pb-12">
      <div className="w-full px-6 pt-8">
        {/* Header Stats */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-800">Level {userStats.level}</div>
              <div className="text-sm text-slate-600">Privacy Guardian</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-800">{userStats.points.toLocaleString()}</div>
              <div className="text-sm text-slate-600">Points Earned</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-800">{userStats.badges}</div>
              <div className="text-sm text-slate-600">Badges Earned</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Flame className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-800">{userStats.streak}</div>
              <div className="text-sm text-slate-600">Day Streak</div>
            </div>
          </div>

          {/* Progress to next level */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-700">Progress to Level {userStats.level + 1}</span>
              <span className="text-sm text-slate-600">{userStats.points}/{userStats.nextLevelPoints} points</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((userStats.points / userStats.nextLevelPoints) * 100)}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 bg-slate-100 p-1 rounded-lg">
          {[
            { id: 'achievements', label: 'Achievements', icon: Trophy },
            { id: 'leaderboard', label: 'Leaderboard', icon: TrendingUp },
            { id: 'challenges', label: 'Challenges', icon: Target }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id as any)}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                selectedTab === tab.id
                  ? 'bg-white text-indigo-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {selectedTab === 'achievements' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement) => (
              <div key={achievement.id} className={`p-6 rounded-xl border transition-all ${
                achievement.earned
                  ? 'bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200'
                  : 'bg-white border-slate-200'
              }`}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    achievement.earned
                      ? 'bg-gradient-to-br from-indigo-500 to-purple-500'
                      : 'bg-slate-200'
                  }`}>
                    <achievement.icon className={`w-6 h-6 ${
                      achievement.earned ? 'text-white' : 'text-slate-400'
                    }`} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className={`font-semibold ${achievement.earned ? 'text-slate-800' : 'text-slate-600'}`}>
                        {achievement.title}
                      </h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${getRarityColor(achievement.rarity)}`}>
                        {achievement.rarity}
                      </span>
                    </div>

                    <p className={`text-sm mb-3 ${achievement.earned ? 'text-slate-600' : 'text-slate-500'}`}>
                      {achievement.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-medium text-slate-700">{achievement.points} points</span>
                      </div>

                      {achievement.earned ? (
                        <div className="text-xs text-green-600 font-medium">
                          ✓ Earned {new Date(achievement.earnedDate!).toLocaleDateString()}
                        </div>
                      ) : (
                        <div className="text-xs text-slate-500">
                          {achievement.progress}% complete
                        </div>
                      )}
                    </div>

                    {!achievement.earned && (
                      <div className="mt-3">
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${achievement.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedTab === 'leaderboard' && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <h2 className="text-xl font-semibold text-slate-800">Community Leaderboard</h2>
              <p className="text-slate-600">Top privacy advocates this month</p>
            </div>

            <div className="divide-y divide-slate-200">
              {leaderboard.map((user, index) => (
                <div key={user.rank} className={`p-6 flex items-center gap-4 ${
                  user.name === 'You' ? 'bg-indigo-50' : ''
                }`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      user.rank === 1 ? 'bg-yellow-500 text-white' :
                      user.rank === 2 ? 'bg-slate-400 text-white' :
                      user.rank === 3 ? 'bg-orange-600 text-white' :
                      'bg-slate-200 text-slate-600'
                    }`}>
                      {user.rank}
                    </div>

                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${user.avatarColor} flex items-center justify-center text-white font-semibold`}>
                      {user.avatar}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className={`font-semibold ${user.name === 'You' ? 'text-indigo-700' : 'text-slate-800'}`}>
                        {user.name}
                      </h3>
                      {user.name === 'You' && (
                        <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">You</span>
                      )}
                    </div>
                    <p className="text-sm text-slate-600">Level {user.level} • {user.badges} badges</p>
                  </div>

                  <div className="text-right">
                    <div className="text-lg font-bold text-slate-800">{user.points.toLocaleString()}</div>
                    <div className={`text-sm ${user.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {user.change} this week
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedTab === 'challenges' && (
          <div className="space-y-6">
            {challenges.map((challenge) => (
              <div key={challenge.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-slate-800">{challenge.title}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        challenge.type === 'Weekly' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                      }`}>
                        {challenge.type}
                      </span>
                    </div>
                    <p className="text-slate-600">{challenge.description}</p>
                  </div>

                  <div className="text-right">
                    <div className="text-2xl font-bold text-indigo-600">{challenge.reward}</div>
                    <div className="text-sm text-slate-500">points</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700">
                      Progress: {challenge.progress}/{challenge.total}
                    </span>
                    <span className="text-sm text-slate-500">{challenge.timeLeft} left</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${(challenge.progress / challenge.total) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-600">
                      {challenge.total - challenge.progress} more to go
                    </span>
                  </div>

                  <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-all text-sm">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}