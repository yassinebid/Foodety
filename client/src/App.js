import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Route, Link, Routes } from 'react-router-dom'
import Navbartest from './components/Navbartest';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import Loginscreen from './screens/Loginscreen';
import Registerscreen from './screens/Registerscreen';
import Ordersscreen from './screens/Ordersscreen'
import Landingscreen from './screens/LandingScreen';

function App() {
  return (
    <div className="App">
          <Navbartest />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homescreen/>} />
              <Route path="/cart" element={<Cartscreen/>} />
              <Route path="/login" element={<Loginscreen/>} />
              <Route path="/register" element={<Registerscreen/>} />
              <Route path="/orders" element={<Ordersscreen/>} />
              <Route path="/landing" element={<Landingscreen/>} />
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
 