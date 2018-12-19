import ordersConstants from 'api/orders_constants';
import { showMessage } from "react-native-flash-message";

export const update_order = (ID, item) => {
    
    const request = (ID) => ({
        type: ordersConstants.UPDATE_ORDER_REQUEST,
        payload: {ID}
    })

    const success = (ID, item) => ({
        type: ordersConstants.UPDATE_ORDER_SUCCESS,
        payload: {ID, item}
    })

    const failure = (errors) => ({
        type: ordersConstants.UPDATE_ORDER_FAILURE,
        payload: {errors}
    })

    return (dispatch) => {
        dispatch(request(ID));
        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                
                resolve()
                // reject('err')
            }, 1000)
        }).then(() => {
            dispatch(success(ID, item))
            showMessage({
                message: `Order #${ID} has been updated`,
                type: "success",
                hideOnPress: true
            })
        })
        .catch(err => {
            
            showMessage({
                message: `Network error, try again!`,
                type: "danger",
                hideOnPress: true
            })
            
            return dispatch(failure([err]));
        })
    }
}