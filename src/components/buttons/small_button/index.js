import React, {Component} from "react";
import { View, Text, TouchableOpacity } from "react-native";

class SmallButton extends Component {
  render() {
    const {buttonStyle, buttonText} = buttons;
    const {style, textStyle, title, ...touchProps} = this.props;

    return (
        <TouchableOpacity {...touchProps}>
            <View style={[buttonStyle, style]}>
                <Text style={[buttonText, textStyle]}>{title}</Text>
            </View>
        </TouchableOpacity>

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
    }
}
export default SmallButton;