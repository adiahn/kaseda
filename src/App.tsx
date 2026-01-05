import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import EServices from './components/EServices';
import News from './components/News';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <EServices />
      <News />
      <About />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
