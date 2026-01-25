import {
  Shield,
  Home,
  Users,
  User,
  Bell,
  MessageCircle,
  Video,
  MessageSquare,
  Trophy,
  ShieldCheck,
  LogOut,
} from "lucide-react";

interface NavbarProps {
  currentPage: string;
  onNavigate: (
    page:
      | "feed"
      | "communities"
      | "profile"
      | "messages"
      | "video-calls"
      | "forums"
      | "gamification"
      | "moderation"
      | "notifications"
  ) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  return (
    <nav className="fixed left-0 top-0 h-screen w-72 bg-slate-900 text-white z-50 shadow-2xl ">
      
      {/* Header */}
      <div className="p-6 border-b border-slate-700 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-600 rounded-lg">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold">SafeSpace</span>
        </div>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">

        <NavItem
          icon={<Home className="w-5 h-5" />}
          label="Home"
          active={currentPage === "feed"}
          onClick={() => onNavigate("feed")}
        />

        <NavItem
          icon={<Users className="w-5 h-5" />}
          label="Communities"
          active={currentPage === "communities"}
          onClick={() => onNavigate("communities")}
        />

        <NavItem
          icon={<User className="w-5 h-5" />}
          label="Profile"
          active={currentPage === "profile"}
          onClick={() => onNavigate("profile")}
        />

        <NavItem
          icon={<MessageCircle className="w-5 h-5" />}
          label="Messages"
          active={currentPage === "messages"}
          onClick={() => onNavigate("messages")}
        />

        <NavItem
          icon={<Video className="w-5 h-5" />}
          label="Video Calls"
          active={currentPage === "video-calls"}
          onClick={() => onNavigate("video-calls")}
        />

        <NavItem
          icon={<MessageSquare className="w-5 h-5" />}
          label="Forums"
          active={currentPage === "forums"}
          onClick={() => onNavigate("forums")}
        />

        <NavItem
          icon={<Trophy className="w-5 h-5" />}
          label="Achievements"
          active={currentPage === "gamification"}
          onClick={() => onNavigate("gamification")}
        />

        <NavItem
          icon={<ShieldCheck className="w-5 h-5" />}
          label="Moderation"
          active={currentPage === "moderation"}
          onClick={() => onNavigate("moderation")}
        />

        <NavItem
          icon={<Bell className="w-5 h-5" />}
          label="Notifications"
          active={currentPage === "notifications"}
          onClick={() => onNavigate("notifications")}
        />
      </div>

      {/* Bottom Section */}
      <div className="border-t border-slate-700 p-4 space-y-4 flex-shrink-0">

        {/* Avatar */}
        <div className="flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">
            A
          </div>
        </div>

        {/* Logout */}
        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 transition-all">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </nav>
  );
}

/* Reusable Nav Item Component */
function NavItem({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all ${
        active
          ? "bg-indigo-600 text-white"
          : "text-slate-300 hover:bg-slate-800"
      }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  );
}
