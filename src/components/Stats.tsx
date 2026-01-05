import { TrendingUp, Users, Briefcase, Building2 } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Users,
      value: '50,000+',
      label: 'Beneficiaries',
      description: 'Entrepreneurs empowered',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Briefcase,
      value: '3,500+',
      label: 'Businesses Registered',
      description: 'In 2025 alone',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Building2,
      value: '15,000+',
      label: 'Jobs Created',
      description: 'Direct employment',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: TrendingUp,
      value: '₦5B+',
      label: 'Capital Facilitated',
      description: 'Loans and investments',
      color: 'from-teal-500 to-teal-600',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Impact in Numbers</h2>
          <p className="text-gray-600">Measurable results driving economic transformation</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100 hover:border-green-200"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform">
                <stat.icon size={48} className="text-green-700" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
