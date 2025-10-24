import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Projects from './components/Projects';

const App = () => {
  return ( 
    <>
      <Header />
      <Home />
      <About />
      <Skills/>
      <Projects />
      <Services/>
      <Contact />
      <Footer/>
    </> 
  );
}

export default App;