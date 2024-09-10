import Menu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import Btn from "../components/btn/btn";
import "./service.css";
import { useTranslation } from "react-i18next";
import PicXtext from "../components/picXtext/picXtext";
import CTA from "../components/cta/cta";
export default function Services() {
  const { t } = useTranslation();
  return (
    <>
      <Menu />
      <div className="servicesDiv">
        <h1>{t("Your one stop solution for web needs")}.</h1>
        <p>
          {t(
            "from initial design to marketing, we provide al the tools necessary to grow you digital business"
          )}
        </p>
        <Btn
          btnHref="/contact"
          bntTxt={t("Get Started")}
        />
      </div>
      <div>
        <PicXtext
          picXtexth1={t("Hi, I’m Moshe, CEO of Sites for Everyone")}
          wIoN={true}
          textP={t(
            "Running a business is hard enough... let us help you take the load off. Our team of experiences developers, designers and Dev-Ops engineers is always ready to provide our client with the most sophisticated final product and the guidance throughout the building process."
          )}
          WbtnQ={true}
          LORImg={false}
          aboutCls={true}
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
