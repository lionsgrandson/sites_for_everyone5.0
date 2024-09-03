import "./imgCard.css";

export default function ImgCard(props) {
  return (
    <div className="imgCardDiv">
      <img
        src={props.imgSrc}
        className="imgCardImg"
        alt={`A snippet from the ${props.imgTitle} project`}
      />
      <h4 className="imgCardTxt">{props.imgTitle}</h4>
    </div>
  );
}
