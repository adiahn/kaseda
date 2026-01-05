import { ArrowRight, FileText, PhoneCall, Zap } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
            Take Action Today
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">Ready to Grow Your Business?</h2>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Join thousands of entrepreneurs who have transformed their ventures with KASEDA's comprehensive support programs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all border border-white/20 hover:border-white/40">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-white/30 transition-all">
              <FileText size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Register Now</h3>
            <p className="text-green-100 mb-6 leading-relaxed">
              Get your business officially registered and unlock access to all KASEDA support programs.
            </p>
            <button className="flex items-center gap-2 text-white font-semibold hover:gap-4 transition-all group">
              Start Registration
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all border border-white/20 hover:border-white/40">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-white/30 transition-all">
              <PhoneCall size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Get Consultation</h3>
            <p className="text-green-100 mb-6 leading-relaxed">
              Speak with our expert advisors to find the perfect program tailored to your business needs.
            </p>
            <button className="flex items-center gap-2 text-white font-semibold hover:gap-4 transition-all group">
              Book Appointment
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all border border-white/20 hover:border-white/40">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-white/30 transition-all">
              <Zap size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Apply for Funding</h3>
            <p className="text-green-100 mb-6 leading-relaxed">
              Access grants, loans, and investment opportunities to accelerate your business growth.
            </p>
            <button className="flex items-center gap-2 text-white font-semibold hover:gap-4 transition-all group">
              Explore Funding
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="text-center">
          <p className="text-green-100 mb-6">
            Questions? Our support team is available Monday to Friday, 8:00 AM to 4:00 PM WAT
          </p>
          <button className="px-10 py-4 bg-white text-green-800 rounded-xl hover:bg-green-50 transition-all font-bold text-lg shadow-2xl hover:shadow-green-900/50 transform hover:-translate-y-1">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
