import { combineReducers } from "redux";
import ordersConstants from 'api/orders_constants';

const orders = (state = {list: []}, action) => {
    initialState = state;
    switch (action.type) {
        case ordersConstants.GET_ORDERS_REQUEST:
            return {
                gettingOrders: true,
            };
        case ordersConstants.GET_ORDERS_SUCCESS:
            return {
                ...action.payload
            };
        case ordersConstants.GET_ORDERS_FAILURE:
            return {
                errors: action.payload
            };
        default:
            return state
    }
};
export default combineReducers({
    orders
});