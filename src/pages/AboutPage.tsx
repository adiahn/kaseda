import About from '../components/About';
import Stats from '../components/Stats';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white py-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Empowering Katsina's Entrepreneurial Future
            </h1>
            <p className="text-xl text-green-100 leading-relaxed">
              The Katsina State Entrepreneurship Development Agency (KASEDA) is dedicated to fostering economic growth and creating sustainable opportunities for entrepreneurs across Katsina State.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* Leadership Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the visionary leaders driving KASEDA's mission forward
            </p>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {/* Executive Governor */}
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {/* Photo */}
              <div className="md:col-span-1">
                <div className="relative">
                  <div className="aspect-[3/4] rounded-xl overflow-hidden">
                    <img
                      src="/governor.jpg"
                      alt="Mal Dikko Umar Radda PhD"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="md:col-span-2">
                <span className="inline-block px-3 py-1 bg-green-700 text-white text-xs font-bold uppercase tracking-wide rounded mb-3">
                  Executive Governor
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Mal Dikko Umar Radda PhD
                </h3>
                <p className="text-lg text-green-700 font-semibold mb-4">
                  Katsina State
                </p>
                <p className="text-gray-700 leading-relaxed">
                  His Excellency, Mal Dikko Umar Radda PhD, provides visionary leadership and unwavering support for entrepreneurship development and economic transformation across Katsina State. Under his administration, KASEDA has been empowered to implement innovative programs and initiatives that drive sustainable growth, create employment opportunities, and build a thriving entrepreneurial ecosystem throughout the state.
                </p>
              </div>
            </div>

            {/* Director General */}
            <div className="grid md:grid-cols-3 gap-8 items-start border-t border-gray-200 pt-12">
              {/* Photo */}
              <div className="md:col-span-1">
                <div className="relative">
                  <div className="aspect-[3/4] rounded-xl overflow-hidden">
                    <img
                      src="/director.jpg"
                      alt="Dr Babangida Kabir Ruma"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="md:col-span-2">
                <span className="inline-block px-3 py-1 bg-green-700 text-white text-xs font-bold uppercase tracking-wide rounded mb-3">
                  Director General
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Dr Babangida Kabir Ruma
                </h3>
                <p className="text-lg text-green-700 font-semibold mb-4">
                  KASEDA
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Dr Babangida Kabir Ruma leads the strategic implementation of KASEDA's innovative programs and initiatives that empower entrepreneurs and drive sustainable economic development throughout Katsina State. With his extensive experience and commitment to excellence, he ensures that KASEDA delivers impactful support to MSMEs, creating pathways to prosperity and building a stronger entrepreneurial foundation for the state.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Component */}
      <About />

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                To provide comprehensive support, resources, and enabling environment for entrepreneurs and MSMEs in Katsina State, driving economic growth, job creation, and poverty reduction through innovative programs and strategic partnerships.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                To be the leading catalyst for entrepreneurial development in Northern Nigeria, creating a vibrant ecosystem where businesses thrive, innovation flourishes, and every entrepreneur has access to the tools and support needed to succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and relationships with entrepreneurs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We strive for the highest standards in all our programs and services.',
              },
              {
                title: 'Innovation',
                description: 'We embrace creative solutions and forward-thinking approaches.',
              },
              {
                title: 'Integrity',
                description: 'We operate with transparency, honesty, and accountability.',
              },
              {
                title: 'Collaboration',
                description: 'We work in partnership with stakeholders to achieve common goals.',
              },
              {
                title: 'Inclusivity',
                description: 'We ensure equal access to opportunities for all entrepreneurs.',
              },
              {
                title: 'Impact',
                description: 'We focus on creating measurable and sustainable outcomes.',
              },
            ].map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
