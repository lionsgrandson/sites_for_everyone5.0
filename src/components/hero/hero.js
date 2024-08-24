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
      <p>Innovative solutions for your business needs.</p>
      <div className="feat-hero">
        <MdSupportAgent
          color="var(--light-blue)"
          size="10rem"
        />
        <p>Costumer Support</p>
        <RxAccessibility
          color="var(--light-blue)"
          size="10rem"
        />
        <p>Accessibility</p>
        <FaEarthAfrica
          color="var(--light-blue)"
          size="10rem"
        />

        <p>Deployment + SEO</p>
        <MdDevicesOther
          color="var(--light-blue)"
          size="10rem"
        />
        <p>Responsivity</p>
        <IoIosEasel
          color="var(--light-blue)"
          size="10rem"
        />
        <p>Professional Design</p>
      </div>
    </>
  );
}
