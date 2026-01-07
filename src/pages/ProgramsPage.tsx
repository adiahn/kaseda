import EServices from '../components/EServices';

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white py-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Empowering Entrepreneurs Through Strategic Programs
            </h1>
            <p className="text-xl text-green-100 leading-relaxed">
              Discover our comprehensive range of programs designed to support entrepreneurs at every stage of their business journey.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Access Links Component */}
      <EServices />
    </div>
  );
}
