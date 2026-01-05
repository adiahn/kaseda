import { ArrowRight, Sprout, Factory, GraduationCap, Wallet } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      icon: Sprout,
      title: 'Agribusiness Development',
      description: 'Supporting farmers and agro-entrepreneurs with training, equipment, and market access to boost agricultural productivity.',
      image: 'https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Factory,
      title: 'SME Growth Support',
      description: 'Providing small and medium enterprises with funding, mentorship, and resources to scale their operations.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: GraduationCap,
      title: 'Skills & Training',
      description: 'Equipping youth with marketable skills in technology, crafts, and entrepreneurship for sustainable employment.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Wallet,
      title: 'Access to Finance',
      description: 'Connecting entrepreneurs with microfinance, grants, and investment opportunities to grow their ventures.',
      image: 'https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-teal-500 to-teal-600',
    },
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Programs</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our flagship initiatives designed to drive economic transformation in Katsina State
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-60 group-hover:opacity-50 transition-opacity`}></div>
                <div className="absolute top-4 left-4 p-3 bg-white rounded-xl shadow-lg">
                  <program.icon size={28} className="text-gray-900" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                <button className="flex items-center gap-2 text-green-700 font-semibold hover:gap-4 transition-all group">
                  Learn More
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
