
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './navigation';
import store from './store';

export default class Root extends Component {
    render() {
      return (
        <Provider store={store}>
          <AppNavigator
            // ref={navigatorRef => {
            //   NavigationService.setTopLevelNavigator(navigatorRef);
            // }}
          />
        </Provider>
      );
    }
  }