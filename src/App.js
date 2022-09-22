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

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about-client' element={<AboutClient/>}/>
          <Route path='/about-service' element={<AboutService/>}/>
          <Route path='/book-now' element={<BookNow/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
