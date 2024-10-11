import Menu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import Hero from "../components/hero/hero";
import OurProccess from "../components/OurProccess/OurProccess";
import PicXtext from "../components/picXtext/picXtext";
import moseHeadshot from "../img/mosheHeadshot.png";
import Projects from "../components/projects/projects";
import CTA from "../components/cta/cta";
import "./contact.css";
// import ContactForm from "..//contactForm/contactForm";
import ContactForm from "../components/contactForm/contactForm";

import "./home.css";
import { useTranslation } from "react-i18next";
function Home() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <div className="home-hero">
          <Menu />
          <Hero />
          <PicXtext
            imgXTextImg={moseHeadshot}
            picXtexth1={t("Hi, I’m Moshe, CEO of Sites for Everyone")}
            textP={t(
              "Running a business is hard enough... let us help you take the load off. Our team of experiences developers, designers and Dev-Ops engineers is always ready to provide our client with the most sophisticated final product and the guidance throughout the building process."
            )}
            imgAlt="image of the CEO of the company - Moshe"
            WbtnQ={true}
            LORImg={false}
            aboutCls={true}
          />
          <OurProccess />
        </div>
        <Projects
          h2Proj={t("Results matter.")}
          h1Proj={t("See What We Mean")}
          exitNum="4"
        />

        <CTA
          ctaH1={t("Ready to Start Your Jorney?")}
          ctaP={t(
            "Our expert team is eager to collaborate with you on creating a stunning, high-performing website. Whether you need a fresh design, improved functionality, or expert digital marketing strategies, we've got you covered. Contact us today for a free consultation and let's bring your vision to life"
          )}
          ctaBtn={t("Contact Us")}
          btnOnBtn={true}
        />
        <div className="ctaContactForm">
          <ContactForm />
        </div>
        <Footer />
      </header>
    </div>
  );
}

export default Home;
