import { useEffect } from "react";
import { Calendar, Clock, Video } from "lucide-react";

declare global {
  interface Window {
    Calendly: any;
  }
}

export const Calendly = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/your-calendly-username/30min"
      });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary to-primary/90">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full">
            <span className="text-secondary font-semibold">Schedule Your Consultation</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Book a Free Consultation Call
          </h2>

          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Speak with our business setup experts and get personalized guidance for your Gulf expansion plans. No obligation, just expert advice.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 opacity-0 animate-fade-in-up animate-delay-100">
              <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Easy Scheduling</h3>
              <p className="text-white/80 text-sm">Pick a time that works for you</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 opacity-0 animate-fade-in-up animate-delay-200">
              <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">30 Minutes</h3>
              <p className="text-white/80 text-sm">Focused consultation session</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 opacity-0 animate-fade-in-up animate-delay-300">
              <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <Video className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Video or Phone</h3>
              <p className="text-white/80 text-sm">Your choice of meeting format</p>
            </div>
          </div>

          <button
            onClick={openCalendly}
            className="bg-secondary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-smooth shadow-gold inline-flex items-center gap-2"
          >
            <Calendar className="h-5 w-5" />
            Schedule Your Call Now
          </button>

          <p className="text-white/70 text-sm mt-6">
            Available Monday to Friday, 9 AM - 6 PM GST
          </p>
        </div>
      </div>
    </section>
  );
};
