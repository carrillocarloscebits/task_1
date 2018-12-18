import React, {Component} from "react";
import { View, Text } from "react-native";
import {SmallButton} from "components";
import { ORDER_FACTORY } from "api/screen_names";

class OrderItem extends Component {
  render() {
    const { itemContainer, time, customer, price, buttonsContainer } = styles;
    const {updateButton, deleteButton} = buttons;
    
    const {update, order} = this.props;
    return (
        <View style={itemContainer}>
            <View style={price}>
                <Text>
                    10.00$
                </Text>
            </View>
            <View style={customer}>
                <Text>Customer</Text>
                <Text>#{order.ID}</Text>
                <Text>Date</Text>
            </View>
            <View style={time}>
                <Text>Time</Text>
            </View>
            <View style={buttonsContainer}>
                <SmallButton
                    title="Update"
                    onPress={update}
                    activeOpacity={0.6}
                    style={updateButton}/>
                <SmallButton
                    title="Delete"
                    onPress={() => alert('Delete')}
                    activeOpacity={0.6}
                    style={deleteButton}/>
            </View>
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
        flex: 1
    },
    customer: {
        flex: 1,
        flexGrow: 1
    },
    time: {
        flex:1,
    },
    buttonsContainer: {
        flexShrink: 1,
        justifyContent: 'space-between'
    }
}

export default OrderItem;