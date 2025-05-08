import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';  
import HomePage from './components/Home/Home';
import CompanyPage from './components/Company/Company';
import ProductsPage from './components/Products/Product_main_page/Product';
import EventPage from './components/Event/Event';
import DownloadPage from './components/Download/Download';
import VideosPage from './components/Video/Videos';
import ContactPage from './components/Contect-Us/Contectpage';
import Footer from './components/Footer/Footer';
import BToT from './components/Bottom _to_top/BToT';
import ScrollTotop from './components/Bottom _to_top/locatoion/ScrollTotop';

// Product Pages
import CNC_press from './components/Products/CNC_Press_break/CNC_press';
import Edge_series from './components/Products/Edge_series/Edge_series';
import Hydarlic from './components/Products/Hydarlic_press_break/Hydarlic';
import Edge_H_series from './components/Products/Edge_H_series/Edge_H_series';
import Snchro_hydrlic_press_break from './components/Products/Snchro_hydrlic_press_break/Snchro_hydrlic_press_break';
import Shering from './components/Products/Shering_machine/Shering';
import Hydrolic_Sharing from './components/Products/Hydrolic_sharing_machine/Hydrolic_Sharing';
import Delem from './components/Products/CNC_Controller/Delem';
import Cybelic from './components/Products/CNC_Controller/Cybelic';
import Step from './components/Products/CNC_Controller/Step';
import Standard_Components from './components/Products/CNC_Controller/Standard_Components';

// Admin Panel
import AdminLogin from './components/AdminSide/AdminLogin';
import AdminPanel from './components/AdminSide/AdminPanel';
import ProtectedRoute from './components/AdminSide/ProtectedRoute';
import Api from './components/Call_APi/Api';

const App = () => {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
};

const MainLayout = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  

  // Function to dynamically change document title
  useEffect(() => {
    const titles = {
      '/': 'PARMAR CNC MACHINES (INDIA) LLP',
      // '/home': 'Home - My Website',
      '/company': 'Company - PARMAR CNC MACHINES (INDIA) LLP',
      '/products': 'Products - PARMAR CNC MACHINES (INDIA) LLP',
      '/event': 'Events - PARMAR CNC MACHINES (INDIA) LLP',
      '/download': 'Download - PARMAR CNC MACHINES (INDIA) LLP',
      '/videos': 'Videos - PARMAR CNC MACHINES (INDIA) LLP',
      '/contact': 'Contact Us - PARMAR CNC MACHINES (INDIA) LLP',
      '/admin': 'Admin Login - PARMAR CNC MACHINES (INDIA) LLP',
      '/admin-panel': 'Admin Panel - PARMAR CNC MACHINES (INDIA) LLP',
      '/cnc_press_brake': 'CNC Press Brake - PARMAR CNC MACHINES (INDIA) LLP',
      '/cnc_press_Brake_machine_edge_series': 'CNC Press Brake Machine Edge Series - PARMAR CNC MACHINES (INDIA) LLP',
      '/delem': 'Delem Controller - PARMAR CNC MACHINES (INDIA) LLP',
      '/cybelic': 'Cybelic Controller - PARMAR CNC MACHINES (INDIA) LLP',
      '/step': 'Step Controller - PARMAR CNC MACHINES (INDIA) LLP',
      '/standard_components': 'Standard Components - PARMAR CNC MACHINES (INDIA) LLP',
      '/rear_cylinder_hydraulic_press_brake_machine': 'Rear Cylinder Hydraulic Press Brake Machine - PARMAR CNC MACHINES (INDIA) LLP',
      '/cnc_press_brake_machine_edge_h_series': 'CNC Press Brake Machine Edge H Series- PARMAR CNC MACHINES (INDIA) LLP',
      '/edge_series_synchro_hydraulic_Press_Brake ': 'Edge Series Synchro Hydraulic Press Brake - PARMAR CNC MACHINES (INDIA) LLP',
      '/shering_machine': 'Shearing Machine - PARMAR CNC MACHINES (INDIA) LLP',
      '/variable_rack_angle_hydraulic_shearing_machine': 'Variable Rack Angle Hydraulic Shearing Machine -PARMAR CNC MACHINES (INDIA) LLP',
    };

    document.title = titles[location.pathname] || 'PARMAR CNC MACHINES (INDIA) LLP';
  }, [location.pathname]);

  return (
    <div className='container'>
      <ScrollTotop />
      {!isAdminRoute && <Navbar />}
      
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Product Routes */}
        <Route path="/cnc_press_brake" element={<CNC_press />} />
        <Route path="/cnc_press_Brake_machine_edge_series" element={<Edge_series />} />
        <Route path="/delem" element={<Delem />} />
        <Route path="/cybelic" element={<Cybelic />} />
        <Route path="/step" element={<Step />} />
        <Route path="/standard_components" element={<Standard_Components />} />
        <Route path="/rear_cylinder_hydraulic_press_brake_machine" element={<Hydarlic />} />
        <Route path="/ydraulic Press Brake Machine" element={<Hydarlic />} />
        <Route path="/cnc_press_brake_machine_edge_h_series" element={<Edge_H_series />} />
        <Route path="/edge_series_synchro_hydraulic_Press_Brake" element={<Snchro_hydrlic_press_break />} />
        <Route path="/shering_machine" element={<Shering />} />
        <Route path="/variable_rack_angle_hydraulic_shearing_machine" element={<Hydrolic_Sharing />} />
        
        

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/admin-panel"
          element={
            <ProtectedRoute>
              <AdminPanel />
            </ProtectedRoute>
          }
        />
        <Route path="/apicall" element={<Api />} />
        <Route
          path="/apicall"
          element={
            <ProtectedRoute>
              <Api />
            </ProtectedRoute>
          }
        />
        
      </Routes>

      {!isAdminRoute && <BToT />}
      {!isAdminRoute && <Footer />}
    </div>
  );
};

export default App;
