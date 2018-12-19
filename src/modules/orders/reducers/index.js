
import ordersConstants from 'api/orders_constants';
import { showMessage } from "react-native-flash-message";

export default orders = (state = {list: []}, action) => {
    initialState = state;
    switch (action.type) {
        // GET LIST OF ORDERS
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

        // DELETE ORDER
        case ordersConstants.DELETE_ORDER_REQUEST:
            return {
                deleting: action.payload.ID,
                ...state,
            };

        case ordersConstants.DELETE_ORDER_SUCCESS:
            const ID = action.payload.ID;
            const filtered = state.list.filter((x) => {
                return x.ID !== ID;
            })
            return {
                deletedOrder: ID,
                list: filtered
            };
        
        case ordersConstants.DELETE_ORDER_FAILURE:
            return {
                errors: action.payload,
                ...state,
                deleting: null,

            };

        // UPDATE ORDER
        case ordersConstants.UPDATE_ORDER_REQUEST:
            return {
                updating: action.payload.ID,
                ...state,
            };

        case ordersConstants.UPDATE_ORDER_SUCCESS:
            const updatedOrders = state.list.map((x) => {
                if(x.ID === action.payload.ID) {
                    return action.payload.item
                }
                return x;
            })
            return {
                updatedOrder: ID,
                list: updatedOrders
            };
        
        case ordersConstants.UPDATE_ORDER_FAILURE:
            return {
                ...state,
                errors: action.payload,
                updating: null,

            };

        // ADD ORDER
        case ordersConstants.ADD_ORDER_REQUEST:
            return {
                adding: true,
                ...state,
            };

        case ordersConstants.ADD_ORDER_SUCCESS:
            const newID = +state.list[state.list.length - 1].ID + 1;
            const newOrders =[...state.list, {
                ID: `${newID}`,
                ...action.payload.item
            }]
            showMessage({
                message: `Order has been added with the ID ${newID}`,
                type: "success",
                hideOnPress: true
            })
            return {
                addedOrder: newID,
                list: newOrders
            };
        
        case ordersConstants.ADD_ORDER_FAILURE:
            return {
                ...state,
                errors: action.payload,
                adding: null,

            };

        default:
            return state
    }
};