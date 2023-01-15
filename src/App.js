import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/NavBar/navbar';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home/home';
import Footer from './Components/Footer/footer';
import AvailbleProducts from './Components/Products/AvailbleProducts';
import OrderPage from './Components/Orders/OrderPage';

function App() {
  return (
    <>
      <Router>
          <Navbar/>
        <Routes>
          <Route path='/' index element={<Home />}/>
          <Route  path='/Products' element={<AvailbleProducts/>} />
          <Route  path='/Order' element={<OrderPage/>} />
          {/* <Route path='/Aboutus' element={<ReviewPages />} /> */}
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
