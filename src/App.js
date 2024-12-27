import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Header from './component/Header';
import AboutUs from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <section id="f"> <Home /> </section>
      <section id="A"> <AboutUs /> </section>
      <section id="D"> <Courses /> </section>
      <section id="C"> <Contact /> </section>
    </div>
  );
}

export default App;
