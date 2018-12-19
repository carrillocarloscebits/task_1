
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './navigation';
import store from './store';
import FlashMessage from "react-native-flash-message";
import NavigationService from './navigation/navigator_service';

export default class Root extends Component {
    render() {
      return (
        <Provider store={store}>
          <AppNavigator
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
          <FlashMessage position="bottom" />
        </Provider>
      );
    }
  }