import { Search, ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1000',
      title: 'Empower Your Business',
      subtitle: 'Access funding, training, and mentorship to scale your venture',
      cta: 'Explore Programs',
    },
    {
      image: 'https://images.pexels.com/photos/3182757/pexels-photo-3182757.jpeg?auto=compress&cs=tinysrgb&w=1000',
      title: 'Create Sustainable Jobs',
      subtitle: 'Join thousands of entrepreneurs creating employment in Katsina State',
      cta: 'Learn More',
    },
    {
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1000',
      title: 'Transform Your Industry',
      subtitle: 'Support for agribusiness, manufacturing, and digital enterprises',
      cta: 'Get Started',
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative bg-gray-900 text-white overflow-hidden">
      <div className="relative h-[500px] md:h-[600px] w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

            <div className="absolute inset-0 flex flex-col justify-center items-start">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg sm:text-xl text-gray-100 mb-8 max-w-2xl">
                  {slide.subtitle}
                </p>
                <button className="px-8 py-4 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-all font-semibold shadow-lg">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/40 rounded-full transition-all z-20"
        >
          <ChevronLeft size={28} className="text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/40 rounded-full transition-all z-20"
        >
          <ChevronRight size={28} className="text-white" />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-b from-gray-900 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 -mt-8 relative z-10">
            <h2 className="text-gray-900 text-xl font-bold mb-4">What can we help you with?</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Search programs, services, opportunities..."
                className="flex-1 px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-700 text-gray-900"
              />
              <button className="px-8 py-4 bg-green-700 text-white rounded-xl hover:bg-green-800 transition-all font-semibold flex items-center justify-center gap-2">
                <Search size={20} />
                <span className="hidden sm:inline">Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
