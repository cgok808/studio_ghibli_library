import { Home, Books, Cart } from "./pages";
import { Footer, Nav } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<Books />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
