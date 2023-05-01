import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Vans from './pages/Vans';
import About from './pages/About';
import VanDetails from './pages/vanDetails';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/about" element={<About />} />
          <Route path="/vanDetails" element={<VanDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
