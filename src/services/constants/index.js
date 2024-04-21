import {colors} from '../utilities/colors';
import {appStyles} from '../utilities/appStyles';

export const baseURL = 'https://localserver/v1/';
export const endPoints = {
  register: {
    url_1: 'register',
  },
  login: {
    url_1: 'login',
  },
};
export const routes = {
  //main stacks
  auth: 'auth',
  app: 'app',
  common: 'common',

  //auth
  splash: 'splash',
  signin: 'signin',
  OnBoarding: 'On Boarding',
  TermsAndConditions: 'TermsAndConditions',
  SecureYourAccount: 'SecureYourAccount',
  VerifyEmail: 'VerifyEmail',
  VerifyPhone: 'VerifyPhone',
  Welcome: 'Welcome',
  EnableNecessaryPermissions: 'Enable Necessary Permissions',
  createAccount: 'createAccount',
  NotificationTested: 'NotificationTested',
  NotificationTest: 'Notification Test',
  SetupCheckingUp: 'Setup CheckingUp',
  TestingCheckIn: 'Testing CheckIn',
  //app
  bottomTab: 'bottomTab',
  home: 'home',
  account: 'account',
  shop: 'shop',
  community: 'community',
  postDetail: 'postDetail',
  Profile: 'Profile',
  LinkRecipient: 'Link Recipient',
  RecipientContacts: 'Recipient Contacts',
  ManageSubscription: 'Manage Subscription',
  smartFoodJournal: 'smartFoodJournal',
  sprayLogs: 'sprayLogs',
  userProfile: 'userProfile',
  ChangePaymentMethod: 'ChangePaymentMethod',
  EditProfile: 'Edit Profile',
  Notifications: 'Notifications',
  AppSettings: 'AppSettings',
  Congratulations: 'Congratulations',
  RespondToCheckIn: 'Respond To CheckIn',
  CheckingIn: 'Checking In',
  //common
  termsOfService: 'termsOfService',
  privacyPolicy: 'privacyPolicy',
  SubscriptionPlan: 'SubscriptionPlan',
  PurchasePlan: 'PurchasePlan',
  AddTimeSlot: 'Add Time Slot',
  EditTimeSlot: 'Edit Time Slot',
};
export const headers = {
  screenOptions: {
    // headerShown: false,
    title: 'Title',
    headerTitleAlign: 'left',
    headerStyle: [appStyles.headerStyle],
    headerTitleStyle: appStyles.headerTitleStyle,
    headerTintColor: colors.appTextColor4,
    headerBackTitle: ' ',
  },
};
export const tabs = {
  tabBarOptions: {
    showLabel: false,
    tabBarActiveTintColor: colors.appTextColor6,
    tabBarInactiveTintColor: colors.grayLight,
    allowFontScaling: true,
    tabBarStyle: [appStyles.tabBarStyle, appStyles.shadowExtraDark],
    activeBackgroundColor: '#FFFFFF40',
    //tabStyle: { borderRadius: 20, marginHorizontal: 7.5, marginVertical: 2 }
  },
};

export const imagePickerOptions = {
  title: 'Select Photo',
  quality: 1,
  maxWidth: 500,
  maxHeight: 500,
  // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
