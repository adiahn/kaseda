import { Target, Eye, Rocket, TrendingUp, HandCoins, Globe, FileText } from 'lucide-react';
import bg2 from '../Assets/bg2.jpeg';

export default function About() {
  const mandates = [
    {
      icon: Rocket,
      title: 'Promote Entrepreneurship',
      description: 'Promote entrepreneurship and innovation across all sectors.',
    },
    {
      icon: TrendingUp,
      title: 'Enhance Competitiveness',
      description: 'Enhance the competitiveness of SMEs through capacity building.',
    },
    {
      icon: HandCoins,
      title: 'Access to Finance',
      description: 'Facilitate access to finance and investment opportunities.',
    },
    {
      icon: Globe,
      title: 'Market Access',
      description: 'Connect businesses to local and international markets.',
    },
    {
      icon: FileText,
      title: 'Policy Advocacy',
      description: 'Provide policy advocacy and support for enterprise development.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative order-2 lg:order-1">
            <img
              src={bg2}
              alt="KASEDA team"
              className="rounded-3xl shadow-2xl object-cover w-full h-[500px]"
            />
            <div className="absolute -bottom-6 -right-6 bg-green-700 text-white rounded-2xl p-6 shadow-xl">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm">Years Transforming Katsina</div>
            </div>
          </div>

          <div className="order-1 lg:order-2">

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Vision & Mission
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
              The Katsina State Entrepreneurship Development Agency (KASEDA) is the premier government institution dedicated to fostering economic growth, supporting businesses, and creating sustainable employment opportunities across the state.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Eye className="w-8 h-8 text-green-700" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Our Vision</h4>
                  <p className="text-gray-600 leading-relaxed">
                    To be the leading catalyst for SME development and entrepreneurial excellence in Northern Nigeria.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Target className="w-8 h-8 text-green-700" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Our Mission</h4>
                  <p className="text-gray-600 leading-relaxed">
                    To stimulate sustainable enterprise growth and job creation in Katsina State by supporting SMEs and startups through innovation, partnerships, and policy interventions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-16">

            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Mandate</h3>
            <p className="text-lg text-gray-600">
              KASEDA promotes entrepreneurship, enhances SME competitiveness, builds capacity, facilitates access to finance, and connects businesses to local and international markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mandates.map((mandate, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform">
                  <mandate.icon size={40} className="text-green-700" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{mandate.title}</h4>
                <p className="text-gray-600 leading-relaxed">{mandate.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 bg-gray-50 rounded-3xl p-8 md:p-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Impact</h3>
            <p className="text-gray-600 text-lg">
              Through our core mandate, we have successfully supported thousands of entrepreneurs and businesses across Katsina State, contributing to economic growth and job creation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-green-700 mb-2">34</div>
              <div className="text-gray-600 font-semibold">Local Government Areas</div>
              <p className="text-sm text-gray-500 mt-2">Covered by our programs</p>
            </div>
            <div className="text-center border-l-0 md:border-l border-r-0 md:border-r border-gray-200">
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
      </div>
    </section>
  );
}
