import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import InternshipForm from './pages/InternshipForm.jsx';
import UploadCertificate from './pages/Upload.jsx';
import './App.css'; // Import your CSS file


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/apply" element={<InternshipForm />} />
        <Route path="/upload" element={<UploadCertificate />} />
        <Route path="/application" element={<InternshipForm />} />
      </Routes>
    </Router>
  );
}

export default App;
