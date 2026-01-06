import { ArrowRight, Zap, TrendingUp, Users, Briefcase, Building2, Sprout, Code } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Briefcase,
      title: 'Business Registration',
      description: 'Register your business and gain access to all KASEDA support programs and incentives',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Zap,
      title: 'SME Financing',
      description: 'Access low-interest loans and grants designed specifically for small and medium enterprises',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: Users,
      title: 'Training & Skills',
      description: 'Develop professional skills through our comprehensive training programs in entrepreneurship and technical fields',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: TrendingUp,
      title: 'Business Advisory',
      description: 'Get expert guidance on business planning, market analysis, and growth strategies',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Sprout,
      title: 'Agribusiness Support',
      description: 'Special programs for agricultural enterprises including value chain development and market linkages',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: Code,
      title: 'Tech Innovation Hub',
      description: 'Support for digital startups, tech entrepreneurs, and ICT-based business ventures',
      color: 'from-cyan-500 to-cyan-600',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
            Our Services
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Services to Drive Your Success</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive support programs designed to help entrepreneurs and businesses thrive across all sectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-200 p-8 hover:border-green-300 hover:shadow-xl transition-all"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform">
                <service.icon size={40} className="text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <button className="flex items-center gap-2 text-green-700 font-semibold group-hover:gap-4 transition-all hover:text-green-800">
                Learn More
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-green-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Need customized support?</h3>
              <p className="text-lg text-gray-600">
                Our team is ready to help you find the perfect program tailored to your business needs
              </p>
            </div>
            <button className="flex-shrink-0 px-10 py-4 bg-green-700 text-white rounded-xl hover:bg-green-800 transition-all font-semibold shadow-lg">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
