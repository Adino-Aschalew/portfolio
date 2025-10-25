import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { DarkModeProvider } from './contexts/DarkModeContext';

const App = () => {
  return (
    <DarkModeProvider>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </DarkModeProvider>
  );
}

export default App;