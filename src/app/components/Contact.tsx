import { Mail, MapPin, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-8 py-32">
      <div className="max-w-4xl w-full">
        <h2 className="text-5xl font-bold text-white mb-12">Contact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="p-6 bg-white/5 border border-white/10 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <a 
                    href="mailto:abhinav.raghuvanshi2.ar@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors break-all"
                  >
                    abhinav.raghuvanshi2.ar@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-green-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <p className="text-gray-400">
                    Hostel 17, IIT Bombay<br />
                    Powai, Mumbai 400076<br />
                    Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-6 bg-white/5 border border-white/10 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Name</label>
                <input 
                  type="text"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input 
                  type="email"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button 
                type="submit"
                className="w-full px-6 py-3 bg-white text-black rounded-md font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-12 border-t border-white/10">
          <p className="text-gray-500 text-sm">
            © 2026 Abhinav Raghuvanshi. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
