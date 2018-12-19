import React, {Component} from "react";
import { View, Text, ActivityIndicator, TextInput, Button } from "react-native";
import {SmallButton} from "components";
import { ORDER_FACTORY } from "api/screen_names";
import {connect} from 'react-redux';
import { update_order, add_order } from "./actions";

class OrderForm extends Component {

    _handle_submit = () => {
        const order = this.props.order;
        if(order) {
            this.props.update_order(order.ID, this.state)
        } else {
            this.props.add_order(this.state)
        }
    }

    state = {
        ...this.props.order
    }

    render() {
        const order = this.state;
        const {inputStyle} = styles;
        return (
            <View style={{paddingTop: 20}}>
                <View style={{width: '100%', alignItems:'center'}}>
                    <TextInput
                        placeholder={'Amount'}
                        style={inputStyle}
                        value={order ? order.amount : ''}
                        onChangeText={(val) => this.setState({amount: val})}
                        editable={!this.props.loading}
                    />
                </View>
                <View style={{width: '100%', alignItems:'center'}}>
                    <TextInput
                        placeholder={'Customer'}
                        style={inputStyle}
                        value={order ? order.customer : ''}
                        editable={!this.props.loading}
                        onChangeText={(val) => this.setState({customer: val})}
                    />
                </View>
                <View style={{width: '100%', alignItems:'center'}}>
                    <TextInput
                        placeholder={'Date'}
                        style={inputStyle}
                        value={order ? order.date : ''}
                        editable={!this.props.loading}
                        onChangeText={(val) => this.setState({date: val})}
                    />
                </View>
                <View style={{width: '100%', alignItems:'center'}}>
                    <TextInput
                        placeholder={'Time'}
                        style={inputStyle}
                        value={order ? order.time : ''}
                        editable={!this.props.loading}
                        onChangeText={(val) => this.setState({time: val})}
                    />
                </View>
                <View style={{width: '100%', alignItems:'center'}}>
                    <Button
                        disabled={this.props.loading}
                        title={this.props.order ? 'Update Order' : 'Add Order'}
                        onPress={this._handle_submit}
                        />
                </View>
                {this.props.loading && (
                    <View style={{marginTop: 20}}>
                        <ActivityIndicator size={40}/>
                    </View>
                )}
            </View>
        );
    }
}
const styles = {
    inputStyle: {
        width: '85%',
        paddingHorizontal: 20,
        height: 50, 
        borderRadius: 3,
        backgroundColor: '#efefef',
        marginBottom: 10
    }
}
const mapStateToProps = (state) => ({
    loading: (state.orders.adding || state.orders.updating) ? true : false,
})

const mapDispatchToProps = (dispatch) => ({
    update_order: (ID, order) => dispatch(update_order(ID, order)),
    add_order: (order) => dispatch(add_order(order))
})
export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);