import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Header from './component/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <section>
        <Home />
      </section>
    </div>
  );
}

export default App;
