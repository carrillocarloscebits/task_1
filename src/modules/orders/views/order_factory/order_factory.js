import React, {Component} from "react";
import { View, Button, Text } from "react-native";
import OrderForm from '../../components/order_form'
export default class OrderFactory extends Component {

    static navigationOptions = ({navigation}) => {

        renderHeader = () => {
            const titleStyle = {
                fontSize: 18, 
                marginLeft: 10, 
                fontWeight: 'bold'
            }
            orderID = navigation.getParam('order', {ID: null}).ID;
            title = orderID ? 
                `Update Order #${navigation.getParam('order', {ID: null}).ID}` :
                'Add New Order'
            return (
                <Text style={titleStyle}>
                    {title}
                </Text>
            )
        }

        return {
            headerTitle: renderHeader(),
        }
    };

    render() {
        console.log(this.props)
        return (
            <View style={{flex: 1}}>
                <OrderForm order={this.props.navigation.getParam('order')}/>
            </View>
        );
    }
}

const styles = {
    
}