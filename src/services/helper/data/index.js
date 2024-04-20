import {navigate} from '../../../navigation/rootNavigation';
import {routes} from '../../constants';
import {appImages} from '../../utilities';

export const rolesTypes = {
  weight_loss: 'weight-loss',
  maintain_weight: 'maintain-weight',
  professional_dietitian: 'professional-dietitian',
};

export const users = [
  {
    id: 8373,
    name: 'Jenny Wilson',
    image: appImages.user1,
    address: 'London',
    friend: true,
  },
  {
    id: 22345,
    name: 'William Shaw',
    image: appImages.user2,
    address: 'London',
    friend: true,
  },
  {
    id: 8453,
    name: 'John Thomas',
    image: appImages.user3,
    address: 'London',
    friend: true,
  },
  {
    id: 23445,
    name: 'Nilson Meno',
    image: appImages.user4,
    address: 'New York',
    friend: true,
  },
  // {
  //   id: 46216,
  //   name: 'Jackobe Black',
  //   image: appImages.user5,
  //   address: 'New York',
  //   friend: true,
  // },
];

export const LinkedRecipientContacts = [
  {
    id: 8373,
    name: 'Kathy Pacheco',
    image: appImages.user1,
    userId: 'BenjaminWilson87',
  },
  {
    id: 22345,
    name: 'William Shaw',
    image: appImages.user2,
    userId: 'BenjaminWilson87',
  },
  {
    id: 8453,
    name: 'Stephanie Nicol',
    image: appImages.user3,
    userId: 'AmeliaRodriguez_03',
  },
  {
    id: 23445,
    name: 'Dennis Callis',
    image: appImages.user4,
    userId: 'MichaelDavis1998',
  },

  {
    id: 1,
    name: 'Kathy Pacheco',
    image: appImages.user1,
    userId: 'BenjaminWilson87',
  },
  {
    id: 2,
    name: 'William Shaw',
    image: appImages.user2,
    userId: 'BenjaminWilson87',
  },
  {
    id: 3,
    name: 'Stephanie Nicol',
    image: appImages.user3,
    userId: 'AmeliaRodriguez_03',
  },
  {
    id: 4,
    name: 'Dennis Callis',
    image: appImages.user4,
    userId: 'MichaelDavis1998',
  },
  {
    id: 5,
    name: 'Dennis Callis',
    image: appImages.user5,
    userId: 'MichaelDavis1998',
  },
];

export const SubscriptionPlanData = [
  {
    id: 0,
    title: 'Basic Plan',
    price: '10',
    detail: [
      {
        id: 1,
        name: 'Schedule up to 3 check-ins per day for 1 recipient',
      },
      {
        id: 2,
        name: 'Receive missed check-in alerts via email',
      },
      {
        id: 3,
        name: 'Basic support',
      },
    ],
  },
  {
    id: 1,
    title: 'Premium Plan',
    price: '12',
    detail: [
      {
        id: 1,
        name: 'Schedule up to 3 check-ins per day for 1 recipient',
      },
      {
        id: 2,
        name: 'Add 1 additional person to notice group (a spouse, sibling, etc.)',
      },
      {
        id: 3,
        name: 'Receive missed check-in alerts via email/app',
      },
      {
        id: 4,
        name: 'Priority support',
      },
    ],
  },
  {
    id: 2,
    title: 'Pro Plan',
    price: '25',
    detail: [
      {
        id: 1,
        name: 'Schedule unlimited check-ins per day for up to 5 recipients, with up to 5 additional viewers',
      },
      {
        id: 2,
        name: 'Receive missed check-in alerts via push notifications and email',
      },
      {
        id: 3,
        name: 'Direct communications with recipients within the app',
      },
      {
        id: 4,
        name: 'Premium support',
      },
    ],
  },
];
export const ProfileTabsData = [
  {
    id: 1,
    iconName: 'pencil',
    text: 'Edit Profile',
    onPress: navigate(routes.common, {screen: routes.termsOfService}),
  },
  {
    id: 2,
    iconName: 'bell',
    text: 'Notifications',
    onPress: navigate(routes.common, {screen: routes.termsOfService}),
  },
  {
    id: 3,
    iconName: 'cog',
    text: 'App Settings',
    onPress: navigate(routes.common, {screen: routes.termsOfService}),
  },
  {
    id: 4,
    iconName: 'file',
    text: 'Terms & Conditions',
    onPress: navigate(routes.common, {screen: routes.termsOfService}),
  },
  {
    id: 5,
    iconName: 'alert-box',
    text: 'Privacy Policy',
    onPress: navigate(routes.common, {screen: routes.termsOfService}),
  },
];
