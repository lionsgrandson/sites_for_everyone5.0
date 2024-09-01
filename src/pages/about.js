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
        ctaP="Our mission is to empower small and medium-sized businesses with custom web solutions that enhance their online presence. We prioritize integrity and personalized service, aiming to be the go-to choice for unique digital experiences and innovative mobile app development. "
        ctaCCls={true}
        ctaSndCls={true}
      />
      <CTA
        ctaH1="Our"
        ctaH1Spn="Story"
        ctaP="Our web development company was born from a high school passion project that blossomed into a full-fledged enterprise. What started as a one-man operation during my teenage years has evolved into a dynamic team of skilled professionals, many of whom I met during my military service in various software development units. The journey wasn't without its challenges; as a young entrepreneur, I faced skepticism due to my age. However, through perseverance and consistently delivering quality work, I gradually built trust and credibility in the industry. "
        ctaP2="Today, our company stands out by offering truly bespoke solutions. We eschew templates in favor of custom-built websites using programming languages, providing a personalized touch that sets us apart in a crowded market. This approach, combined with our diverse team of developers and designers, allows us to create unique digital experiences for our clients. Our growth from a high school side hustle to a professional outfit with specialized roles and external marketing support is a testament to our commitment to excellence and adaptability in the ever-evolving world of web development "
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
