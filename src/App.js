import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Booking from './components/Booking/Booking';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import Signup from './components/Signup/Signup';


function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/booking' element={<Booking/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      <Footer/>
      <Toaster/>
    </div>
  );
}

export default App;
