import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes, headers} from '../../services';
import * as App from '../../screens/app';
import BottomTab from './bottomTab';
const AppStack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <AppStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={routes.home}>
      <AppStack.Screen name={routes.bottomTab} component={BottomTab} />

      <AppStack.Screen
        name={routes.ChangePaymentMethod}
        component={App.ChangePaymentMethod}
      />
      <AppStack.Screen
        name={routes.ManageSubscription}
        component={App.ManageSubscription}
      />
      <AppStack.Screen
        name={routes.Notifications}
        component={App.Notifications}
      />
      <AppStack.Screen name={routes.CheckingIn} component={App.CheckingIn} />
      <AppStack.Screen
        name={routes.CheckingInRespond}
        component={App.CheckingInRespond}
      />
      <AppStack.Screen
        name={routes.CheckInSchedule}
        component={App.CheckInSchedule}
      />
      <AppStack.Screen name={routes.AppSettings} component={App.AppSettings} />
      <AppStack.Screen name={routes.EditProfile} component={App.EditProfile} />
    </AppStack.Navigator>
  );
};

export default AppNavigation;
