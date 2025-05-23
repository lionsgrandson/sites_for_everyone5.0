import "./imgCard.css";

export default function ImgCard(props) {
  return (
    <div className="imgCardDiv">
      <a href={props.linkHref}>
        <img
          src={props.imgSrc}
          className="imgCardImg"
          alt={`A snippet from the ${props.imgTitle} project`}
        />
      </a>
      <h4 className="imgCardTxt">{props.imgTitle}</h4>
      {props.fewWords != null && <p>{props.fewWords}</p>}
    </div>
  );
}
