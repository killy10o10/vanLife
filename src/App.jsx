import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Vans from './components/Vans';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import VanDetails from './components/vanDetails';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/about" element={<About />} />
        <Route path="/vanDetails" element={<VanDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
