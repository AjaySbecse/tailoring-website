import './App.css';
import Footer from './components/Footer';
import Header from './components/Header'
import HomeComponent from './components/HomeComponent';
import ServiceComponent from './components/ServiceComponent';
import GalleryComponent from './components/GalleryComponent';
import ContactUsComponent from './components/ContactUsComponent';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomeComponent />} />
          <Route path='/service' element={<ServiceComponent />} />
          <Route path='/gallery' element={<GalleryComponent />} />
          <Route path='/contact' element={<ContactUsComponent />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
