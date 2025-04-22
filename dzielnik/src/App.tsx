import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import Navbar from './components/Navbar';
import MapPage from "./pages/MapPage.tsx";
import Register from "./pages/Register.tsx";

function App() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    );
  }
  
  export default App;
