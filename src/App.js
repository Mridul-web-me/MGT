
import './App.css';
import Home from './Component/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Router, Routes } from 'react-router-dom';
import Gallery from './Component/Gallery/Gallery';
import { BrowserRouter } from 'react-router-dom';
import About from './Component/About/About';
import FirstSemester from './Component/Semester/FirstSemester/FirstSemester';
import ThirdSemester from './Component/Semester/ThirdSemester/ThirdSemester';
import FourthSemester from './Component/Semester/FourthSemester/FourthSemester';
import FifthSemester from './Component/Semester/FifthSemester/FifthSemester';
import SixsthSemester from './Component/Semester/SixsthSemester/SixsthSemester';
import SeventhSemester from './Component/Semester/SeventhSemester/SeventhSemester';
import EightSemester from './Component/Semester/EightSemester/EightSemester';
import SecondSemester from './Component/Semester/SecondSemester/SecondSemester';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import First from './Component/Batch/First/First';
import Second from './Component/Batch/Second/Second';
import Third from './Component/Batch/Third/Third';
import Fourth from './Component/Batch/Fourth/Fourth';
import Fifth from './Component/Batch/Fifth/Fifth';
import Sixth from './Component/Batch/Sixth/Sixth';
import Seventh from './Component/Batch/Seventh/Seventh';
import Eight from './Component/Batch/Eight/Eight';
import Nine from './Component/Batch/Nine/Nine';
import Ten from './Component/Batch/Ten/Ten';
import NusratSarminLipy from './Component/Profile/NusratSarminLipy/NusratSarminLipy';
import DrAbdullahAlMasud from './Component/Profile/DrAbdullahAlMasud/DrAbdullahAlMasud';
import MdShakhawatHossain from './Component/Profile/MdShakhawatHossain/MdShakhawatHossain';
import MdAlamgirMollah from './Component/Profile/MdAlamgirMollah/MdAlamgirMollah';
import TazizurRahman from './Component/Profile/TazizurRahman/TazizurRahman';
import MdAbirHossain from './Component/Profile/MdAbirHossain/MdAbirHossain';
import MdSohelChowdhury from './Component/Profile/MdSohelChowdhury/MdSohelChowdhury';
import SurajitKumarMandal from './Component/Profile/SurajitKumarMandal/SurajitKumarMandal';
import SaimaAfrinLiza from './Component/Profile/SaimaAfrinLiza/SaimaAfrinLiza';


function App() {
  return (
    <div className="App">

      
      <BrowserRouter>

      <Header></Header>
    <Routes>
      <Route path="/" exact element={<Home />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/FirstSemester" element={<FirstSemester />}/>
      <Route path="/SecondSemester" element={<SecondSemester />}/>
      <Route path="/ThirdSemester" element={<ThirdSemester />}/>
      <Route path="/FourthSemester" element={<FourthSemester />}/>
      <Route path="/FifthSemester" element={<FifthSemester />}/>
      <Route path="/SixsthSemester" element={<SixsthSemester />}/>
      <Route path="/SeventhSemester" element={<SeventhSemester />}/>
      <Route path="/EightSemester" element={<EightSemester />}/>
      <Route path="/1st-batch" element={<First />}/>
      <Route path="/2nd-batch" element={<Second />}/>
      <Route path="/3rd-batch" element={<Third />}/>
      <Route path="/4th-batch" element={<Fourth />}/>
      <Route path="/5th-batch" element={<Fifth />}/>
      <Route path="/6th-batch" element={<Sixth />}/>
      <Route path="/7th-batch" element={<Seventh />}/>
      <Route path="/8th-batch" element={<Eight />}/>
      <Route path="/9th-batch" element={<Nine />}/>
      <Route path="/10th-batch" element={<Ten />}/>

      <Route path="/nusrat-sharmin-lipy" element={<NusratSarminLipy />}/>
      <Route path="/dr-abdullah-al-masud" element={<DrAbdullahAlMasud />}/>
      <Route path="/md-shakhawat-hossain" element={<MdShakhawatHossain />}/>
      <Route path="/md-alamgir-mollah" element={<MdAlamgirMollah />}/>
      <Route path="/tazizur-rahman" element={<TazizurRahman />}/>
      <Route path="/md-abir-hossain" element={<MdAbirHossain />}/>
      <Route path="/md-sohel-chowdhury" element={<MdSohelChowdhury />}/>
      <Route path="/surajit-kumar-mondol" element={<SurajitKumarMandal />}/>
      <Route path="/saima-afrin-liza" element={<SaimaAfrinLiza />}/>
      
    </Routes>
    <Footer></Footer>
  </BrowserRouter>

    </div>
  );
}

export default App;
