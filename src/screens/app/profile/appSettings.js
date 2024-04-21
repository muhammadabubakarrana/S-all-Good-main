import React from 'react';
import {
  Text,
  Buttons,
  ScrollViews,
  Wrapper,
  Spacer,
  Headers,
  CustomInput,
  Icons,
  RowInputs,
  RowButton,
  Lines,
  ArrowRightButton,
} from '../../../components';
import {
  responsiveFontSize,
  colors,
  responsiveWidth,
  appFonts,
  routes,
} from '../../../services';

import {navigate} from '../../../navigation/rootNavigation';
export default function Index() {
  return (
    <Wrapper isMain style={[{}]}>
      <ScrollViews.KeyboardAvoiding>
        <Headers.Primary
          darkBar
          invertColors
          title={'App Settings'}
          showBackArrow
          borderBottomWidth
        />
        <Wrapper>
          <Spacer isMedium />
          <ArrowRightButton text={'Change Password'} />
          <Spacer isTiny />
          <ArrowRightButton text={'Notification Settings'} />
          <Spacer isTiny />
          <ArrowRightButton text={'Account Settings'} />
          <Spacer isBasic />
          <Spacer isBasic />
        </Wrapper>
      </ScrollViews.KeyboardAvoiding>
    </Wrapper>
  );
}
