import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Service from "./pages/service";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Thankyou from "./pages/thankyou";
import TermnCond from "./pages/termsNConditions";
import Privacy from "./pages/privacy";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/service"
          element={<Service />}
        />
        <Route
          path="/portfolio"
          element={<Portfolio />}
        />
        <Route
          path="/blog"
          element={<Blog />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/thankyou"
          element={<Thankyou />}
        />
        <Route
          path="/terms"
          element={<TermnCond />}
        />
        <Route
          path="/privacyLOL"
          element={<Privacy />}
        />
        {/*
         <Route
          path="/blog/new"
          element={<CretePost />}
        />
        <Route
          path="/full"
          element={<FullBlogPostPage />}
        />
        <Route
          path="/deadProj"
          element={<DeadProject />}
        /> */}
      </Routes>
    </Router>
  );
}

export default App;
