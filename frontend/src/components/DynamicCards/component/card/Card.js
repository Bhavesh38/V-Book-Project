import React from "react";
import { RxStar, RxStarFilled } from "react-icons/rx";
import "./card.css";
import CardCovePage from "../../assets/cover.jpg";

const Card = ({
  data,
  showReview = false,
  width = 300,
  height = 380,
  ...props
}) => {
  const { cardname, description, price } = data;
  return (
    <div className="cardContainer" style={{ width, height }}>
      <div className="cardImageContainer">
        <img
          src={data?.cardimage || CardCovePage}
          alt=""
          style={{
            width: `calc(${width}px - 20px)`,
            height: "220px",
            objectFit: "cover",
            marginTop: "10px",
          }}
        />
      </div>
      <div className="cardLabelContainer">
        <span className="cardTitle">{cardname}</span>
      </div>
      <div>
        <div className="cardDescriptionWrap">
          <span className="cardDescription">{description}</span>
        </div>
        <div className="cardPriceWrap">
          <span className="cardPrice">{price}$</span>
        </div>
        <div className="cardRatingWrap">
          {showReview && (
            <>
              {Array.from(
                { length: parseInt(data?.reviewAverage || 0) },
                (e, i) => {
                  return (
                    <span className="cardRating">
                      <RxStarFilled />
                    </span>
                  );
                }
              )}
              {Array.from(
                { length: 5 - parseInt(data?.reviewAverage || 0) },
                (e, i) => {
                  return (
                    <span className="cardRating">
                      <RxStar />
                    </span>
                  );
                }
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
