import Menu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import Btn from "../components/btn/btn";
import "./service.css";
import { useTranslation } from "react-i18next";
import PicXtext from "../components/picXtext/picXtext";
import heroimg from "../img/service-Hero.png";
import CTA from "../components/cta/cta";
import ServiceCard from "../components/serviceCard/serviceCard";
import textOnScreen from "../img/service/text program on computer screen.png";
export default function Services() {
  const { t } = useTranslation();
  return (
    <>
      <div className="heroSection">
        <Menu />
        <div className="servicesDiv">
          <h1>{t("Your one stop solution for web needs")}.</h1>
          <p>
            {t(
              "from initial design to marketing, we provide al the tools necessary to grow you digital business"
            )}
          </p>
          <div className="btn-div">
            <Btn
              btnHref="/contact"
              bntTxt={t("Get Started")}
            />
          </div>
        </div>
      </div>
      <div className="serviceCardsSection">
        <ServiceCard
          h1ServiceCard="Website Development & Maintenance"
          pServiceCard="No matter how big or small your website project, we have the expertise to deliver exceptional results. From a single landing page to complex web apps, from initial concept to ongoing maintenance, we provide comprehensive website development and support services."
          imgServiceAlt="text program on computer screen"
          imgServiceSrc={textOnScreen}
        />
        <ServiceCard
          h1ServiceCard="Website Development & Maintenance"
          pServiceCard="No matter how big or small your website project, we have the expertise to deliver exceptional results. From a single landing page to complex web apps, from initial concept to ongoing maintenance, we provide comprehensive website development and support services."
          imgServiceAlt="text program on computer screen"
          imgServiceSrc={textOnScreen}
        />
        <ServiceCard
          h1ServiceCard="Website Development & Maintenance"
          pServiceCard="No matter how big or small your website project, we have the expertise to deliver exceptional results. From a single landing page to complex web apps, from initial concept to ongoing maintenance, we provide comprehensive website development and support services."
          imgServiceAlt="text program on computer screen"
          imgServiceSrc={textOnScreen}
        />
        <ServiceCard
          h1ServiceCard="Website Development & Maintenance"
          pServiceCard="No matter how big or small your website project, we have the expertise to deliver exceptional results. From a single landing page to complex web apps, from initial concept to ongoing maintenance, we provide comprehensive website development and support services."
          imgServiceAlt="text program on computer screen"
          imgServiceSrc={textOnScreen}
        />
        <ServiceCard
          h1ServiceCard="Website Development & Maintenance"
          pServiceCard="No matter how big or small your website project, we have the expertise to deliver exceptional results. From a single landing page to complex web apps, from initial concept to ongoing maintenance, we provide comprehensive website development and support services."
          imgServiceAlt="text program on computer screen"
          imgServiceSrc={textOnScreen}
        />
      </div>
      <CTA
        ctaH1={t("Ready to Start Your Jorney?")}
        ctaBtn={t("Contact Us")}
        wAoN={true}
        btnOnBtn={true}
        ctaP={t(
          "Our expert team is eager to collaborate with you on creating a stunning, high-performing website. Whether you need a fresh design, improved functionality, or expert digital marketing strategies, we've got you covered. Contact us today for a free consultation and let's bring your vision to life"
        )}
      />
      <Footer />
    </>
  );
}
