import Menu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import Hero from "../components/hero/hero";
import OurProccess from "../components/OurProccess/OurProccess";
import PicXtext from "../components/picXtext/picXtext";
import moseHeadshot from "../img/mosheHeadshot.png";
import Projects from "../components/projects/projects";
import CTA from "../components/cta/cta";
import Btn from "../components/btn/btn";
import "./contact.css";
// import ContactForm from "..//contactForm/contactForm";
import ContactForm from "../components/contactForm/contactForm";

import "./home.css";
import { useTranslation } from "react-i18next";
import QnA from "../components/QnASection/QnA";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useEffect, useState } from "react";
function Home() {
  const { t } = useTranslation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Open the popup when the page loads
    const handlePageLoad = () => {
      setIsPopupOpen(true);
    };

    window.addEventListener("load", handlePageLoad);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);
  {
    /* <Popup open={isPopupOpen} onClose={() => setIsPopupOpen(false)} modal>
            <div>
              <h1 className="popUpHeader">
                {t("Leave your details and I will get back to you today!")}
              </h1>
              <ContactForm />
            </div>
          </Popup> */
  }
  // TODO make it only once per user session
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
              "Running a business is tough—let us lighten the load with custom web solutions. Our expert full-stack developers in Israel specialize in building custom CRMs, CMSs, and Shopify features, delivering scalable websites and guiding you every step of the way."
            )}
            imgAlt="Moshe Schwartzberg, full-stack developer in Israel, specializing in custom CRM, CMS, and Shopify development"
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
        <div className="cta-contact-cta">
          <CTA
            ctaH1={t("Ready to Start Your Jorney?")}
            // ctaP={t()}
            ctaBtn={t("Contact Us")}
            btnOnBtn={true}
          />
        </div>
        <div className="ctaContactForm">
          <ContactForm />
        </div>
        <Footer />
      </header>
    </div>
  );
}

export default Home;
