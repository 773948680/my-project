import React from 'react'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LastProducts from './components/marketing/pageSections/LastProducts'
// import Event from './components/marketing/pageSections/Event'
// import Products from './components/marketing/pageSections/Products'

export default function App () {
  return (
                <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
       
       
       
  
}
