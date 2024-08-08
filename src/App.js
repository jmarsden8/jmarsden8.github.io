import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";

function App() {
  return (
    <Router>
      <Header />
      <div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-500 to-gray-800">
        <main className="p-8 text-black">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
