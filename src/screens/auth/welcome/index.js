import React from 'react';
import {
  Wrapper,
  Text,
  StatusBars,
  Images,
  Spacer,
  Buttons,
} from '../../../components';
import {appImages, colors, routes, sizes} from '../../../services';
import {navigate} from '../../../navigation/rootNavigation';

export default function Index() {
  return (
    <Wrapper
      isMain
      justifyContentSpaceBetween
      style={{paddingTop: sizes.statusBarHeight}}>
      <StatusBars.Dark />

      {/* <Spacer isSmall /> */}
      <Wrapper alignItemsCenter>
        <Wrapper marginVerticalBase>
          <Text isSmallTitle>Welcome to S'all Good</Text>
        </Wrapper>
        <Spacer isMedium />
        <Images.Welcome source={appImages.welcome} />
        <Spacer isMedium />
        <Spacer isBasic />

        <Text isMediumFont isTinyTitle>
          Stay Connected and Secure
        </Text>
        <Spacer isTiny />
      </Wrapper>

      <Wrapper marginHorizontalTiny>
        <Wrapper marginHorizontalSmall>
          <Text alignTextCenter isRegularFont isMedium>
            Your trusted companion for connection and safety. Sign in to manage
            your loved ones' well-being with scheduled check-ins and instant
            alerts. New here? Register now to start ensuring peace of mind for
            you and your family.
          </Text>
        </Wrapper>
      </Wrapper>
      <Spacer isMedium />
      <Wrapper marginVerticalBase>
        <Buttons.Colored
          onPress={() => navigate(routes.OnBoarding)}
          buttonColor={colors.appTextColor3}
          text={'Create an Account'}
        />
        <Spacer isSmall />
        <Buttons.Bordered
          onPress={() => navigate(routes.signin)}
          tintColor={colors.appTextColor3}
          // buttonColor={colors.appTextColor3}
          text={'Login to your Account'}
        />
      </Wrapper>
      <Spacer isMedium />
    </Wrapper>
  );
}
