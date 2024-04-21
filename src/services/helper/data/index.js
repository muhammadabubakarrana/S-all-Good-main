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
export const RespondToCheckIn = [
  {
    id: 8373,
    image: appImages.user1,
    name: 'Jane Doe',
    response: 'Reached Home Safely Check-in',
    time: 'Today, 08:30 AM',
  },
  {
    id: 22345,
    image: appImages.user2,
    name: 'Jerry',
    response: 'Early Morning Check-in',
    time: 'Today, 08:30 AM',
  },
  {
    id: 8453,
    name: 'Stephanie Nicol',
    image: appImages.user3,
    response: 'Evening Check-in',
    time: 'Today, 08:30 AM',
  },
  {
    id: 23445,
    name: 'Dennis Callis',
    image: appImages.user4,
    response: 'Medication Check-in',
    time: 'Today, 08:30 AM',
  },

  {
    id: 1,
    name: 'Kathy Pacheco',
    image: appImages.user1,
    response: 'Buy Grocery Check-in',
    time: 'Today, 08:30 AM',
  },
  {
    id: 2,
    name: 'William Shaw',
    image: appImages.user2,
    response: 'Medication Check-in',
    time: 'Today, 08:30 AM',
  },
  {
    id: 3,
    name: 'Stephanie Nicol',
    image: appImages.user3,
    response: 'Buy Grocery Check-in',
    time: 'Today, 08:30 AM',
  },
  {
    id: 4,
    name: 'Dennis Callis',
    image: appImages.user4,
    response: 'Evening Check-in',
    time: 'Today, 08:30 AM',
  },
  {
    id: 5,
    name: 'Dennis Callis',
    image: appImages.user5,
    response: 'Medication Check-in',
    time: 'Today, 08:30 AM',
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
    onPress: routes.EditProfile,
  },
  {
    id: 2,
    iconName: 'bell',
    text: 'Notifications',
    onPress: routes.Notifications,
  },
  {
    id: 3,
    iconName: 'cog',
    text: 'App Settings',
    onPress: routes.AppSettings,
  },
  {
    id: 4,
    iconName: 'file',
    text: 'Terms & Conditions',
    onPress: routes.common,
  },
  {
    id: 5,
    iconName: 'alert-box',
    text: 'Privacy Policy',
    onPress: routes.common,
  },
];
export const DummyBulletPoints = [
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
];
export const DummyNotificationsData = [
  {
    id: 1,
    heading:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.',
    para: 'Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend. Mauris porta elementum est. Nullam euismod quis libero sed convallis. Vestibulum fringilla felis nec turpis aliquam auctor a a lectus. Etiam porttitor at eros vitae posuere. Suspendisse nec mollis dolor, vel cursus leo. Integer vitae sem vitae leo pretium porta. In consequat magna purus, iaculis rhoncus velit imperdiet sit amet.',
    date: 'Sun, Mar 31, 2024 10:07 am',
  },
  {
    id: 2,
    heading:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.',
    para: 'Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend. Mauris porta elementum est. Nullam euismod quis libero sed convallis. Vestibulum fringilla felis nec turpis aliquam auctor a a lectus. Etiam porttitor at eros vitae posuere. Suspendisse nec mollis dolor, vel cursus leo. Integer vitae sem vitae leo pretium porta. In consequat magna purus, iaculis rhoncus velit imperdiet sit amet.',
    date: 'Sun, Mar 31, 2024 10:07 am',
  },
  {
    id: 3,
    heading:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.',
    para: 'Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend. Mauris porta elementum est. Nullam euismod quis libero sed convallis. Vestibulum fringilla felis nec turpis aliquam auctor a a lectus. Etiam porttitor at eros vitae posuere. Suspendisse nec mollis dolor, vel cursus leo. Integer vitae sem vitae leo pretium porta. In consequat magna purus, iaculis rhoncus velit imperdiet sit amet.',
    date: 'Sun, Mar 31, 2024 10:07 am',
  },
  {
    id: 4,
    heading:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.',
    para: 'Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend. Mauris porta elementum est. Nullam euismod quis libero sed convallis. Vestibulum fringilla felis nec turpis aliquam auctor a a lectus. Etiam porttitor at eros vitae posuere. Suspendisse nec mollis dolor, vel cursus leo. Integer vitae sem vitae leo pretium porta. In consequat magna purus, iaculis rhoncus velit imperdiet sit amet.',
    date: 'Sun, Mar 31, 2024 10:07 am',
  },
  {
    id: 5,
    heading:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.',
    para: 'Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend. Mauris porta elementum est. Nullam euismod quis libero sed convallis. Vestibulum fringilla felis nec turpis aliquam auctor a a lectus. Etiam porttitor at eros vitae posuere. Suspendisse nec mollis dolor, vel cursus leo. Integer vitae sem vitae leo pretium porta. In consequat magna purus, iaculis rhoncus velit imperdiet sit amet.',
    date: 'Sun, Mar 31, 2024 10:07 am',
  },
  {
    id: 6,
    heading:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.',
    para: 'Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend. Mauris porta elementum est. Nullam euismod quis libero sed convallis. Vestibulum fringilla felis nec turpis aliquam auctor a a lectus. Etiam porttitor at eros vitae posuere. Suspendisse nec mollis dolor, vel cursus leo. Integer vitae sem vitae leo pretium porta. In consequat magna purus, iaculis rhoncus velit imperdiet sit amet.',
    date: 'Sun, Mar 31, 2024 10:07 am',
  },
  {
    id: 7,
    heading:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.',
    para: 'Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend. Mauris porta elementum est. Nullam euismod quis libero sed convallis. Vestibulum fringilla felis nec turpis aliquam auctor a a lectus. Etiam porttitor at eros vitae posuere. Suspendisse nec mollis dolor, vel cursus leo. Integer vitae sem vitae leo pretium porta. In consequat magna purus, iaculis rhoncus velit imperdiet sit amet.',
    date: 'Sun, Mar 31, 2024 10:07 am',
  },
  {
    id: 8,
    heading:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.',
    para: 'Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend. Mauris porta elementum est. Nullam euismod quis libero sed convallis. Vestibulum fringilla felis nec turpis aliquam auctor a a lectus. Etiam porttitor at eros vitae posuere. Suspendisse nec mollis dolor, vel cursus leo. Integer vitae sem vitae leo pretium porta. In consequat magna purus, iaculis rhoncus velit imperdiet sit amet.',
    date: 'Sun, Mar 31, 2024 10:07 am',
  },
  {
    id: 9,
    heading:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.',
    para: 'Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend. Mauris porta elementum est. Nullam euismod quis libero sed convallis. Vestibulum fringilla felis nec turpis aliquam auctor a a lectus. Etiam porttitor at eros vitae posuere. Suspendisse nec mollis dolor, vel cursus leo. Integer vitae sem vitae leo pretium porta. In consequat magna purus, iaculis rhoncus velit imperdiet sit amet.',
    date: 'Sun, Mar 31, 2024 10:07 am',
  },
];
