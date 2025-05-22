// GReviews.js
import React from "react";
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css"; // Default module CSS
import "./gre.css"; // Custom mobile-friendly CSS

// Component to display Google Reviews in a carousel layout
const GReviews = () => {
  // Featurable widget ID for fetching reviews
  const featurableWidgetId = "a534fb67-9511-4753-806f-671b133a6f72";

  // Log the number and content of reviews for debugging
  const handleReviewsLoad = (reviews) => {
    console.log("Total reviews received:", reviews.length);
    console.log("Reviews content:", reviews); // Log full reviews array
    return reviews; // Return reviews for rendering
  };

  return (
    <section className="reviews-section">
      <h1 className="reviews-heading">Top Reviews</h1>
      <div className="reviews-container">
        <ReactGoogleReviews
          layout="carousel" // Use carousel layout
          featurableId={featurableWidgetId} // Unique ID for Featurable API
          reviewReadMoreClassName="read-more" // Custom class for "Read more" link
          onReviewsLoad={handleReviewsLoad} // Debug review count and content
        />
      </div>
    </section>
  );
};

export default GReviews;
