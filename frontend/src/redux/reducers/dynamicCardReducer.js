
const intialState = {
    dynamicCardData: ""
}
const dynamicCardReducer = (state = intialState, action) => {
    switch (action.type) {
        case "ADD_DYNAMIC_CARD_DATA":
            return { ...state, dynamicCardData: action.payload };
        default:
            return state;
    }
};

export default dynamicCardReducer;