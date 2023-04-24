import logo from './logo.svg';
import './App.css';
import BasicDemo from './components/Header';
import Footer from './components/Footer';
import Acceuil from './components/Acceuil';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Formation from './components/Formation';
import Experience from './components/Experience';
import Certificat from './components/Certificat';
import Projet from './components/Projet';

function App() {
  return (
    <Router>

    <div className="App">
      <BasicDemo/>
      <Routes>
          <Route path="/" element={<Acceuil/>} />
          <Route path="Formation" element={<Formation/>} />
          <Route path="Experience" element={<Experience/>} />
          <Route path="Certificat" element={<Certificat/>} />
          <Route path="Projet" element={<Projet/>} />

        </Routes>
      <Footer/>
    </div>
    </Router>

  );
}

export default App;
