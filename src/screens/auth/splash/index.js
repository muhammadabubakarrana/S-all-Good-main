import React, {Component} from 'react';
import {
  Wrapper,
  Text,
  Logos,
  Icons,
  StatusBars,
  Spacer,
} from '../../../components';
import {
  appStyles,
  appSvgs,
  colors,
  responsiveHeight,
  responsiveWidth,
  sizes,
} from '../../../services';

function Splash() {
  return (
    <Wrapper
      //style={{paddingTop: sizes.statusBarHeight}}
      // isGradient
      // gradiantColors={colors.appGradiantColors}
      isMain>
      <Spacer isStatusBarHeigt />
      <StatusBars.Light />
      <Wrapper isCenter flex={1}>
        <Wrapper animation={'zoomIn'}>
          <Logos.Primary size={responsiveWidth(30)} />
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
}

export default Splash;
