import "./aboutProject.css";
import Menu from "../menu/menu";
import Footer from "../footer/footer";

export default function AboutProject(props) {
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
            Visit the website
          </a>
          <ul>
            <li>Client: {props.client}</li>
            <li>Year: {props.year}</li>
            <li>Services: {props.services}</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
