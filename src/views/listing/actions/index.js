import ordersConstants from 'api/orders_constants';

export const get_orders_list = () => {
    const orders = [
        {
            ID: '100051',
            key: 'a',
        },
        {
            ID: '100052',
            key: 'b',
        },
        {
            ID: '100052',
            key: 'c',
        },
        {
            ID: '100053',
            key: 'd',
        },
        {
            ID: '100054',
            key: 'e',
        },
        {
            ID: '100055',
            key: 'f',
        },
        {
            ID: '100056',
            key: 'g',
        },
        {
            ID: '100057',
            key: 'h',
        },
        {
            ID: '100058',
            key: 'i',
        },
        {
            ID: '100059',
            key: 'j',
        },
    ];
    
    const request = () => ({
        type: ordersConstants.GET_ORDERS_REQUEST,
    })

    const success = () => ({
        type: ordersConstants.GET_ORDERS_SUCCESS,
        payload: {list: orders}
    })

    const failure = (errors) => ({
        type: ordersConstants.GET_ORDERS_FAILURE,
        payload: {errors}
    })

    return (dispatch) => {
        dispatch(request());
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(orders)
            }, 1000)
        }).then(res => {
            dispatch(success(res))
        })
    }
    
}