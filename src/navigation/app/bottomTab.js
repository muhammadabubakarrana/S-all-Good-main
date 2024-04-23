import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  appImages,
  colors,
  responsiveFontSize,
  responsiveWidth,
  routes,
  sizes,
  tabs,
  useReduxStore,
} from '../../services';
import {Images, Spacer, Text, Wrapper} from '../../components';
import {Icon} from '@rneui/base';
import * as App from '../../screens/app';
const BottomTabStack = createBottomTabNavigator();

export default function BottomTabNavigation() {
  const tabIconSize = responsiveFontSize(25);

  const TabIcon = ({
    color,
    iconName,
    iconType,
    size,
    focused,
    image,
    text,
    style,
  }) => {
    return (
      <Wrapper
        alignItemsCenter
        flexDirectionRow
        justifyContentSpaceBetween
        //justifyContentCenter
        paddingVerticalSmall
        paddingHorizontalSmall
        style={[
          {
            //    flex: 1,
            //   borderTopWidth: 3.5,
            //   borderTopColor: !focused ? colors.appColor1 : colors.appBgColor1,
            width: focused ? responsiveWidth(30) : responsiveWidth(12),
            // justifyContent: 'center',
            //   marginTop: 0,
            //  height: sizes.smallButtonHeight,
            backgroundColor: focused ? colors.primary : null,
            borderRadius: sizes.cardRadius,
          },
          style,
        ]}>
        {!image ? (
          <Icon
            name={iconName}
            type={iconType}
            size={tabIconSize}
            color={color}
            focused={focused}
          />
        ) : (
          <Images.Round
            source={{uri: image}}
            size={tabIconSize}
            style={{opacity: focused ? 1 : 0.5}}
          />
        )}
        <Spacer isTiny horizontal />
        <Text isWhite isMediumFont isMedium>
          {text}
        </Text>
      </Wrapper>
    );
  };
  return (
    <>
      <BottomTabStack.Navigator
        screenOptions={{
          headerShown: false,
          ...tabs.tabBarOptions,
        }}>
        <BottomTabStack.Screen
          name={routes.Dashboard}
          component={App.Dashboard}
          options={() => ({
            tabBarShowLabel: false,

            //  tabBarLabel: 'Dashboard',
            //  tabBarItemStyle: {width: responsiveWidth(5)},
            //  tabBarIconStyle: {width: responsiveWidth(12)},

            tabBarIcon: ({color, size, focused}) => {
              return (
                <TabIcon
                  iconName="view-dashboard"
                  iconType="material-community"
                  size={tabIconSize}
                  color={color}
                  focused={focused}
                  text={'Dashboard'}
                />
              );
            },
          })}
        />
        <BottomTabStack.Screen
          name={routes.RespondToCheckIn}
          component={App.RespondToCheckIn}
          options={() => ({
            tabBarShowLabel: false,

            /// tabBarLabel: 'Respond',
            tabBarIcon: ({color, size, focused}) => {
              return (
                <TabIcon
                  iconName="checkbox-multiple-marked"
                  iconType="material-community"
                  size={tabIconSize}
                  color={color}
                  text={'Respond'}
                  focused={focused}
                />
              );
            },
          })}
        />
        <BottomTabStack.Screen
          name={routes.RecipientContacts}
          component={App.RecipientContacts}
          options={() => ({
            tabBarShowLabel: false,

            //   tabBarLabel: 'Recipient Contacts',
            tabBarIcon: ({color, size, focused}) => {
              return (
                <TabIcon
                  iconName="contacts"
                  iconType="material-community"
                  size={tabIconSize}
                  color={color}
                  focused={focused}
                  text={'Recipient Contacts'}
                />
              );
            },
          })}
        />

        <BottomTabStack.Screen
          name={routes.Profile}
          component={App.Profile}
          options={() => ({
            tabBarShowLabel: false,

            // tabBarLabel: 'Profile',
            tabBarIcon: ({color, size, focused}) => {
              return (
                <TabIcon
                  iconName="account"
                  iconType="material-community"
                  size={tabIconSize}
                  color={color}
                  focused={focused}
                  text={'Profile'}
                />
              );
            },
          })}
        />
      </BottomTabStack.Navigator>
    </>
  );
}
