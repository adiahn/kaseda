import { Calendar, ArrowRight, User, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function News() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  const news = [
    {
      id: 1,
      date: 'Jan 8, 2026',
      title: 'KASEDA Launches New Agribusiness Growth Fund',
      excerpt: 'We are opening N500 million in grants and concessional loans to support agricultural enterprises across the state.',
      image: 'https://images.pexels.com/photos/2235060/pexels-photo-2235060.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Programs',
      author: 'KASEDA Press',
    },
    {
      id: 2,
      date: 'Jan 5, 2026',
      title: 'Record SME Registration in 2025',
      excerpt: 'Over 3,500 new businesses registered through KASEDA in the past year, creating 15,000 direct jobs.',
      image: 'https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Achievements',
      author: 'Impact Team',
    },
    {
      id: 3,
      date: 'Dec 28, 2025',
      title: 'Free Digital Skills Training Begins',
      excerpt: 'Registration is now open for our intensive digital marketing and software development bootcamps.',
      image: 'https://images.pexels.com/photos/3182765/pexels-photo-3182765.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Training',
      author: 'Edu Dept',
    },
    {
      id: 4,
      date: 'Dec 20, 2025',
      title: 'Women Empowerment Initiative',
      excerpt: 'Special grants awarded to 500 women-led startups in the textile and food processing sectors.',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Empowerment',
      author: 'Gender Desk',
    },
    {
      id: 5,
      date: 'Dec 15, 2025',
      title: 'Green Energy for SMEs',
      excerpt: 'Distribution of subsidized solar power kits to rural businesses to boost productivity and reduce costs.',
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Infrastructure',
      author: 'Tech Unit',
    },
  ];

  // Responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-swipe
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, itemsPerPage]);

  const maxIndex = Math.max(0, news.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="news" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
               <span className="w-12 h-1 bg-green-600 rounded-full"></span>
               <span className="text-green-700 font-bold uppercase tracking-wider text-sm">Update Center</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              News & Announcements
            </h2>
            <p className="text-xl text-gray-600">
              Stay informed about our latest programs, policy updates, and success stories from the Katsina State entrepreneurial ecosystem.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-green-700 hover:text-white hover:border-green-700 transition-all bg-white"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-green-700 hover:text-white hover:border-green-700 transition-all bg-white"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative">
          <div 
            className="flex transition-transform duration-700 ease-in-out gap-8"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
          >
            {news.map((item) => (
              <div 
                key={item.id}
                style={{ flex: `0 0 calc(${100 / itemsPerPage}% - ${itemsPerPage > 1 ? '22px' : '0px'})` }} // Adjust gap calculation logic slightly
                className="min-w-0" // prevent flex shrink issues
              >
                <article className="h-full flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex-shrink-0">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-700/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wide rounded-lg shadow-lg">
                        <Tag size={12} />
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1 rounded-full">
                        <Calendar size={14} className="text-green-600" />
                        <span className="font-medium text-gray-700">{item.date}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4 hover:text-green-700 transition-colors leading-tight line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                      {item.excerpt}
                    </p>

                    <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-6">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                          <User size={14} />
                        </div>
                        <span className="text-xs font-bold text-gray-500 uppercase">{item.author}</span>
                      </div>
                      <button className="flex items-center gap-2 text-green-700 font-bold text-sm hover:translate-x-1 transition-transform">
                        Read Story <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
