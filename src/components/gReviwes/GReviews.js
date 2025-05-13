import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

function GReviews() {
  const featurableWidgetId = "a534fb67-9511-4753-806f-671b133a6f72";

  return (
    <>
      <h1 className="">Top Reviews</h1>
      <ReactGoogleReviews layout="carousel" featurableId={featurableWidgetId} />
    </>
  );
}
export default GReviews;
