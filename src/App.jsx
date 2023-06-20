import './assets/styles/main.scss';
import '../server';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Vans, {loader as vansData} from './pages/Vans/Vans';
import About from './pages/About';
import VanDetails from './pages/Vans/vanDetails';
import Layout from './components/Layout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import HostVans from './pages/Host/HostVans';
import HostVanDetail from './components/HostVanDetail';
import Reviews from './pages/Host/Reviews';
import HostLayout from './components/HostLayout';
import HostVanInfo from './components/HostVanInfo';
import HostVanPhotos from './components/HostVanPhotos';
import HostVanPricing from './components/HostVanPricing';
import Page404 from './pages/Page404';
import Error from './components/Error';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="vans" element={<Vans />} loader={vansData} errorElement={<Error />} />
      <Route path="about" element={<About />} />
      <Route path="vans/:id" element={<VanDetails />} />

      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="vans" element={<HostVans />} />
        <Route path="vans/:id" element={<HostVanDetail />}>
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
      </Route>
      <Route path="*" element={<Page404 />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
