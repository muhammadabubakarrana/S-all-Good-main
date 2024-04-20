import React, {useState} from 'react';
import {
  Wrapper,
  Text,
  StatusBars,
  Images,
  Spacer,
  Buttons,
  Icons,
  Headers,
  CustomBorderedWrapper,
} from '../../../components';
import {
  appImages,
  appSvgs,
  colors,
  responsiveFontSize,
  responsiveWidth,
  routes,
  sizes,
} from '../../../services';
import {navigate} from '../../../navigation/rootNavigation';
import {Icon} from '@rneui/base';
import {StyleSheet} from 'react-native';

export default function Index() {
  const [isNotificationsEnable, setIsNotificationsEnable] = useState(false);
  const [isAllowCalls, setIsAllowCalls] = useState(false);
  const [isAllowContactAccess, setIsAllowContactAccess] = useState(false);
  const [isAllowLocation, setIsAllowLocation] = useState(false);

  return (
    <Wrapper isMain>
      <Headers.Primary
        darkBar
        invertColors
        title={'Enable Necessary Permissions'}
        showBackArrow
        titleStyle={{
          marginLeft: responsiveWidth(4),
          width: responsiveWidth(75),
        }}
        borderBottomWidth
        isClose
      />
      {/* <Spacer isSmall /> */}
      <Wrapper marginVerticalSmall alignItemsCenter>
        <Icons.Svg svg={appSvgs.permisionWarn} size={responsiveFontSize(140)} />
      </Wrapper>
      <Wrapper marginHorizontalTiny>
        <Wrapper marginHorizontalSmall>
          <Text alignTextCenter isRegularFont isMedium>
            To ensure S'all Good functions smoothly and provides the best
            experience, please grant the following permissions:
          </Text>
        </Wrapper>
      </Wrapper>
      <Spacer isMedium />

      <CustomBorderedWrapper
        onPress={() => setIsNotificationsEnable(p => !p)}
        textStyle={isNotificationsEnable && styles.lineThroughText}
        text={"Allow S'all Good to send you important notifications."}
        iconName={isNotificationsEnable && 'check'}
      />
      <Spacer isSmall />
      <CustomBorderedWrapper
        onPress={() => setIsAllowCalls(p => !p)}
        iconName={isAllowCalls && 'check'}
        textStyle={isAllowCalls && styles.lineThroughText}
        iconNameLeft={'phone'}
        text={"Enable S'all Good to receive incoming calls from contacts."}
      />
      <Spacer isSmall />
      <CustomBorderedWrapper
        onPress={() => setIsAllowContactAccess(p => !p)}
        textStyle={isAllowContactAccess && styles.lineThroughText}
        iconName={isAllowContactAccess && 'check'}
        iconNameLeft={'contacts'}
        text={"Enable S'all Good to access your personal phonebook contacts."}
      />
      <Spacer isSmall />
      <CustomBorderedWrapper
        onPress={() => setIsAllowLocation(p => !p)}
        textStyle={isAllowLocation && styles.lineThroughText}
        iconName={isAllowLocation && 'check'}
        iconNameLeft={'map-marker'}
        text={
          "Allow S'all Good to access your location for accurate check-in notifications."
        }
      />
      <Spacer isSmall />
      <Wrapper marginVerticalBase>
        <Buttons.Colored
          onPress={() => navigate(routes.NotificationTest)}
          buttonColor={colors.primary}
          text={'Continue'}
        />
      </Wrapper>
      <Spacer isMedium />
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  lineThroughText: {
    textDecorationLine: 'line-through',
  },
});
