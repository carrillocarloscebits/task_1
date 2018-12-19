import ordersConstants from 'api/orders_constants';
import { showMessage, hideMessage } from "react-native-flash-message";

const orders = [
    {
        ID: '100050',
        customer: 'Jane',
        amount: '11',
        time: '8:30am',
        date: '19/12/2018'
    },
    {
        ID: '100051',
        customer: 'Mark',
        amount: '50',
        time: '8:30am',
        date: '19/12/2018'
    },
    {
        ID: '100052',
        customer: 'Mike',
        amount: '25',
        time: '8:30am',
        date: '19/12/2018'
    },
    {
        ID: '100053',
        customer: 'Carlos',
        amount: '40',
        time: '8:30am',
        date: '19/12/2018'
    },
    {
        ID: '100054',
        customer: 'Mark',
        amount: '17',
        time: '8:30am',
        date: '19/12/2018'
    },
    {
        ID: '100055',
        customer: 'Joe',
        amount: '3',
        time: '8:30am',
        date: '19/12/2018'
    },
    {
        ID: '100056',
        customer: 'Carlos',
        amount: '15',
        time: '8:30am',
        date: '19/12/2018'
    },
    {
        ID: '100057',
        customer: 'Joe',
        amount: '85',
        time: '8:30am',
        date: '19/12/2018'
    },
    {
        ID: '100058',
        customer: 'Carlos',
        amount: '30',
        time: '8:30am',
        date: '19/12/2018'
    },
];

export const get_orders_list = () => {
    
    const request = () => ({
        type: ordersConstants.GET_ORDERS_REQUEST,
    })

    const success = () => ({
        type: ordersConstants.GET_ORDERS_SUCCESS,
        payload: {list: orders}
    })


    return (dispatch) => {
        dispatch(request());
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(orders)
            }, 0)
        }).then(res => {
            dispatch(success(res))
        })
        
    }
    
}

export const delete_order = (ID, index) => {
    
    const request = (ID, index) => ({
        type: ordersConstants.DELETE_ORDER_REQUEST,
        payload: {
            ID,
            index
        }
    })

    const success = (ID) => ({
        type: ordersConstants.DELETE_ORDER_SUCCESS,
        payload: {ID}
    })

    const failure = (errors) => ({
        type: ordersConstants.DELETE_ORDER_FAILURE,
        payload: {errors}
    })

    return (dispatch) => {
        dispatch(request(ID, index));
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                
                resolve(ID)
                // reject('err')
            }, 1000)
        }).then((res) => {
            dispatch(success(res))
            showMessage({
                message: `Order #${ID} has been deleted`,
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