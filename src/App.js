import Menu from "./components/menu/menu";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import AboutHome from "./components/about_home/aboutHome";
import OurProccess from "./components/OurProccess/OurProccess";
import PicXtext from "./components/picXtext/picXtext";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="home-hero">
          <Menu />
          <Hero />
          <AboutHome />
          <OurProccess />
          
        </div>
        {/* <Footer/> */}
      </header>
    </div>
  );
}

export default App;
