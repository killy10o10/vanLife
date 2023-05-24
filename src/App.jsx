import './assets/styles/main.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Vans from './pages/Vans/Vans';
import About from './pages/About';
import VanDetails from './pages/Vans/vanDetails';
import Layout from './components/Layout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostLayout from './components/HostLayout';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans/:id" element={<VanDetails />} />
        <Route path="/host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/host/income" element={<Income />} />
          <Route path="/host/reviews" element={<Reviews />} />
        </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
