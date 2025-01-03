
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';  
import HomePage from './components/Home/Home';
import CompanyPage from './components/Company/Company';
import ProductsPage from './components/Products/Product_main_page/Product';
import EventPage from './components/Event/Event';
import DownloadPage from './components/Download/Download';
import VideosPage from './components/Video/Videos';
import ContactPage from './components/Contect-Us/Contectpage';
import Footer from './components/Footer/Footer'
import CNC_press from './components/Products/CNC_Press_break/CNC_press'
import Edge_series from './components/Products/Edge_series/Edge_series'

function App() {
  return (
    <div className='container'>
       <Router>
    
      <Navbar />
      
      
      <div>
        <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/company" element={<CompanyPage />} />
           <Route path="/products" element={<ProductsPage />} />
           <Route path="/event" element={<EventPage />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cnc_press" element={<CNC_press/>} />
          <Route path="/edge_series" element={<Edge_series/>} />

      
        </Routes>
      </div>

      <Footer/>

    </Router>
    </div>
   
  );
}

export default App;

