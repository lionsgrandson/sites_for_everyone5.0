import "./hero.css";
import { IoIosEasel } from "react-icons/io";
import { MdSupportAgent, MdDevicesOther } from "react-icons/md";
import { FaEarthAfrica } from "react-icons/fa6";
import { RxAccessibility } from "react-icons/rx";

export default function Hero() {
  return (
    <>
      <h1>
        Sites for <span className="highlight">Everyone</span>
      </h1>
      <p className="bitTextHero">Innovative solutions for your business needs.</p>
      <div className="feat-hero">
        <div>
          <IoIosEasel
            color="var(--light-blue)"
            size="10rem"
          />
          <p className="feat-home-text">Professional Design</p>
        </div>
        <div>
          <MdDevicesOther
            color="var(--light-blue)"
            size="10rem"
          />
          <p className="feat-home-text">Responsivity</p>
        </div>
        <div>
          <FaEarthAfrica
            color="var(--light-blue)"
            size="10rem"
          />

          <p className="feat-home-text">Deployment + SEO</p>
        </div>

        <div>
          <RxAccessibility
            color="var(--light-blue)"
            size="10rem"
          />
          <p className="feat-home-text">Accessibility</p>
        </div>
        <div>
          <MdSupportAgent
            color="var(--light-blue)"
            size="10rem"
          />
          <p className="feat-home-text">Costumer Support</p>
        </div>
      </div>
    </>
  );
}
