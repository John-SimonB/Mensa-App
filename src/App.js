import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route, Navigate } from 'react-router-dom';
import Einstellungen from './pages/einstellungen';

import Karte from './pages/karte';

import Berlin from './pages/Berlin/berlin';

import HTW from './pages/Berlin/Unis/HTW';
import Charite from './pages/Berlin/Unis/Charite';
import BHT from './pages/Berlin/Unis/BHT';
import FU from './pages/Berlin/Unis/FU';
import HfM from './pages/Berlin/Unis/HfM';
import HfS from './pages/Berlin/Unis/HfS';
import HU from './pages/Berlin/Unis/HU';
import HWR from './pages/Berlin/Unis/HWR';
import KHS from './pages/Berlin/Unis/KHS';
import KHSB from './pages/Berlin/Unis/KHSB';
import TU from './pages/Berlin/Unis/TU';

import Potsdam from './pages/Potsdam/potsdam';
import FHP from './pages/Potsdam/Unis/FHP';
import FILMUNI from './pages/Potsdam/Unis/FILMUNI';
import UP from './pages/Potsdam/Unis/UP';

import SpeisePlan from './pages/speiseplan';


import MensaListe from './pages/mensaliste';

import Testjohn from './pages/testjohn';


function App() {
  
  return (
    <div className="App">
      <div className="background"/>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Berlin/>} render={() => (
              <Navigate to='/berlin'/>
          )}/>
          <Route path='/berlin' element={<Berlin/>}/>
          <Route path='/berlin/HTW' element={<HTW/>}/>
          <Route path='/berlin/HTW/:uniId' element={<SpeisePlan/>}/>
          <Route path='/berlin/Charite' element={<Charite/>}/>
          <Route path='/berlin/Charite/:uniId' element={<SpeisePlan/>}/>
          <Route path='/berlin/BHT' element={<BHT/>}/>
          <Route path='/berlin/BHT/:uniId' element={<SpeisePlan/>}/>
          <Route path='/berlin/FU' element={<FU/>}/>
          <Route path='/berlin/FU/:uniId' element={<SpeisePlan/>}/>
          <Route path='/berlin/HfM' element={<HfM/>}/>
          <Route path='/berlin/HfM/:uniId' element={<SpeisePlan/>}/>
          <Route path='/berlin/HfS' element={<HfS/>}/>
          <Route path='/berlin/HfS/:uniId' element={<SpeisePlan/>}/>
          <Route path='/berlin/HU' element={<HU/>}/>
          <Route path='/berlin/HU/:uniId' element={<SpeisePlan/>}/>
          <Route path='/berlin/HWR' element={<HWR/>}/>
          <Route path='/berlin/HWR/:uniId' element={<SpeisePlan/>}/>
          <Route path='/berlin/KHS' element={<KHS/>}/>
          <Route path='/berlin/KHS/:uniId' element={<SpeisePlan/>}/>
          <Route path='/berlin/KHSB' element={<KHSB/>}/>
          <Route path='/berlin/KHSB/:uniId' element={<SpeisePlan/>}/>
          <Route path='/berlin/TU' element={<TU/>}/> 
          <Route path='/berlin/TU/:uniId' element={<SpeisePlan/>}/>
          
          <Route path='/potsdam' element={<Potsdam/>} />
          <Route path='/potsdam/FHP' element={<FHP/>} />
          <Route path='/potsdam/FHP/:uniId' element={<SpeisePlan/>}/>
          <Route path='/potsdam/FILMUNI' element={<FILMUNI/>} />
          <Route path='/potsdam/FILMUNI/:uniId' element={<SpeisePlan/>}/>
          <Route path='/potsdam/UP' element={<UP/>} />
          <Route path='/potsdam/UP/:uniId' element={<SpeisePlan/>}/>

          <Route path='/einstellungen' element={<Einstellungen/>} />
          
          <Route path='/karte' element={<Karte/>} />

          <Route path='/mensaliste' element={<MensaListe/>} />

          <Route path='/test2' element={<Testjohn/>} />

          
        </Routes> 
    </div>    
  );
}

export default App;

