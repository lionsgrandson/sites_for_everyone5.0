import "./aboutProject.css";
import Menu from "../menu/menu";
import Footer from "../footer/footer";
import { useTranslation } from "react-i18next";

export default function AboutProject(props) {
  const { t } = useTranslation();

  return (
    <div>
      <Menu />
      <div className="projDiv">
        <div className="projHeader">
          <img
            className="projLogo"
            src={props.projLogo}
            alt={`${props.projName} logo`}
          />
          <p className="projTagline">{props.projText}</p>
        </div>

        <div className="projScreenshots">
          <img
            src={props.projimg1}
            className="projScreen1"
            alt={`A screenshot from the ${props.projName} website`}
          />
          <img
            src={props.projimg2}
            className="projScreen2"
            alt={`A screenshot from the ${props.projName} website`}
          />
        </div>

        <div className="projDetails">
          <a
            href={props.linkHref}
            target="_blank"
          >
            {t("Visit the website")}
          </a>
          <ul>
            <li>
              {t("Client")}: {props.client}
            </li>
            <li>
              {t("Year")}: {props.year}
            </li>
            <li>
              {t("Services")}: {props.services}
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
