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
import gearPerson from "../img/service/Accessibility Tools.png";
import searchBox from "../img/service/Rectangle 23.png";
import omnifood from "../img/omnifood/omnigoofScreenshot1.png";
import cloud from "../img/service/image 28.png";
import teamworking from "../img/service/Dev team working on a project.png";
import { Masonry } from "@mui/lab";
import { Paper } from "@mui/material";
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
      {/* <div className="serviceCardsSection">
        <ServiceCard
          h1ServiceCard="Website Development & Maintenance"
          pServiceCard="No matter how big or small your website project, we have the expertise to deliver exceptional results. From a single landing page to complex web apps, from initial concept to ongoing maintenance, we provide comprehensive website development and support services."
          imgServiceAlt="text program on computer screen"
          imgServiceSrc={textOnScreen}
          classCard="purp"
          classCard2="webdev"
        />
        <ServiceCard
          h1ServiceCard="WordPress Development"
          pServiceCard="Sometimes there’s not need to overcomplicate. Get the right package according to your budget."
        />
        <ServiceCard h1ServiceCard="16 / 6 Support" />
        <ServiceCard
          imgServiceAlt="group of devs working"
          imgServiceSrc={teamworking}
          classCard="groupWorking"
        />

        <ServiceCard
          h1ServiceCard="SEO Optimization "
          pServiceCard="Don't let your website get lost in the digital crowd. Our SEO services will help you rank higher in search engine results, making it easier for people to discover your business."
          imgServiceAlt="a rectangle with the text search"
          imgServiceSrc={searchBox}
          classCard="seoCard"
        />
        <ServiceCard
          h1ServiceCard="Accessibility"
          pServiceCard="Everyone deserves to see you website. 
we ensure that all users can
navigate and interact with your content."
          imgServiceAlt="a small person that a gear next to them"
          imgServiceSrc={gearPerson}
          classCard="access"
        />
        <ServiceCard
          h1ServiceCard="Cloud Hosting"
          pServiceCard="Deploy your websites securely and reliably on the cloud."
          imgServiceAlt="a picture of a cloud"
          imgServiceSrc={cloud}
          classCard="cloud"
        />
        <ServiceCard
          h1ServiceCard="Professional Logo & Website Design"
          pServiceCard="Make a statement with a professional website and logo that showcase your best self. Our designers will craft a cohesive brand identity that resonates with your target audience."
          imgServiceAlt="text program on computer screen"
          imgServiceSrc={omnifood}
          classCard="purp"
          classCard2="desLog"
        />
      </div> */}
      <Masonry
        columns={3}
        spacing={5}
        sx={{
          margin: "2rem 0rem",
        }}
      >
        <Paper
          sx={{
            borderRadius: "25px",
            height: "75rem",
            boxShadow: "0px 0px 30px 0px rgba(105, 174, 231, 0.2)",
            background:
              "conic-gradient( from 135deg at 50% 50%,    #889be1 0deg,    #a26ce4 180deg,    #889be1 360deg)",
          }}
        >
          <ServiceCard
            h1ServiceCard="Website Development & Maintenance"
            pServiceCard="No matter how big or small your website project, we have the expertise to deliver exceptional results. From a single landing page to complex web apps, from initial concept to ongoing maintenance, we provide comprehensive website development and support services."
            imgServiceAlt="text program on computer screen"
            imgServiceSrc={textOnScreen}
            classCard="purp"
            classCard2="webdev"
          />
        </Paper>
        <Paper
          sx={{
            borderRadius: "25px",
            height: "35rem",
            boxShadow: "0px 0px 30px 0px rgba(105, 174, 231, 0.2)",
          }}
        >
          <ServiceCard
            h1ServiceCard="WordPress Development"
            pServiceCard="Sometimes there's not need to overcomplicate. Get the right package according to your budget."
            classCard="wpdev"
          />
        </Paper>
        <Paper
          sx={{
            borderRadius: "25px",
            height: "15rem",
            boxShadow: "0px 0px 30px 0px rgba(105, 174, 231, 0.2)",
          }}
        >
          <ServiceCard
            h1ServiceCard="16 / 6 Support"
            classCard="six16"
          />
        </Paper>
        <Paper
          sx={{
            borderRadius: "25px",
            height: "35rem",
            boxShadow: "0px 0px 30px 0px rgba(105, 174, 231, 0.2)",
            background:
              "linear-gradient(115.49deg, #000000 2.53%, #545454 99.18%)",
          }}
        >
          <ServiceCard
            h1ServiceCard="SEO Optimization "
            pServiceCard="Don't let your website get lost in the digital crowd. Our SEO services will help you rank higher in search engine results, making it easier for people to discover your business."
            imgServiceAlt="a rectangle with the text search"
            imgServiceSrc={searchBox}
            classCard="seoCard"
          />
        </Paper>
        <Paper
          sx={{
            borderRadius: "25px",
            height: "35rem",
            boxShadow: "0px 0px 30px 0px rgba(105, 174, 231, 0.2)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <ServiceCard
            imgServiceAlt="group of devs working"
            imgServiceSrc={teamworking}
            classCard="groupWorking"
          />
        </Paper>
        <Paper
          sx={{
            borderRadius: "25px",
            height: "55rem",
            overflow: "clip",
            boxShadow: "0px 0px 30px 0px rgba(105, 174, 231, 0.2)",
            background:
              "conic-gradient( from 135deg at 50% 50%,    #889be1 0deg,    #a26ce4 180deg,    #889be1 360deg)",
          }}
        >
          <ServiceCard
            h1ServiceCard="Professional Logo & Website Design"
            pServiceCard="Make a statement with a professional website and logo that showcase your best self. Our designers will craft a cohesive brand identity that resonates with your target audience."
            imgServiceAlt="text program on computer screen"
            imgServiceSrc={omnifood}
            classCard="purp"
            classCard2="desLog"
          />
        </Paper>
        <Paper
          sx={{
            borderRadius: "25px",
            height: "35rem",
            boxShadow: "0px 0px 30px 0px rgba(105, 174, 231, 0.2)",
          }}
        >
          <ServiceCard
            h1ServiceCard="Cloud Hosting"
            pServiceCard="Deploy your websites securely and reliably on the cloud."
            imgServiceAlt="a picture of a cloud"
            imgServiceSrc={cloud}
            classCard="cloud"
          />
        </Paper>
        <Paper
          sx={{
            borderRadius: "25px",
            height: "35rem",
            boxShadow: "0px 0px 30px 0px rgba(105, 174, 231, 0.2)",
          }}
        >
          <ServiceCard
            h1ServiceCard="Accessibility"
            pServiceCard="Everyone deserves to see you website. We ensure that all users can navigate and interact with your content."
            imgServiceAlt="a small person that a gear next to them"
            imgServiceSrc={gearPerson}
            classCard="access"
          />
        </Paper>
      </Masonry>
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
