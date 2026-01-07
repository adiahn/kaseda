import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import ServicesPage from './pages/ServicesPage';
import AllNewsPage from './pages/AllNewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={
          <>
            <Header />
            <AboutPage />
            <Footer />
          </>
        } />
        <Route path="/programs" element={
          <>
            <Header />
            <ProgramsPage />
            <Footer />
          </>
        } />
        <Route path="/services" element={
          <>
            <Header />
            <ServicesPage />
            <Footer />
          </>
        } />
        <Route path="/news" element={
          <>
            <Header />
            <AllNewsPage />
            <Footer />
          </>
        } />
        <Route path="/news/:id" element={
          <>
            <Header />
            <NewsDetailPage />
            <Footer />
          </>
        } />
        <Route path="/contact" element={
          <>
            <Header />
            <ContactPage />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
