import React, { useState } from 'react';
import { 
  X, 
  Moon, 
  Bell, 
  Shield, 
  Volume2, 
  Eye, 
  Save, 
  Check,
  Smartphone
} from 'lucide-react';

export default function Settings({ onClose }) {
  // Settings State
  const [notifications, setNotifications] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [readReceipts, setReadReceipts] = useState(true);
  const [activeStatus, setActiveStatus] = useState(true);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-xl max-h-[85vh] flex flex-col rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl text-white overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b  border-zinc-800 shrink-0">
          <div className="flex items-center p-4 gap-3">
            <div className="p-2.5 bg-amber-500/10 text-amber-800 rounded-xl  border-amber-500/20">
              <Moon className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-amber-800 tracking-wide">Settings</h2>
              <p className="text-xs text-zinc-700">Customize your chat preferences</p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 rounded-full text-zinc-700 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Settings Options */}
        <div className="p-8 space-y-5  text-sm text-zinc-300">
          
          {/* Section: Notifications */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 mb-3 flex items-center gap-2">
              <Bell className="w-3.5 h-3.5 text-blue-900" /> Notifications & Sound
            </h3>
            <div className="space-y-3 bg-zinc-800/40 p-4 rounded-xl border border-zinc-800">
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-white text-xs">Desktop Notifications</p>
                  <p className="text-xs text-zinc-700 mt-0.5">Show popups for new incoming messages</p>
                </div>
                <button
                  onClick={() => setNotifications(!notifications)}
                  className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ${
                    notifications ? 'bg-blue-900 justify-end' : 'bg-zinc-700 justify-start'
                  }`}
                >
                  <span className="w-4 h-4 rounded-full bg-white shadow-md transform transition-transform" />
                </button>
              </div>

              <div className="border-t border-zinc-800/60 pt-3 flex items-center justify-between">
                <div>
                  <p className="font-medium text-white text-xs flex items-center gap-1.5">
                    <Volume2 className="w-3.5 h-3.5 text-zinc-900" /> Message Sounds
                  </p>
                  <p className="text-xs text-zinc-700 mt-0.5">Play audio chime on new message</p>
                </div>
                <button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ${
                    soundEnabled ? 'bg-blue-900 justify-end' : 'bg-zinc-700 justify-start'
                  }`}
                >
                  <span className="w-4 h-4 rounded-full bg-white shadow-md transform transition-transform" />
                </button>
              </div>

            </div>
          </div>

          {/* Section: Privacy */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 mb-3 flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-emerald-800" /> Privacy & Presence
            </h3>
            <div className="space-y-3 bg-zinc-800/40 p-4 rounded-xl border border-zinc-800">
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-white text-xs flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-zinc-900" /> Read Receipts
                  </p>
                  <p className="text-xs text-zinc-700 mt-0.5">Let contacts see when you've viewed messages</p>
                </div>
                <button
                  onClick={() => setReadReceipts(!readReceipts)}
                  className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ${
                    readReceipts ? 'bg-emerald-900 justify-end' : 'bg-zinc-700 justify-start'
                  }`}
                >
                  <span className="w-4 h-4 rounded-full bg-white shadow-md transform transition-transform" />
                </button>
              </div>

              <div className="border-t border-zinc-800/60 pt-3 flex items-center justify-between">
                <div>
                  <p className="font-medium text-white text-xs">Active Status</p>
                  <p className="text-xs text-zinc-700 mt-0.5">Display green online badge next to your avatar</p>
                </div>
                <button
                  onClick={() => setActiveStatus(!activeStatus)}
                  className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ${
                    activeStatus ? 'bg-emerald-900 justify-end' : 'bg-zinc-700 justify-start'
                  }`}
                >
                  <span className="w-4 h-4 rounded-full bg-white shadow-md transform transition-transform" />
                </button>
              </div>

            </div>
          </div>

          {/* Section: Session Info */}
          <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Smartphone className="w-5 h-5 text-zinc-100" />
              <div>
                <p className="text-xs font-semibold text-white">Current Session</p>
                <p className="text-xs text-zinc-800">Chrome on Windows • Active Now</p>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border-emerald-900/90 text-[11px] font-medium">
              Secure
            </span>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-zinc-800 bg-zinc-900/90 flex justify-between items-center shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 text-zinc-400 hover:text-white text-xs font-medium transition-colors"
          >
            Cancel
          </button>
          
          <button
            onClick={handleSave}
            className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs rounded-xl transition-all flex items-center gap-2 shadow-md"
          >
            {isSaved ? (
              <>
                <Check className="w-4 h-4" />
                Saved!
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                Save Changes
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}