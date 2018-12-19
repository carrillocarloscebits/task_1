import React, {Component} from "react";
import { View, Text, ActivityIndicator } from "react-native";
import {SmallButton} from "components";
import { ORDER_FACTORY } from "api/screen_names";
import {connect} from 'react-redux';

class OrderItem extends Component {
  render() {
    const { itemContainer, time, customer, price, buttonsContainer } = styles;
    const {updateButton, deleteButton} = buttons;
    
    const {update, _delete, order} = this.props;

    return (
        <View style={itemContainer}>
            <View style={price}>
                <Text style={{fontWeight: 'bold'}}>
                    Amount
                </Text>
                <Text>
                    {order.amount}.00$
                </Text>
            </View>
            <View style={customer}>
                <Text style={{fontWeight: 'bold'}}>Order #{order.ID}</Text>
                <Text >{order.customer}</Text>
                <Text>{order.date}</Text>
            </View>
            <View style={time}>
                <Text style={{fontWeight: 'bold'}}>Time</Text>
                <Text>{order.time}</Text>
            </View>
            {this.props.deleting !== order.ID && <View style={buttonsContainer}>
                <SmallButton
                    title="Update"
                    onPress={update}
                    activeOpacity={0.6}
                    style={updateButton}/>
                <SmallButton
                    title="Delete"
                    onPress={_delete}
                    activeOpacity={0.6}
                    style={deleteButton}/>
            </View>}
            {this.props.deleting === order.ID && <View style={buttonsContainer}>
                <ActivityIndicator size={50}/>
            </View>}
        </View>
    );
  }
}
const buttons = {
    buttonText: {
        color: 'white',
        fontWeight: '600',
    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        paddingHorizontal: 5,
        paddingVertical: 4
    },
    updateButton: {
        backgroundColor: '#0091ea',
    },
    deleteButton: {
        backgroundColor: '#d50000',
    }
}
const styles = {
    itemContainer: {
        borderBottomWidth: 2,
        borderColor: '#ccc',
        padding: 10,
        flexDirection: 'row'
    },
    price: {
        flex: 1,
        justifyContent:'center',
    },
    customer: {
        flex: 1,
        flexGrow: 1,
        justifyContent:'center',
    },
    time: {
        flex:1,
        justifyContent:'center',
    },
    buttonsContainer: {
        flexShrink: 1,
        justifyContent: 'space-between'
    }
}
const mapStateToProps = (state) => ({
    deleting: state.orders.deleting ? state.orders.deleting : null,
})
export default connect(mapStateToProps)(OrderItem);