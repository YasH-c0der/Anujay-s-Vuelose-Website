import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import PopUp from './pages/pop_up';
import FlightInfo from './pages/FlightInfo';
import FlightContext from './assets/context/FlightContext';
import { useState } from 'react';

function App() {

  const [flight_data, setflight_data] = useState({})
  return (
    <FlightContext.Provider value={{flight_data, setflight_data}}>
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<PopUp />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/flight-info" element={<FlightInfo />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
    </FlightContext.Provider>
  );
}

export default App;