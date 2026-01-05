import { Calendar, ArrowRight } from 'lucide-react';

export default function News() {
  const news = [
    {
      date: 'January 8, 2026',
      title: 'KASEDA Launches New Agribusiness Growth Fund',
      excerpt: 'Opening N500 million in grants and concessional loans to support agricultural enterprises in Katsina State',
      image: 'https://images.pexels.com/photos/2235060/pexels-photo-2235060.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Programs',
    },
    {
      date: 'January 5, 2026',
      title: 'Record SME Registration in 2025',
      excerpt: 'Over 3,500 new businesses registered through KASEDA in the past year, creating 15,000 direct jobs',
      image: 'https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Achievements',
    },
    {
      date: 'December 28, 2025',
      title: 'Free Digital Skills Training Begins',
      excerpt: 'KASEDA announces free training in digital marketing, e-commerce, and software development for young entrepreneurs',
      image: 'https://images.pexels.com/photos/3182765/pexels-photo-3182765.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Training',
    },
  ];

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
              Latest Updates
            </div>
            <h2 className="text-4xl font-bold text-gray-900">News & Announcements</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-green-700 font-semibold hover:text-green-800">
            View All News
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-green-700 text-white rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar size={16} />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                <button className="flex items-center gap-2 text-green-700 font-semibold group-hover:gap-4 transition-all">
                  Read More
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <button className="flex items-center gap-2 text-green-700 font-semibold hover:text-green-800 mx-auto">
            View All News
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
