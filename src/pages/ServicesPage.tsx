import Services from '../components/Services';
import EServices from '../components/EServices';
import { ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white py-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Comprehensive Support for Your Business Growth
            </h1>
            <p className="text-xl text-green-100 leading-relaxed">
              Access a wide range of services designed to help your business succeed, from registration to funding, training, and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Services Component */}
      <Services />

      {/* E-Services Component */}
      <EServices />

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Support Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer specialized services to address specific business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Business Plan Development',
                description: 'Get expert help in crafting comprehensive business plans that attract investors and guide your growth strategy.',
                action: 'Get Started',
              },
              {
                title: 'Market Research Support',
                description: 'Access market insights, industry reports, and competitive analysis to make informed business decisions.',
                action: 'Learn More',
              },
              {
                title: 'Legal & Compliance Advisory',
                description: 'Navigate regulatory requirements with guidance on business registration, taxation, and compliance matters.',
                action: 'Get Advice',
              },
              {
                title: 'Technology Integration',
                description: 'Modernize your business operations with digital tools, e-commerce platforms, and automation solutions.',
                action: 'Explore Options',
              },
              {
                title: 'Export Facilitation',
                description: 'Expand your market reach with support for export documentation, international partnerships, and trade missions.',
                action: 'Start Exporting',
              },
              {
                title: 'Networking Events',
                description: 'Connect with fellow entrepreneurs, investors, and industry experts through our regular networking sessions.',
                action: 'View Events',
              },
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all border border-gray-100 hover:border-green-200 group">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button className="flex items-center gap-2 text-green-700 font-semibold hover:gap-4 transition-all">
                  {service.action}
                  <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-700 to-green-900 text-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Access Our Services?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Get started today and take advantage of our comprehensive support services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-green-800 rounded-xl hover:bg-green-50 transition-all font-bold shadow-xl">
              Register Your Business
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white hover:text-green-800 transition-all font-bold">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
