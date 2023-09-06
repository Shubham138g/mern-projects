
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/home/Home';
import About from './component/about/About';
import Experience from './component/experience/Experience';
import Projects from './component/Projects/Projects';
import Contact from './component/contact/Contact';
import Footer from './component/Footer';
function App() {
  return (
    <div>
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
