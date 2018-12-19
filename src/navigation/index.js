import { createStackNavigator, createAppContainer } from "react-navigation";
import * as screens from 'api/screen_names';
import Listing from 'orders/views/listing';
import OrderFactory from 'orders/views/order_factory';

const AppNavigator = createStackNavigator({
  [screens.LISTING]: {
    screen: Listing
  },
  [screens.ORDER_FACTORY]: {
    screen: OrderFactory
  }
});

export default createAppContainer(AppNavigator);