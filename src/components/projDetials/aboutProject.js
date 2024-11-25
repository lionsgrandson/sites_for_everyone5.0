import "./aboutProject.css";
import Menu from "../menu/menu";
import Footer from "../footer/footer";
import { useTranslation } from "react-i18next";
import MoreProj from "../moreProject/moreProj";
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
          <div className="projScreenshots">
            <a
              href={props.linkHref}
              target="_blank"
            >
              <img
                src={props.projimg1}
                className="projScreen1"
                alt={`A screenshot from the ${props.projName} website`}
              />
            </a>
            <a
              href={props.linkHref}
              target="_blank"
            >
              <img
                src={props.projimg2}
                className="projScreen2"
                alt={`A screenshot from the ${props.projName} website`}
              />
            </a>
          </div>
          <h3 className="aboutTag">/ {t("About The Project")}</h3>
          <p className="projTagline">{props.projText}</p>
        </div>

        <div className="projDetialsA">
          <a
            href={props.linkHref}
            target="_blank"
          >
            {t("Visit the website")}
          </a>
        </div>
        <div className="projDetails">
          <ul>
            <li>
              {t("Client")}:<div>{props.client}</div>
            </li>
            <li>
              {t("Year")}: <div>{props.year}</div>
            </li>
            <li>
              {t("Services")}: <div>{props.services}</div>
            </li>
          </ul>
        </div>
      </div>
      <MoreProj />
      <Footer />
    </div>
  );
}
