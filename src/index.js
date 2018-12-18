import { createStackNavigator, createAppContainer } from "react-navigation";
import * as screens from './api/screen_names';
import Listing from './views/listing';
import OrderFactory from './views/order_factory';

const AppNavigator = createStackNavigator({
  [screens.LISTING]: {
    screen: Listing
  },
  [screens.ORDER_FACTORY]: {
    screen: OrderFactory
  }
});

export default createAppContainer(AppNavigator);