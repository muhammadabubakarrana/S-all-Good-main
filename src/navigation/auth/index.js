import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes, headers} from '../../services';
import * as Auth from '../../screens/auth';

const AuthStack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false}}
      //screenOptions={{headerStyle:{backgroundColor:'gray',borderBottomWidth:5}}}
      initialRouteName={routes.Welcome}>
      <AuthStack.Screen name={routes.Welcome} component={Auth.Welcome} />
      <AuthStack.Screen name={routes.OnBoarding} component={Auth.OnBoarding} />
      <AuthStack.Screen
        name={routes.TermsAndConditions}
        component={Auth.TermsAndConditions}
      />
      <AuthStack.Screen
        name={routes.SecureYourAccount}
        component={Auth.SecureYourAccount}
      />
      <AuthStack.Screen
        name={routes.VerifyEmail}
        component={Auth.VerifyEmail}
      />
      <AuthStack.Screen
        name={routes.VerifyPhone}
        component={Auth.VerifyPhone}
      />
      <AuthStack.Screen
        name={routes.LinkRecipient}
        component={Auth.LinkRecipient}
      />
      <AuthStack.Screen
        name={routes.SetupCheckingUp}
        component={Auth.SetupCheckingUp}
      />
      <AuthStack.Screen
        name={routes.EnableNecessaryPermissions}
        component={Auth.EnableNecessaryPermissions}
      />
      <AuthStack.Screen
        name={routes.NotificationTest}
        component={Auth.NotificationTest}
      />
      <AuthStack.Screen
        name={routes.NotificationTested}
        component={Auth.NotificationTested}
      />
      <AuthStack.Screen
        name={routes.TestingCheckIn}
        component={Auth.TestingCheckIn}
      />
      <AuthStack.Screen
        name={routes.Congratulations}
        component={Auth.Congratulations}
      />
      <AuthStack.Screen name={routes.signin} component={Auth.Signin} />
      <AuthStack.Screen
        name={routes.createAccount}
        component={Auth.CreateAccount}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
