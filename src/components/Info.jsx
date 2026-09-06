import React , { useState }from 'react';
import { 
 Info as InfoIcon, 
  X, 
  CheckCircle, 
  Shield, 
  Sparkles, 
  Code2, 
  Zap, 
  Lock, 
  Globe,
  Send,
  MessageSquare,
  Check
} from 'lucide-react';

export default function Info({ onClose }) {
  const [feedback, setFeedback] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (!feedback.trim()) return;

    // Handle feedback submission logic here
    console.log("Feedback submitted:", feedback);
    
    setIsSubmitted(true);
    setFeedback('');

    // Reset status message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-xl max-h-[85vh] flex flex-col rounded-2xl p-8 bg-zinc-900 border border-zinc-800 shadow-2xl text-white overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-blue-500/10 text-blue-400 rounded-xl border-blue-500/20">
              <InfoIcon className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-blue-400 tracking-wide">Application Overview</h2>
              <p className="text-xs text-zinc-700">Version 1.2.0 • Build 2026.09</p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 space-y-7  overflow-y-auto scrollbar-none text-sm text-zinc-300">
          
          {/* About Paragraph */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider mt-2 text-zinc-900 mb-2"> <b>About</b></h3>
            <p className="leading-relaxed text-amber-950">
              A modern, responsive messaging platform designed for real-time collaboration. Built with a focus on seamless layout stability, intuitive UI interactions, and sleek sticker/emoji integration.
            </p>
          </div>

          {/* Key Features Section */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider  text-zinc-700 mb-3"><b><i>Key Features</i></b></h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-800/50 border border-zinc-800">
                <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white text-xs">Responsive Flex Layout</p>
                  <p className="text-xs text-black mt-0.5">Optimized container bounds with clean scrollbars across devices.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-800/50 border border-zinc-800">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white text-xs">Sticker Drawer</p>
                  <p className="text-xs text-black mt-0.5">Interactive quick-access stickers & reaction toolbar.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-800/50 border border-zinc-800">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white text-xs">Session Security</p>
                  <p className="text-xs text-black mt-0.5">Protected route authentication & secure user sessions.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-800/50 border border-zinc-800">
                <Zap className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white text-xs">Instant Message Flow</p>
                  <p className="text-xs text-black mt-0.5">Smooth auto-scrolling with proper header stacking context.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Stack Section */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-3"><b><i>Tech Stack</i></b></h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-lg bg-zinc-800 border border-zinc-700 text-xs font-medium text-zinc-200 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-blue-400" /> React 18
              </span>
              <span className="px-3 py-1 rounded-lg bg-zinc-800 border border-zinc-700 text-xs font-medium text-zinc-200 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-cyan-400" /> Tailwind CSS
              </span>
              <span className="px-3 py-1 rounded-lg bg-zinc-800 border border-zinc-700 text-xs font-medium text-zinc-200 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-amber-400" /> Lucide Icons
              </span>
              <span className="px-3 py-1 rounded-lg bg-zinc-800 border border-zinc-700 text-xs font-medium text-zinc-200 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-emerald-400" /> Custom Auth State
              </span>
            </div>
          </div>

          {/* feedback Section */}
         <div className="p-4 rounded-xl bg-zinc-800/40 border border-zinc-800">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 flex text-black items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-blue-900" /> Send Feedback
              </h3>
              {isSubmitted && (
                <span className="text-xs text-emerald-900 font-medium flex items-center gap-1 animate-pulse">
                  <Check className="w-3.5 h-3.5" /> Feedback sent!
                </span>
              )}
            </div>

            <form onSubmit={handleFeedbackSubmit} className="flex gap-2">
              <input
                type="text"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Share your thoughts or suggest a feature..."
                className="flex-1 bg-zinc-900 border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-xs text-black placeholder-zinc-500 outline-none focus:border-blue-500 transition-colors"
              />
              <button
                type="submit"
                disabled={!feedback.trim()}
                className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-medium rounded-xl transition-all flex items-center gap-1.5 shrink-0 shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                Send
              </button>
            </form>
          </div>

          {/* System Info Grid */}
          <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80 grid grid-cols-2 gap-4 text-xs">
            <div>
              <p className="text-zinc-900"> <b>Status</b></p>
              <p className="font-semibold text-emerald-200 flex items-center gap-1 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Connected
              </p>
            </div>
            <div>
              <p className="text-zinc-900"> <b>Environment</b></p>
              <p className="font-medium text-zinc-200 mt-0.5">Development (React)</p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-3 border-t border-zinc-800 bg-zinc-900/90 flex justify-between items-center shrink-0">
          <p className="text-xs text-zinc-200">All rights reserved</p>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm rounded-xl transition-colors shadow-md"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}