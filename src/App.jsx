import './assets/styles/main.scss';
import '../server';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Vans from './pages/Vans/Vans';
import About from './pages/About';
import VanDetails from './pages/Vans/vanDetails';
import Layout from './components/Layout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import HostVans from './pages/Host/HostVans';
import HostVanDetail from './components/HostVanDetail';
import Reviews from './pages/Host/Reviews';
import HostLayout from './components/HostLayout';
import HostVanInfo from './pages/Host/HostVanInfo';

function App() {
  return (
    <>
      <Routes>
        <Route path="/"  element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="vans" element={<Vans />} />
          <Route path="about" element={<About />} />
          <Route path="vans/:id" element={<VanDetails />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />} >
              <Route path="details" element={<HostVanInfo />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
