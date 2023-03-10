import React, { useCallback, useEffect, useState } from "react";
import Card from "./component/card/Card";
import { cardData } from "./CardData.js"
import CustomSlider from "./component/customSlider/Slider";

function DynamicCard({ dynamicCardData }) {
    const [newData, setNewData] = useState(cardData);
    useEffect(() => {
        if (dynamicCardData) {
            setNewData(dynamicCardData);

        }
    }, [dynamicCardData])
    const renderDynamicCard = () => {

        return newData.map((data, i) => {
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
