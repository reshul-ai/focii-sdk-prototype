import './App.css';
import Login from './pages/Login/Login';
import Invalid from './pages/Invalid/Invalid';
import Hostclass from './pages/Class/Class';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Studentview from './pages/Studentfe/Studview';



function App() {
  return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path='/host/class' element={<Hostclass />} />
                    <Route path='/student/class' element={<Studentview />} />
                    <Route path="*" element={<Invalid />} />
                </Routes>
        </BrowserRouter>
  );
}

export default App;
