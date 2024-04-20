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

export default function Index() {
  return (
    <Wrapper isMain>
      <Headers.Primary
        darkBar
        invertColors
        title={'Notification Tested'}
        showBackArrow
        titleStyle={{
          marginLeft: responsiveWidth(4),
        }}
        borderBottomWidth
        isClose
      />

      {/* <Spacer isSmall /> */}
      <Wrapper marginVerticalMedium alignItemsCenter>
        <Icons.Svg svg={appSvgs.greenTick} size={responsiveFontSize(150)} />
      </Wrapper>

      <Text alignTextCenter isMediumFont isTinyTitle>
        Notification Tested Successfully
      </Text>
      <Spacer isMedium />
      <Wrapper marginHorizontalTiny>
        <Wrapper marginHorizontalSmall>
          <Text alignTextCenter isRegularFont isMedium>
            Congratulations! You've successfully received the test push
            notification from S'all Good. You're now ready to stay updated on
            important alerts and messages.`
          </Text>
        </Wrapper>
      </Wrapper>
      <Spacer isMedium />
      <Spacer isSmall />

      <Wrapper marginHorizontalTiny>
        <Wrapper marginHorizontalSmall>
          <Text alignTextCenter isRegularFont isMedium>
            Now, it's time to link your recipient to your account to start
            monitoring their well-being.
          </Text>
        </Wrapper>
      </Wrapper>
      <Spacer isSmall />

      <Wrapper marginVerticalBase>
        <Buttons.Colored
          onPress={() => navigate(routes.app, {screen: routes.LinkRecipient})}
          buttonColor={colors.primary}
          text={'Link Recipient'}
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
