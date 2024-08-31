// text text button
import "./cta.css";
import Btn from "../btn/btn";
export default function CTA(props) {
  return (
    <div className="cta-div">
      <h1 className="cta-h1">{props.ctaH1}</h1>
      <p className="cta-p">{props.ctaP}</p>
      <Btn
        bntTxt={props.ctaBtn}
        WoBcls={true}
        wAoN={true}
      />
    </div>
  );
}
