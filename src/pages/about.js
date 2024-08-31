import Menu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import CTA from "../components/cta/cta";
import Team1 from "../img/Schwartzberg_Moshe.jpg";
import Team2 from "../img/ariHeadshot.png";
import "./about.css";
export default function About() {
  return (
    <div className="about-div">
      <Menu />
      <h1 className="aboutH1Team">Meet The Team</h1>
      <div className="imgDivTeam">
        {/* TODO add imgs of the other team mates, and creat a semi circle out of it */}
        <img
          alt="hedshots of the team"
          src={Team1}
          className="AboutTeamHeadshotImg firstImg"
        />
        <img
          alt="hedshots of the team"
          src={Team2}
          className="AboutTeamHeadshotImg secondImg"
        />
        <img
          alt="hedshots of the team"
          src={Team1}
          className="AboutTeamHeadshotImg ThirdImg"
        />
        <img
          alt="hedshots of the team"
          src={Team1}
          className="AboutTeamHeadshotImg FourthImg"
        />
        <img
          alt="hedshots of the team"
          src={Team1}
          className="AboutTeamHeadshotImg FifthImg"
        />
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
