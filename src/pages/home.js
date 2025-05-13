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
import { Helmet } from "react-helmet-async";
import GReviews from "../components/gReviwes/GReviews";
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
      <Helmet>
        <title>Custom Code & App Solutions | Moshe Schwartzberg</title>
        <meta
          name="description"
          content="Code crafted, dreams delivered. Moshe Schwartzberg builds custom apps, CRMs, and CMSs with full-stack expertise."
        />
        <meta
          property="og:title"
          content="Custom Code & App Solutions | Moshe Schwartzberg"
        />
        <meta
          property="og:description"
          content="Expert full-stack development for custom apps, CRMs, and CMSs."
        />
        <meta
          property="og:image"
          content="https://mosheschwartzberg.com/logo192.png"
        />
        <meta
          name="twitter:title"
          content="Custom Code & App Solutions | Moshe Schwartzberg"
        />
        <meta
          name="twitter:description"
          content="Expert full-stack development for custom apps, CRMs, and CMSs."
        />
        <meta
          name="twitter:image"
          content="https://mosheschwartzberg.com/logo192.png"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Custom Code Development",
            provider: {
              "@type": "Person",
              name: "Moshe Schwartzberg",
            },
            description:
              "Custom app design, responsive code solutions, SEO-driven deployment, accessible development, and tailored CRM creation.",
          })}
        </script>
      </Helmet>
      <header className="App-header">
        <div className="home-hero">
          <Menu />
          <Hero />

          <PicXtext
            imgXTextImg={moseHeadshot}
            picXtexth1={t("Hi, I’m Moshe, CEO of CodeCrafter")}
            textP={t(
              "Running a business is hard—let us simplify it with custom web solutions. For over 9 years, our skilled full-stack developers in Israel have built tailored CRMs, CMSs, and Shopify features, creating scalable websites. With many thrilled clients and our finest work displayed on our site, we support you every step to success."
            )}
            imgAlt="Moshe Schwartzberg, full-stack developer in Israel, specializing in custom CRM, CMS, and Shopify development"
            WbtnQ={true}
            LORImg={false}
            aboutCls={true}
          />
          <GReviews />

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
