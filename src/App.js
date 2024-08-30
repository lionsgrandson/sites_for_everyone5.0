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
            picXtexth1="Design"
            textP="Great design starts with you. transform your vision into captivating digital experiences. We craft stunning layouts that not only look great but also connect with your audience."
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
