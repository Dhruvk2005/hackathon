import { useState } from 'react';
import { MessageCircle, Send, Search, MoreHorizontal, Phone, Video, User } from 'lucide-react';

export function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState<number | null>(1);
  const [messageText, setMessageText] = useState('');

  const chats = [
    {
      id: 1,
      name: 'Sarah Chen',
      avatar: 'SC',
      avatarColor: 'from-pink-500 to-rose-500',
      lastMessage: 'Thanks for the privacy tips! Really helpful.',
      time: '2m ago',
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      avatar: 'MJ',
      avatarColor: 'from-blue-500 to-cyan-500',
      lastMessage: 'The new AI ethics discussion was great',
      time: '1h ago',
      unread: 0,
      online: false
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      avatar: 'ER',
      avatarColor: 'from-purple-500 to-indigo-500',
      lastMessage: 'Let\'s collaborate on that design project',
      time: '3h ago',
      unread: 1,
      online: true
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'Sarah Chen',
      content: 'Hey! I saw your post about privacy-first development. Really interesting approach!',
      time: '10:30 AM',
      isMine: false
    },
    {
      id: 2,
      sender: 'You',
      content: 'Thanks! I\'ve been focusing on ethical data practices lately. What do you think about the current state of web privacy?',
      time: '10:32 AM',
      isMine: true
    },
    {
      id: 3,
      sender: 'Sarah Chen',
      content: 'It\'s concerning. Too many apps collect data without clear consent. Your approach with granular controls is spot on.',
      time: '10:35 AM',
      isMine: false
    },
    {
      id: 4,
      sender: 'Sarah Chen',
      content: 'Thanks for the privacy tips! Really helpful.',
      time: '10:36 AM',
      isMine: false
    }
  ];

  const selectedChatData = chats.find(chat => chat.id === selectedChat);

  return (
    <div className="min-h-screen pb-12">
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 h-[600px]">
            {/* Chat List */}
            <div className="border-r border-slate-200">
              <div className="p-4 border-b border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-slate-800">Messages</h2>
                  <button className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-all">
                    <MessageCircle className="w-5 h-5" />
                  </button>
                </div>
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="overflow-y-auto h-full">
                {chats.map((chat) => (
                  <button
                    key={chat.id}
                    onClick={() => setSelectedChat(chat.id)}
                    className={`w-full p-4 text-left hover:bg-slate-50 transition-all border-b border-slate-100 ${
                      selectedChat === chat.id ? 'bg-indigo-50 border-l-4 border-l-indigo-500' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${chat.avatarColor} flex items-center justify-center text-white font-semibold text-sm`}>
                          {chat.avatar}
                        </div>
                        {chat.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-slate-800 truncate">{chat.name}</p>
                          <span className="text-xs text-slate-500">{chat.time}</span>
                        </div>
                        <p className="text-sm text-slate-600 truncate">{chat.lastMessage}</p>
                      </div>
                      {chat.unread > 0 && (
                        <div className="w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                          {chat.unread}
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="md:col-span-2 flex flex-col">
              {selectedChatData ? (
                <>
                  {/* Chat Header */}
                  <div className="p-4 border-b border-slate-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${selectedChatData.avatarColor} flex items-center justify-center text-white font-semibold`}>
                            {selectedChatData.avatar}
                          </div>
                          {selectedChatData.online && (
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-800">{selectedChatData.name}</h3>
                          <p className="text-sm text-slate-500">
                            {selectedChatData.online ? 'Online' : 'Offline'}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-all">
                          <Phone className="w-5 h-5" />
                        </button>
                        <button className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-all">
                          <Video className="w-5 h-5" />
                        </button>
                        <button className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-all">
                          <MoreHorizontal className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((message) => (
                      <div key={message.id} className={`flex ${message.isMine ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.isMine
                            ? 'bg-indigo-500 text-white'
                            : 'bg-slate-100 text-slate-800'
                        }`}>
                          <p className="text-sm">{message.content}</p>
                          <p className={`text-xs mt-1 ${message.isMine ? 'text-indigo-200' : 'text-slate-500'}`}>
                            {message.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t border-slate-200">
                    <div className="flex items-center gap-3">
                      <input
                        type="text"
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-1 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        onKeyPress={(e) => e.key === 'Enter' && setMessageText('')}
                      />
                      <button
                        onClick={() => setMessageText('')}
                        className="p-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-all"
                      >
                        <Send className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <MessageCircle className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-slate-600 mb-2">Select a conversation</h3>
                    <p className="text-slate-500">Choose a chat from the list to start messaging</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}