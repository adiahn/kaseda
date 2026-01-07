import { Laptop, FileCheck, CreditCard, Users, ArrowRight, ExternalLink } from 'lucide-react';

export default function EServices() {
  const portals = [
    {
      icon: Laptop,
      title: 'Kaseda Academy',
      description: 'Access our comprehensive learning platform with courses, training programs, and educational resources.',
      action: 'Visit Academy',
      status: 'Active',
      url: 'https://www.kasedaacademy.ng',
    },
    {
      icon: FileCheck,
      title: 'Kaseda Certificate',
      description: 'Verify and manage your certificates from KASEDA training programs and workshops.',
      action: 'Get Certificate',
      status: 'Active',
      url: 'https://www.kasedacertificate.com',
    },
    {
      icon: CreditCard,
      title: 'Kaseda Loan and Grant',
      description: 'Apply for funding opportunities, track your application status, and manage repayments.',
      action: 'Apply Now',
      status: 'Open',
      url: 'https://loan.kasedaktsg.com',
    },
    {
      icon: Users,
      title: 'Kaseda Awards for Businesses',
      description: 'Recognize and celebrate excellence in entrepreneurship and business innovation.',
      action: 'Learn More',
      status: 'Closed',
      url: 'https://www.kasedaaward.com',
    },
  ];

  return (
    <section id="e-services" className="py-20 bg-gray-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Access Portals
            </h2>
            <p className="text-lg text-gray-600">
              Access our services from the comfort of your home or office. Our secure digital platforms allow you to apply, register, and track your requests instantly.
            </p>
          </div>
          <button className="flex items-center gap-2 text-green-700 font-bold hover:text-green-800 transition-colors">
            View All Services <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portals.map((portal, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <portal.icon size={100} className="text-green-700 -mr-8 -mt-8" />
              </div>
              
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-700 group-hover:bg-green-700 group-hover:text-white transition-colors">
                  <portal.icon size={20} />
                </div>
                <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full border border-green-100">
                  {portal.status}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                {portal.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {portal.description}
              </p>

              <a 
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-lg border-2 border-green-50 bg-green-50 text-green-700 font-semibold hover:bg-green-700 hover:border-green-700 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                {portal.action}
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
