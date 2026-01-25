import { useState } from 'react';
import { ShieldCheck, AlertTriangle, Eye, Ban, CheckCircle, XCircle, Flag, MessageSquare, Users, TrendingUp, Search, Filter, MoreHorizontal } from 'lucide-react';

export function ModerationPage() {
  const [selectedTab, setSelectedTab] = useState<'reports' | 'moderation' | 'analytics'>('reports');

  const reports = [
    {
      id: 1,
      type: 'Post',
      content: 'This post contains inappropriate content and violates community guidelines.',
      reportedBy: 'Sarah Chen',
      reportedUser: 'Anonymous User',
      reason: 'Harassment',
      severity: 'High',
      status: 'Pending',
      timestamp: '2 hours ago',
      community: 'General Discussion'
    },
    {
      id: 2,
      type: 'Comment',
      content: 'Spam comment with malicious links',
      reportedBy: 'Marcus Johnson',
      reportedUser: 'Spam Account',
      reason: 'Spam',
      severity: 'Medium',
      status: 'Under Review',
      timestamp: '4 hours ago',
      community: 'Development'
    },
    {
      id: 3,
      type: 'User',
      content: 'User has been posting offensive content repeatedly',
      reportedBy: 'Emma Rodriguez',
      reportedUser: 'Offensive User',
      reason: 'Hate Speech',
      severity: 'Critical',
      status: 'Action Taken',
      timestamp: '1 day ago',
      community: 'Privacy & Security'
    }
  ];

  const moderationQueue = [
    {
      id: 1,
      type: 'Post',
      title: 'New user introduction post',
      author: 'New Member',
      content: 'Hello everyone! I\'m new to privacy-focused development...',
      flaggedReason: 'New user - requires manual review',
      aiConfidence: 85,
      timestamp: '30 minutes ago'
    },
    {
      id: 2,
      type: 'Comment',
      title: 'Reply to privacy discussion',
      author: 'Tech Enthusiast',
      content: 'I think we should consider implementing zero-knowledge proofs...',
      flaggedReason: 'Technical discussion - potential misinformation',
      aiConfidence: 65,
      timestamp: '1 hour ago'
    }
  ];

  const analytics = {
    totalReports: 147,
    resolvedReports: 89,
    pendingReports: 23,
    underReview: 35,
    automatedActions: 234,
    manualReviews: 156,
    communityHealth: 92,
    falsePositives: 8
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'text-red-600 bg-red-100';
      case 'High': return 'text-orange-600 bg-orange-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Low': return 'text-green-600 bg-green-100';
      default: return 'text-slate-600 bg-slate-100';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Action Taken': return 'text-green-600 bg-green-100';
      case 'Under Review': return 'text-blue-600 bg-blue-100';
      case 'Pending': return 'text-orange-600 bg-orange-100';
      case 'Dismissed': return 'text-slate-600 bg-slate-100';
      default: return 'text-slate-600 bg-slate-100';
    }
  };

  return (
    <div className="min-h-screen pb-12">
      <div className="w-full px-6 pt-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Content Moderation</h1>
          <p className="text-slate-600">Automated abuse detection and community safety tools</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-800">{analytics.pendingReports}</p>
                <p className="text-sm text-slate-600">Pending Reports</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-800">{analytics.automatedActions}</p>
                <p className="text-sm text-slate-600">Auto Moderated</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-800">{analytics.communityHealth}%</p>
                <p className="text-sm text-slate-600">Community Health</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-800">{analytics.manualReviews}</p>
                <p className="text-sm text-slate-600">Manual Reviews</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 bg-slate-100 p-1 rounded-lg">
          {[
            { id: 'reports', label: 'Reports', icon: Flag },
            { id: 'moderation', label: 'Moderation Queue', icon: ShieldCheck },
            { id: 'analytics', label: 'Analytics', icon: TrendingUp }
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
        {selectedTab === 'reports' && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-slate-800">Content Reports</h2>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search reports..."
                      className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <button className="px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-all flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    Filter
                  </button>
                </div>
              </div>
            </div>

            <div className="divide-y divide-slate-200">
              {reports.map((report) => (
                <div key={report.id} className="p-6 hover:bg-slate-50 transition-all">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                          {report.type}
                        </span>
                        <span className={`px-2 py-1 text-xs rounded-full ${getSeverityColor(report.severity)}`}>
                          {report.severity}
                        </span>
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(report.status)}`}>
                          {report.status}
                        </span>
                      </div>

                      <h3 className="font-medium text-slate-800 mb-2">{report.content}</h3>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-slate-600 mb-3">
                        <div>
                          <span className="font-medium">Reported by:</span>
                          <p>{report.reportedBy}</p>
                        </div>
                        <div>
                          <span className="font-medium">Reported user:</span>
                          <p>{report.reportedUser}</p>
                        </div>
                        <div>
                          <span className="font-medium">Reason:</span>
                          <p>{report.reason}</p>
                        </div>
                        <div>
                          <span className="font-medium">Community:</span>
                          <p>{report.community}</p>
                        </div>
                      </div>

                      <p className="text-xs text-slate-500">{report.timestamp}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-all">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg text-green-600 hover:bg-green-100 transition-all">
                        <CheckCircle className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg text-red-600 hover:bg-red-100 transition-all">
                        <Ban className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-all">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedTab === 'moderation' && (
          <div className="space-y-6">
            {moderationQueue.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                        {item.type}
                      </span>
                      <h3 className="font-medium text-slate-800">{item.title}</h3>
                    </div>

                    <p className="text-sm text-slate-600 mb-2">by {item.author} • {item.timestamp}</p>

                    <div className="bg-slate-50 rounded-lg p-3 mb-3">
                      <p className="text-sm text-slate-700">{item.content}</p>
                    </div>

                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <AlertTriangle className="w-4 h-4 text-orange-500" />
                        <span className="text-slate-600">{item.flaggedReason}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ShieldCheck className="w-4 h-4 text-blue-500" />
                        <span className="text-slate-600">AI Confidence: {item.aiConfidence}%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all text-sm">
                      Approve
                    </button>
                    <button className="px-4 py-2 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-all text-sm">
                      Reject
                    </button>
                    <button className="px-4 py-2 border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 transition-all text-sm">
                      Edit
                    </button>
                  </div>

                  <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-all text-sm">
                    Review Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedTab === 'analytics' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Moderation Metrics */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-6">Moderation Metrics</h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Total Reports</span>
                  <span className="font-semibold text-slate-800">{analytics.totalReports}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Resolved Reports</span>
                  <span className="font-semibold text-green-600">{analytics.resolvedReports}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Automated Actions</span>
                  <span className="font-semibold text-blue-600">{analytics.automatedActions}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Manual Reviews</span>
                  <span className="font-semibold text-purple-600">{analytics.manualReviews}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">False Positives</span>
                  <span className="font-semibold text-orange-600">{analytics.falsePositives}%</span>
                </div>
              </div>
            </div>

            {/* Community Health */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-6">Community Health</h2>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700">Overall Health Score</span>
                    <span className="text-sm font-semibold text-green-600">{analytics.communityHealth}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full"
                      style={{ width: `${analytics.communityHealth}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-indigo-600">98%</div>
                    <div className="text-sm text-slate-600">User Satisfaction</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-teal-600">95%</div>
                    <div className="text-sm text-slate-600">Content Quality</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 lg:col-span-2">
              <h2 className="text-xl font-semibold text-slate-800 mb-6">Recent Moderation Activity</h2>

              <div className="space-y-4">
                {[
                  { action: 'Auto-flagged spam content', time: '5 minutes ago', type: 'Automated' },
                  { action: 'Manual review: Approved user post', time: '12 minutes ago', type: 'Manual' },
                  { action: 'Blocked user for repeated violations', time: '1 hour ago', type: 'Action' },
                  { action: 'False positive corrected', time: '2 hours ago', type: 'Correction' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.type === 'Automated' ? 'bg-blue-500' :
                      activity.type === 'Manual' ? 'bg-green-500' :
                      activity.type === 'Action' ? 'bg-red-500' : 'bg-orange-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-800">{activity.action}</p>
                      <p className="text-xs text-slate-500">{activity.time}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      activity.type === 'Automated' ? 'bg-blue-100 text-blue-700' :
                      activity.type === 'Manual' ? 'bg-green-100 text-green-700' :
                      activity.type === 'Action' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {activity.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}