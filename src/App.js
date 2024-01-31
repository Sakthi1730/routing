import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navbar';
import All from './All';
import Fsd from './Fsd';
import Ds from './Ds.jsx';
import Cs from './Cs.jsx';
import Header from './Header.jsx';  
import Career from './Career.jsx';
import Fsdheader from './Fsdheader.jsx';
import Allheader from './Allheader.jsx';
import Headernav from './Headernav.jsx';
import Dsheader from './Dsheader.jsx';
import Csheader from './Csheader.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Allcombain from './Allcombain.jsx';
import Fsdcombain from './Fsdcombain.jsx';
import Dscombain from './Dscombain.jsx';
import Cscombain from './Cscombain.jsx';
import Careercombain from './Careercombain.jsx';
import Footer from './Footer.jsx';


function App() {
  return (
    <>
    <Header></Header>



    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Allcombain/>}/>
      <Route path="/Fsd" element={<Fsdcombain/>}/>
      <Route path="/Ds" element={<Dscombain/>}/>
      <Route path="/Cs" element={<Cscombain/>}/>
      <Route path="/Career" element={<Careercombain/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
 
    </>
  );
}

export default App;
