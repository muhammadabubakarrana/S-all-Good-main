import React from 'react';
import {
  Wrapper,
  Text,
  Spacer,
  Buttons,
  Icons,
  Headers,
} from '../../../components';
import {appSvgs, colors, responsiveFontSize, routes} from '../../../services';
import {navigate} from '../../../navigation/rootNavigation';

export default function Index() {
  return (
    <Wrapper isMain>
      <Headers.Primary
        darkBar
        invertColors
        title={"You're All Set!"}
        borderBottomWidth
      />

      {/* <Spacer isSmall /> */}
      <Wrapper marginVerticalMedium alignItemsCenter>
        <Icons.Svg svg={appSvgs.congrats} size={responsiveFontSize(200)} />
      </Wrapper>

      <Text alignTextCenter isMediumFont isTinyTitle>
        Congratulations!{'\n'} You've completed the onboarding.
      </Text>
      <Spacer isMedium />
      <Wrapper marginHorizontalTiny>
        <Wrapper marginHorizontalSmall>
          <Text alignTextCenter isRegularFont isMedium>
            Now it's time to explore all the features of S'all Good. Head to the
            home screen to start connecting with your loved ones and ensuring
            their safety.
          </Text>
        </Wrapper>
      </Wrapper>
      <Spacer isMedium />
      <Spacer isSmall />

      <Buttons.Colored
        onPress={() => navigate(routes.app)}
        buttonColor={colors.primary}
        text={'Go to Dashboard'}
      />

      <Spacer isMedium />
    </Wrapper>
  );
}
