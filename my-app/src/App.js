import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      {/* <Route path="/register" element={<Register />}></Route> */}
      {/* <Route path="/login" element={<Login />}></Route> */}
      {/* <Route path="/blog/:id" element={<Blog />}></Route> */}
      {/* <Route path="/create" element={<Create />}></Route> */}
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
