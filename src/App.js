import Menu from "./components/menu/menu";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import AboutHome from "./components/about_home/aboutHome";
import OurProccess from "./components/OurProccess/OurProccess";
import PicXtext from "./components/picXtext/picXtext";
import moseHeadshot from "./img/mosheHeadshot.png";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="home-hero">
          <Menu />
          <Hero />
          <PicXtext
            imgXTextImg={moseHeadshot}
            picXtexth1="Hi, I’m Moshe, CEO of Sites for Everyone"
            textP="Running a business is hard enough... let us help you take the load off. Our team of experiences developers, designers and Dev-Ops engineers is always ready to provide our client with the most sophisticated final product and the guidance throughout the building process.  "
            WbtnQ={true}
            LORImg={false}
            aboutCls={true}
          />
          <OurProccess />
        </div>
        {/* <Footer/> */}
      </header>
    </div>
  );
}

export default App;
