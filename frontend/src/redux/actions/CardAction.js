import axios from "axios";
import * as api from "../../api/dynamicCard.js"


export const fetchCardDatas = () => async (dispatch) => {
    try {
        const { data } = await api.getCardData();
        dispatch({ type: "ADD_DYNAMIC_CARD_DATA", payload: data })
        // console.log(data);
    } catch (error) {
        console.log(error)
    }
}