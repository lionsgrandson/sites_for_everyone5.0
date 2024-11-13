// text text button
import "./cta.css";
import Btn from "../btn/btn";
export default function CTA(props) {
  return (
    <div
      className={`cta-div ${props.ctaCCls && "ourMission"}   ${
        props.ctaSndCls ? "FirstCls" : "SecondCls"
      } ${props.florGr && "flex"}`}
    >
      <h1 className={`cta-h1 ${props.ctaCCls && "ourMission"}`}>
        {props.ctaH1}
        <span> {props.ctaH1Spn}</span>
      </h1>
      <div>
        {props.ctaP != null && (
          <p
            className={`cta-p ${props.ctaCCls && "ourMission"} 
        ${props.ctaSndCls ? "FirstCls" : "SecondCls"} ${props.florGr && "flex"}
        
        `}
          >
            {props.ctaP}
            <br />
            <br />
            {props.ctaP2}
          </p>
        )}

        {props.btnOnBtn && (
          <Btn
            bntTxt={props.ctaBtn}
            WoBcls={true}
            // wAoN={true}
            btnHref="/contact"
          />
        )}
      </div>
    </div>
  );
}
