import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes, headers} from '../../services';
import * as Common from '../../screens/common';

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={routes.termsOfService}>
      <Stack.Screen
        name={routes.termsOfService}
        component={Common.TermsOfService}
      />
      <Stack.Screen
        name={routes.privacyPolicy}
        component={Common.PrivacyPolicy}
      />
      <Stack.Screen
        name={routes.SubscriptionPlan}
        component={Common.SubscriptionPlan}
      />
      <Stack.Screen
        name={routes.PurchasePlan}
        component={Common.PurchasePlan}
      />
      <Stack.Screen name={routes.AddTimeSlot} component={Common.AddTimeSlot} />
      <Stack.Screen
        name={routes.EditTimeSlot}
        component={Common.EditTimeSlot}
      />
    </Stack.Navigator>
  );
};
