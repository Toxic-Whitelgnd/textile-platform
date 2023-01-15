import logo from './logo.svg';
import './App.css';
import Formss from './Components/Forms/formss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/NavBar/navbar';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home/home';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <>
      <Router>
          <Navbar/>
        <Routes>
          <Route path='/' index element={<Home />}/>
          {/* <Route  path='/Products' element={<BlogPage/>} /> */}
          <Route  path='/Order' element={<Formss/>} />
          {/* <Route path='/Aboutus' element={<ReviewPages />} /> */}
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
