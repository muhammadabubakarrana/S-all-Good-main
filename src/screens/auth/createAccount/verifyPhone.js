import React, {useRef, useState} from 'react';
import {
  Text,
  Buttons,
  ScrollViews,
  Wrapper,
  Spacer,
  Headers,
  Logos,
  CustomInput,
  Icons,
  RowButton,
} from '../../../components';
import {
  responsiveFontSize,
  colors,
  fontSizes,
  appFonts,
  responsiveHeight,
  responsiveWidth,
  appStyles,
  appSvgs,
  sizes,
  routes,
} from '../../../services';
import {useHooks} from './hooks';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {StyleSheet} from 'react-native';
import {navigate} from '../../../navigation/rootNavigation';

export default function Index() {
  const otpInputRef = useRef(null);
  return (
    <Wrapper isMain style={[{}]}>
      <ScrollViews.KeyboardAvoiding>
        <Headers.Primary
          darkBar
          invertColors
          title={'Verify Your Phone Number'}
          showBackArrow
          titleStyle={{
            marginLeft: responsiveWidth(4),
          }}
          borderBottomWidth
        />
        <Wrapper>
          <Wrapper marginVerticalMedium alignItemsCenter>
            <Icons.Svg
              svg={appSvgs.phoneVerification}
              size={responsiveFontSize(85)}
            />
          </Wrapper>
          <Wrapper paddingHorizontalTiny>
            <Wrapper marginHorizontalTiny>
              <Text alignTextCenter isRegularFont isMedium>
                Enter the code sent to your phone to secure your account.
              </Text>
            </Wrapper>
          </Wrapper>
          <Spacer isBasic />
          <Wrapper alignItemsCenter>
            <OTPInputView
              ref={otpInputRef}
              style={{width: '90%', height: responsiveHeight(10)}}
              pinCount={6}
              // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
              // onCodeChanged = {code => { this.setState({code})}}
              // autoFocusOnLoad
              autoFocusOnLoad={false}
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeFilled={code => {
                console.log(`Code is ${code}, you are good to go!`);
                //  navigate(routes.register);
              }}
              placeholderCharacter="-"
              placeholderTextColor={colors.grayLight}
            />
          </Wrapper>
          <Spacer isMedium />
          <Wrapper alignItemsCenter>
            <RowButton
              onPress2={() =>
                navigate(routes.common, {screen: routes.SubscriptionPlan})
              }
              //   onPress1={goToPreviousSlide}
              text1={'Resend Code'}
              text2={'Verify'}
              buttonColorPrimary
            />
          </Wrapper>
          <Spacer isBasic />

          <Buttons.Bordered
            onPress={() =>
              navigate(routes.common, {screen: routes.SubscriptionPlan})
            }
            tintColor={colors.primary}
            text={'Skip for now'}
          />
        </Wrapper>
      </ScrollViews.KeyboardAvoiding>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  underlineStyleBase: {
    width: responsiveWidth(13),
    height: responsiveWidth(13),
    borderRadius: sizes.buttonRadius,
    borderWidth: 1,
    borderColor: colors.grayLight,
    ...appStyles.h5,
    fontFamily: appFonts.appTextMedium,
    color: colors.appTextColor3,
    //backgroundColor:'red'
    //borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    // borderColor: "#03DAC6",
  },
});
