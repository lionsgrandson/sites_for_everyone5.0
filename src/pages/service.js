import Menu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import Btn from "../components/btn/btn";
import "./service.css";
import { useTranslation } from "react-i18next";
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
      <Footer />
    </>
  );
}
