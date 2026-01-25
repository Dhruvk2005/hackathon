import { Shield, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-20">
      <div className="w-full px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-indigo-600" />
              <span className="text-lg font-semibold text-slate-800">SafeSpace</span>
            </div>
            <p className="text-sm text-slate-600">
              A privacy-first social network built for meaningful connections.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-800 mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-800 mb-3">Community</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Guidelines</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-800 mb-3">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Safety Center</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">API Docs</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200 flex items-center justify-between text-sm text-slate-600">
          <p>© 2026 SafeSpace. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-red-500 fill-current" /> and respect for privacy
          </p>
        </div>
      </div>
    </footer>
  );
}
