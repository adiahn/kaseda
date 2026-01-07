import { Calendar, ArrowRight, User, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function News() {
  const news = [
    {
      id: 1,
      date: 'Dec 29, 2025',
      title: 'KASEDA Holds End-of-Year Management Meeting, Sets Direction for 2026',
      excerpt: 'Reviewing 2025 Milestones and Strengthening Support for MSMEs in Katsina State.',
      image: '/news1.jpg',
      category: 'Management',
      author: 'KASEDA Press',
    },
    {
      id: 2,
      date: 'Dec 2025',
      title: 'From Waste to Wealth: KASEDA Graduate Launches Shoe Manufacturing Company',
      excerpt: 'Social Innovation Academy Alumnus Turns Skills Into Jobs and Sustainable Enterprise.',
      image: '/news2.jpg',
      category: 'Success Story',
      author: 'KASEDA Press',
    },
    {
      id: 3,
      date: 'Jan 2026',
      title: 'KASEDA Convenes Implementation Committee Ahead of KGEF Launch',
      excerpt: 'Stakeholders Align on Framework for Katsina State Graduate Entrepreneurship Fund.',
      image: '/news3.jpg',
      category: 'Programs',
      author: 'KASEDA Press',
    },
  ];

  return (
    <section id="news" className="py-24 bg-gray-50">
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
          
          <Link 
            to="/news"
            className="flex items-center gap-2 px-6 py-3 bg-green-700 text-white rounded-xl hover:bg-green-800 transition-all font-semibold shadow-lg hover:shadow-xl"
          >
            See All News
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <article 
              key={item.id}
              className="h-full flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
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
                  <Link 
                    to={`/news/${item.id}`}
                    className="flex items-center gap-2 text-green-700 font-bold text-sm hover:translate-x-1 transition-transform"
                  >
                    Read Story <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
