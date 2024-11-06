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
import Omnifood from "./pages/projects/omnifood";
import DY from "./pages/projects/danielYehuda";
import Smokin from "./pages/projects/smokin";
import AIpro from "./pages/projects/aiPro";
import LFZ from "./pages/projects/lfz";
import Maim from "./pages/projects/maim";
import TENE2 from "./pages/projects/idf2";
import TENE from "./pages/projects/idf";
import Mahogony from "./pages/projects/mahogony";
import EnterPlus from "./pages/projects/enterPlus";
import Shalom from "./pages/projects/shalom";
import ToraDojo from "./pages/projects/ToraDojo";
import FullBlogPostPage from "./components/blog/fullBlogPost";
import PatentNY from "./pages/projects/patentNY";
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
        <Route
          path="/full"
          element={<FullBlogPostPage />}
        />
        {/* 
        <Route
          path="/blog/new"
          element={<CretePost />}
        />
        <Route
          path="/deadProj"
          element={<DeadProject />}
        /> */}
        <Route
          path="/omnifood"
          element={<Omnifood />}
        />
        <Route
          path="/dy"
          element={<DY />}
        />
        <Route
          path="/smokin"
          element={<Smokin />}
        />
        <Route
          path="/aiPro"
          element={<AIpro />}
        />
        <Route
          path="/lfz"
          element={<LFZ />}
        />
        <Route
          path="/maim"
          element={<Maim />}
        />
        <Route
          path="/tene2"
          element={<TENE2 />}
        />
        <Route
          path="/tene1"
          element={<TENE />}
        />
        <Route
          path="/mahogony"
          element={<Mahogony />}
        />
        <Route
          path="/ep"
          element={<EnterPlus />}
        />
        <Route
          path="/shalom"
          element={<Shalom />}
        />
        <Route
          path="/toradojo"
          element={<ToraDojo />}
        />
        <Route
          path="/patNY"
          element={<PatentNY />}
        />
      </Routes>
    </Router>
  );
}

export default App;
