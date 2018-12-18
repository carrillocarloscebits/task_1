import React, {Component} from "react";
import { View, FlatList, Button, Text, StyleSheet } from "react-native";
import OrderItem from './components/order_item';
import {ORDER_FACTORY} from 'api/screen_names';
export default class Listing extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerTitle: <Text style={{fontSize: 18, marginLeft: 10, fontWeight: 'bold'}}>Orders List</Text>,
        headerRight: (
            <View style={{marginRight: 10}}>
                <Button
                    onPress={() => navigation.navigate(ORDER_FACTORY)}
                    title="New Order"
                    color="#00c853"
                />
            </View>
          
        ),
    });

    _update = (item) => {
        return this.props.navigation.navigate(ORDER_FACTORY, {
            order: item
        })
    }

    render() {
        console.log(this.props)
        return (
            <View>
                <FlatList
                    style={{width: '100%'}}
                    data={orders}
                    renderItem={({item}) => (
                        <OrderItem 
                            key={item.key}
                            order={item}
                            update={() => this._update(item)}
                        />
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        height: '100%',
        borderBottomWidth: 2,
        borderColor: '#ccc',
        padding: 10,
        flexDirection: 'row'
    }
})