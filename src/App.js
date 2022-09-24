import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AboutClient from './pages/AboutClient';
import AboutService from './pages/AboutService';
import BookNow from './pages/BookNow';
import Service from './pages/Service';
import Navbar from './components/Navbar';
import styles from './resources/styles/home.module.css';
import ServiceType from './pages/ServiceType';

function App() {
  return (
    <div className={`App ${styles.home}`}>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about-client' element={<AboutClient/>}/>
          <Route path='/about-service' element={<AboutService/>}/>
          <Route path='/book-now' element={<BookNow/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/service-type' element={<ServiceType/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
