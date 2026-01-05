import { Target, Eye, Award, Handshake, CheckCircle } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in all our programs, ensuring measurable impact and sustainable outcomes.',
    },
    {
      icon: Handshake,
      title: 'Partnership',
      description: 'We collaborate with stakeholders across sectors to multiply our impact and reach more beneficiaries.',
    },
    {
      icon: CheckCircle,
      title: 'Accountability',
      description: 'We are transparent and committed to delivering results that benefit the citizens of Katsina State.',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We continuously innovate and adapt our programs to meet the changing needs of entrepreneurs.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative order-2 lg:order-1">
            <img
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="KASEDA team"
              className="rounded-3xl shadow-2xl object-cover w-full h-[500px]"
            />
            <div className="absolute -bottom-6 -right-6 bg-green-700 text-white rounded-2xl p-6 shadow-xl">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm">Years Transforming Katsina</div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-6">
              About KASEDA
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Transforming Katsina's Economic Future
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The Katsina State Economic Development Agency (KASEDA) is the premier government institution dedicated to fostering economic growth, supporting businesses, and creating sustainable employment opportunities across the state.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Through innovative programs, strategic partnerships, and targeted interventions, we empower entrepreneurs, strengthen industries, and build a robust economy that benefits all residents of Katsina State.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Eye className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Our Vision</h4>
                  <p className="text-gray-600">A thriving Katsina State where every citizen has access to economic opportunities and pathways to sustainable prosperity.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Target className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Our Mission</h4>
                  <p className="text-gray-600">To accelerate inclusive economic development through strategic interventions that create jobs and sustainable prosperity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white mb-6">
                  <value.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-green-700 mb-2">34</div>
            <div className="text-gray-600 font-semibold">Local Government Areas</div>
            <p className="text-sm text-gray-500 mt-2">Covered by our programs</p>
          </div>
          <div className="text-center border-l border-r border-gray-200">
            <div className="text-5xl font-bold text-green-700 mb-2">100+</div>
            <div className="text-gray-600 font-semibold">Partner Organizations</div>
            <p className="text-sm text-gray-500 mt-2">Working together for impact</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-green-700 mb-2">50K+</div>
            <div className="text-gray-600 font-semibold">Lives Transformed</div>
            <p className="text-sm text-gray-500 mt-2">Through our interventions</p>
          </div>
        </div>
      </div>
    </section>
  );
}
