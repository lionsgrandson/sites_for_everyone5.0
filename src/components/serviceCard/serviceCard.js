import "./serviceCard.css";

export default function ServiceCard(props) {
  return (
    <div className={`section ${props.classCard} ${props.classCard2}`}>
      <h1>{props.h1ServiceCard}</h1>
      <p>{props.pServiceCard}</p>
      <img
        alt={props.imgServiceAlt}
        src={props.imgServiceSrc}
      />
    </div>
  );
}
