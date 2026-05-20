import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/Whatsappbutton';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <TechStack />
        <WhyChooseUs />
        <Process />
        <Contact />
      </main>
      <Footer />
       <WhatsAppButton />
    </>
  );
}