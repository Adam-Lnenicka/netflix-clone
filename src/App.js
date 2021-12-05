import React from "react";
import "./styles/index.scss";
import Home from "./pages/Home";
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import EditMovie from "./components/EditMovie";

const App = () => {
  return (
    <>
      {/* <Home /> */}

      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/hi">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<ContactForm />} />
          <Route path="/hi" element={<EditMovie />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
