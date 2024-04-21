import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './src/navigation';
import {Provider} from 'react-redux';
import store from './src/store';
import {
  Congratulations,
  CreateAccount,
  EnableNecessaryPermissions,
  NotificationTest,
  NotificationTested,
  OnBoarding,
  SecureYourAccount,
  SetupCheckingUp,
  Signin,
  Splash,
  TermsAndConditions,
  TestingCheckIn,
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
  CheckingIn,
  EditProfile,
  LinkRecipient,
  ManageSubscription,
  Notifications,
  Profile,
  RecipientContacts,
  ResponsdToCheckIn,
  ScheduleCheckInTime,
} from './src/screens/app';
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider style={{flex: 1}}>
        <Navigation />
        {/* <CheckingIn /> */}
      </SafeAreaProvider>
    </Provider>
  );
}
