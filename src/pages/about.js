import Menu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import CTA from "../components/cta/cta";
import Moshe from "../img/Schwartzberg_Moshe.jpg";
import Ari from "../img/AriHeadshot.jpg";
import Faina from "../img/fainaHeadshot.jpg";
import Ofer from "../img/oferHeadshotjpg.jpg";
import Nitzan from "../img/NitzanHeadshot.jpeg";
import "./about.css";
export default function About() {
  return (
    <div className="about-div">
      <Menu />
      <h1 className="aboutH1Team">Meet The Team</h1>
      <div className="imgDivTeam">
        {/* TODO  creat a semi circle out of it */}
        <div className="innderDivImg">
          <img
            alt="hedshots of Moshe - Head Dev and business owner"
            src={Moshe}
            className="AboutTeamHeadshotImg firstImg"
          />
          <label>Head Developer, CEO</label>
        </div>
        <div className="innderDivImg">
          <img
            alt="hedshots of Ari - Developer and Designer"
            src={Ari}
            className="AboutTeamHeadshotImg secondImg"
          />
          <label>Developer, Designer</label>
        </div>
        <div className="innderDivImg">
          <img
            alt="hedshots of Faina - SEO Manager"
            src={Faina}
            className="AboutTeamHeadshotImg ThirdImg"
          />
          <label>SEO Manager</label>
        </div>
        <div className="innderDivImg">
          <img
            alt="hedshots of Ofer - Designer"
            src={Ofer}
            className="AboutTeamHeadshotImg FourthImg"
          />
          <label>Designer</label>
        </div>
        <div className="innderDivImg">
          <img
            alt="hedshots of the team"
            src={Nitzan}
            className="AboutTeamHeadshotImg FifthImg"
          />
          <label>Cheff</label>
        </div>
      </div>
      <CTA
        ctaH1="Our "
        ctaH1Spn="Mission"
        ctaP="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu nibh ut sapien bibendum pretium vitae eu arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu."
        ctaCCls={true}
        ctaSndCls={true}
      />
      <CTA
        ctaH1="Our"
        ctaH1Spn="Story"
        ctaP="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu nibh ut sapien bibendum pretium vitae eu arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu nibh ut sapien bibendum pretium vitae eu arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu."
        ctaCCls={true}
      />
      <CTA
        ctaH1="Call Us Today"
        ctaP="Our expert team is eager to collaborate with you on creating a stunning, high-performing website. Whether you need a fresh design, improved functionality, or expert digital marketing strategies, we've got you covered. 
Contact us today for a free consultation and let's bring your vision to life"
        // ctaCCls={true}
        btnOnBtn={true}
        ctaBtn="Contact Us"
        florGr={true}
      />
      <Footer />
    </div>
  );
}
