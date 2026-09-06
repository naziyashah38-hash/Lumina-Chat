import React, { useState } from 'react';
import { 
  X, 
  User, 
  Camera, 
  Save, 
  Check, 
  FileText, 
  AtSign, 
  Smile, 
  Sparkles 
} from 'lucide-react';

export default function Profile({ user, setUser, onClose }) {
  // Profile Form States
  const [displayName, setDisplayName] = useState(user?.name || user?.username || 'Alex Vance');
  const [username, setUsername] = useState(user?.username || 'alex_vance');
  const [bio, setBio] = useState(user?.bio || 'Full-stack developer building real-time web applications. Big fan of React & Tailwind CSS!');
  const [statusMessage, setStatusMessage] = useState(user?.status || '🚀 Coding away...');
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveProfile = (e) => {
    e.preventDefault();
    
    // Update active user object
    if (setUser) {
      setUser((prev) => ({
        ...prev,
        name: displayName,
        username: username,
        bio: bio,
        status: statusMessage,
      }));
    }

    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-lg max-h-[85vh] flex flex-col rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl text-white overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6.5 border-b border-zinc-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-blue-500/10 text-blue-900 rounded-xl  border-blue-500/70">
              <User className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-black tracking-wide">User Profile</h2>
              <p className="text-xs text-zinc-700">Manage your personal details & bio</p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 rounded-full text-zinc-700 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSaveProfile} className="p-8 space-y-5  text-sm text-zinc-300">
          
          {/* Avatar Section */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-800/40  border-zinc-800">
            <div className="relative group cursor-pointer">
              
            </div>
            <div className='ml-35 flex gap-2'>
              <h4 className='text-blue-200'><b>Hello</b></h4>
              <h4 className="font-semibold text-black text-sm"><i>{displayName}</i></h4>
              
            </div>
          </div>

          {/* Display Name */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
              Display Name
            </label>
            <div className="relative">
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Enter display name"
                className="w-full bg-zinc-600/80 border border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 outline-none focus:border-blue-500 transition-colors pl-9"
              />
              <User className="w-4 h-4 text-zinc-900 absolute left-3 top-3" />
            </div>
          </div>

          {/* Username */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
              Username
            </label>
            <div className="relative">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username"
                className="w-full bg-zinc-600/80 border border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 outline-none focus:border-blue-500 transition-colors pl-9"
              />
              <AtSign className="w-4 h-4 text-zinc-900 absolute left-3 top-3" />
            </div>
          </div>

          {/* Custom Status */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
              Status Message
            </label>
            <div className="relative">
              <input
                type="text"
                value={statusMessage}
                onChange={(e) => setStatusMessage(e.target.value)}
                placeholder="What's on your mind?"
                className="w-full bg-zinc-600/80 border border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 outline-none focus:border-blue-500 transition-colors pl-9"
              />
              <Smile className="w-4 h-4 text-zinc-900 absolute left-3 top-3" />
            </div>
          </div>

          {/* Bio Area */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5 flex items-center justify-between">
              <span>Bio</span>
              <span className="text-[10px] text-zinc-500">{bio.length}/150</span>
            </label>
            <div className="relative">
              <textarea
                rows={3}
                maxLength={150}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Write a short bio about yourself..."
                className="w-full bg-zinc-600/80 border border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 outline-none focus:border-blue-500 transition-colors resize-none pl-9"
              />
              <FileText className="w-4 h-4 text-zinc-900 absolute left-3 top-3" />
            </div>
          </div>

          {/* Save Action Footer */}
          <div className="pt-3 border-t border-zinc-800 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-zinc-700 hover:text-zinc-900 text-xs font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 bg-blue-500 hover:bg-blue-900 text-white font-semibold text-xs rounded-xl transition-all flex items-center gap-2 shadow-md"
            >
              {isSaved ? (
                <>
                  <Check className="w-4 h-4" />
                  Saved!
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Save Profile
                </>
              )}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}