import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Btn from "../btn/btn";
import "./OurProccess.css";
import { useTranslation } from "react-i18next";

export default function OurProTitle() {
  const { t } = useTranslation();

  return (
    <>
      <div className="title-our">
        <h3 className="titlel-h3-our">{t("From start to finish")}</h3>
        <h1 className="titlel-h1-our"> {t("Our Process")}</h1>
        <p className="titlel-p-our">
          {t(
            "We specialize in delivering the complete package. see what our process consists of and what it’s like to work with us"
          )}
        </p>
        <div className="btn-contact-proc">
          <Btn
            bntTxt={t("Get a quote")}
            btnHref="/contact"
          />
        </div>
        {/* <HiOutlineDotsHorizontal
          color="rgba(92, 72, 173, 1)"
          size="212px"
        /> */}
        <p className="p-dots"> . . .</p>
        <h2 className="h2-build-win-web">
          {t("how do we build the best website for you?")}
        </h2>
      </div>
    </>
  );
}
