import { useState } from 'react';
import { Video, Mic, MicOff, Camera, CameraOff, Phone, PhoneOff, Users, MessageSquare, Settings, Share } from 'lucide-react';

export function VideoCallsPage() {
  const [isInCall, setIsInCall] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [selectedCall, setSelectedCall] = useState<number | null>(null);

  const upcomingCalls = [
    {
      id: 1,
      title: 'Privacy Tech Discussion',
      participants: ['Sarah Chen', 'Marcus Johnson', 'Emma Rodriguez'],
      time: 'Today, 3:00 PM',
      duration: '1 hour',
      type: 'Group Call'
    },
    {
      id: 2,
      title: 'Design Review',
      participants: ['Emma Rodriguez'],
      time: 'Tomorrow, 10:00 AM',
      duration: '30 min',
      type: '1-on-1 Call'
    }
  ];

  const callHistory = [
    {
      id: 3,
      title: 'AI Ethics Roundtable',
      participants: ['Sarah Chen', 'Marcus Johnson', 'Emma Rodriguez', 'Alex Kim'],
      time: 'Yesterday, 2:00 PM',
      duration: '45 min',
      type: 'Group Call'
    },
    {
      id: 4,
      title: 'Code Review Session',
      participants: ['Marcus Johnson'],
      time: '2 days ago, 4:30 PM',
      duration: '25 min',
      type: '1-on-1 Call'
    }
  ];

  const startCall = (callId: number) => {
    setSelectedCall(callId);
    setIsInCall(true);
  };

  const endCall = () => {
    setIsInCall(false);
    setSelectedCall(null);
  };

  if (isInCall) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col">
        {/* Call Header */}
        <div className="p-4 bg-slate-800 border-b border-slate-700">
          <div className="flex items-center justify-between text-white">
            <div>
              <h2 className="text-lg font-semibold">Privacy Tech Discussion</h2>
              <p className="text-slate-300">4 participants • 12:34</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-all">
                <MessageSquare className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-all">
                <Share className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-all">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="flex-1 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
            {/* Main Video */}
            <div className="bg-slate-800 rounded-lg overflow-hidden relative">
              <div className="aspect-video bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 rounded-full bg-slate-700 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10" />
                  </div>
                  <p className="text-lg font-medium">Group Call</p>
                  <p className="text-sm text-slate-300">4 participants</p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-medium">You</p>
                <p className="text-sm text-slate-300">Host</p>
              </div>
            </div>

            {/* Participant Videos */}
            <div className="space-y-4">
              <div className="bg-slate-800 rounded-lg overflow-hidden relative aspect-video">
                <div className="w-full h-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center mx-auto mb-2">
                      SC
                    </div>
                    <p className="text-sm font-medium">Sarah Chen</p>
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 text-white">
                  <p className="text-xs">Sarah Chen</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="bg-slate-800 rounded-lg overflow-hidden relative aspect-square">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center mx-auto mb-1">
                        MJ
                      </div>
                      <p className="text-xs font-medium">Marcus</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800 rounded-lg overflow-hidden relative aspect-square">
                  <div className="w-full h-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center mx-auto mb-1">
                        ER
                      </div>
                      <p className="text-xs font-medium">Emma</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call Controls */}
        <div className="p-6 bg-slate-800 border-t border-slate-700">
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className={`p-4 rounded-full transition-all ${
                isMuted
                  ? 'bg-red-500 hover:bg-red-600'
                  : 'bg-slate-700 hover:bg-slate-600'
              }`}
            >
              {isMuted ? <MicOff className="w-6 h-6 text-white" /> : <Mic className="w-6 h-6 text-white" />}
            </button>

            <button
              onClick={() => setIsVideoOff(!isVideoOff)}
              className={`p-4 rounded-full transition-all ${
                isVideoOff
                  ? 'bg-red-500 hover:bg-red-600'
                  : 'bg-slate-700 hover:bg-slate-600'
              }`}
            >
              {isVideoOff ? <CameraOff className="w-6 h-6 text-white" /> : <Camera className="w-6 h-6 text-white" />}
            </button>

            <button
              onClick={endCall}
              className="p-4 bg-red-500 hover:bg-red-600 rounded-full transition-all"
            >
              <PhoneOff className="w-6 h-6 text-white" />
            </button>

            <button className="p-4 bg-slate-700 hover:bg-slate-600 rounded-full transition-all">
              <MessageSquare className="w-6 h-6 text-white" />
            </button>

            <button className="p-4 bg-slate-700 hover:bg-slate-600 rounded-full transition-all">
              <Users className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-12">
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Video Calls</h1>
          <p className="text-slate-600">Connect securely with privacy-first video calling</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Calls */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-slate-800">Upcoming Calls</h2>
              <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-all">
                Schedule Call
              </button>
            </div>

            <div className="space-y-4">
              {upcomingCalls.map((call) => (
                <div key={call.id} className="p-4 border border-slate-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium text-slate-800">{call.title}</h3>
                    <span className="text-sm text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
                      {call.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                    <span>🕒 {call.time}</span>
                    <span>⏱️ {call.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {call.participants.slice(0, 3).map((participant, index) => (
                        <div
                          key={index}
                          className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-medium border-2 border-white"
                        >
                          {participant.split(' ').map(n => n[0]).join('')}
                        </div>
                      ))}
                      {call.participants.length > 3 && (
                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 text-xs font-medium border-2 border-white">
                          +{call.participants.length - 3}
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => startCall(call.id)}
                      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all flex items-center gap-2"
                    >
                      <Video className="w-4 h-4" />
                      Join Call
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call History */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-6">Call History</h2>

            <div className="space-y-4">
              {callHistory.map((call) => (
                <div key={call.id} className="p-4 border border-slate-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium text-slate-800">{call.title}</h3>
                    <span className="text-sm text-slate-500">{call.time}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                    <span>{call.type}</span>
                    <span>⏱️ {call.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-600">
                      {call.participants.length} participants
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-all text-left">
              <Video className="w-8 h-8 text-indigo-500 mb-2" />
              <h3 className="font-medium text-slate-800">Start Instant Call</h3>
              <p className="text-sm text-slate-600">Call someone immediately</p>
            </button>

            <button className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-all text-left">
              <Users className="w-8 h-8 text-teal-500 mb-2" />
              <h3 className="font-medium text-slate-800">Create Group Call</h3>
              <p className="text-sm text-slate-600">Invite multiple participants</p>
            </button>

            <button className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-all text-left">
              <Settings className="w-8 h-8 text-slate-500 mb-2" />
              <h3 className="font-medium text-slate-800">Call Settings</h3>
              <p className="text-sm text-slate-600">Configure video preferences</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}