import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './src/navigation';
import {Provider} from 'react-redux';
import store from './src/store';
import {
  CreateAccount,
  EnableNecessaryPermissions,
  NotificationTest,
  NotificationTested,
  OnBoarding,
  SecureYourAccount,
  Signin,
  Splash,
  TermsAndConditions,
  VerifyEmail,
  VerifyPhone,
  Welcome,
} from './src/screens/auth';
import {
  AddTimeSlot,
  EditTimeSlot,
  PurchasePlan,
  SubscriptionPlan,
  TermsOfService,
} from './src/screens/common';
import {
  AppSettings,
  ChangePaymentMethod,
  EditProfile,
  LinkRecipient,
  ManageSubscription,
  Notifications,
  Profile,
  RecipientContacts,
  ScheduleCheckInTime,
} from './src/screens/app';
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider style={{flex: 1}}>
        {/* <Navigation /> */}
        <EditTimeSlot />
      </SafeAreaProvider>
    </Provider>
  );
}
