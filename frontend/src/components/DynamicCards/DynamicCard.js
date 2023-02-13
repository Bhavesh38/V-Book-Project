import React, { useCallback, useEffect, useState } from "react";
import Card from "./component/card/Card";
import { cardData } from "./CardData.js"
import CustomSlider from "./component/customSlider/Slider";

function DynamicCard() {
    const renderDynamicCard = () => {
        return cardData.map((data, i) => {
            return (
                <div style={{ marginLeft: "12px" }}>
                    <Card data={data} showReview key={i} />
                </div>
            );
        });
    };

    return (
        <div className="App">
            <CustomSlider id="card-slider">{renderDynamicCard()}</CustomSlider>
        </div>
    );
}

export default DynamicCard;
