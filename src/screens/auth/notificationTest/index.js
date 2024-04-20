import React from 'react';
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

export default function Index() {
  return (
    <Wrapper isMain>
      <Headers.Primary
        darkBar
        invertColors
        title={'Notification Test'}
        showBackArrow
        titleStyle={{
          marginLeft: responsiveWidth(4),
        }}
        borderBottomWidth
      />

      {/* <Spacer isSmall /> */}
      <Wrapper marginVerticalMedium alignItemsCenter>
        <Icons.Svg
          svg={appSvgs.notificationBox}
          size={responsiveFontSize(200)}
        />
      </Wrapper>

      <Wrapper marginHorizontalTiny>
        <Wrapper marginHorizontalSmall>
          <Text alignTextCenter isRegularFont isMedium>
            S'all Good has sent a test push notification. Please open the
            notification to proceed.
          </Text>
        </Wrapper>
      </Wrapper>
      <Spacer isMedium />
      <Spacer isSmall />

      <Wrapper marginHorizontalTiny>
        <Wrapper marginHorizontalSmall>
          <Text alignTextCenter isRegularFont isMedium>
            Having a problem?
          </Text>
        </Wrapper>
      </Wrapper>
      <Spacer isSmall />
      <CustomBorderedWrapper
        onPress={() => navigate(routes.NotificationTested)}
        text={"Allow S'all Good to send you important notifications."}
      />
      <Spacer isSmall />
      <Wrapper marginVerticalBase>
        <Buttons.Colored
          //onPress={() => navigate(routes.OnBoarding)}
          buttonColor={colors.secondary}
          text={'Send Notification Again'}
          tintColor={colors.appTextColor3}
          iconName={'refresh'}
        />
        <Spacer isSmall />
        <Buttons.Bordered
          // onPress={() => navigate(routes.signin)}
          tintColor={colors.primary}
          // buttonColor={colors.appTextColor3}
          text={'Skip for now'}
        />
      </Wrapper>
      <Spacer isMedium />
    </Wrapper>
  );
}
