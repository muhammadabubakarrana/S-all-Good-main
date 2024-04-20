import React from 'react';
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
  BottomModal,
} from '../../../components';
import {
  responsiveFontSize,
  colors,
  fontSizes,
  appFonts,
  routes,
  appSvgs,
  responsiveWidth,
} from '../../../services';
import {useHooks} from './hooks';
import {navigate} from '../../../navigation/rootNavigation';
export default function Index() {
  const {
    confirmPasswordVisible,
    setConfirmPasswordVisible,
    accepted,
    setAccepted,
    openResetPassModal,
    setOpenResetPassModal,
  } = useHooks();
  return (
    <Wrapper isMain style={[{}]}>
      <ScrollViews.KeyboardAvoiding>
        <Headers.Primary
          darkBar
          invertColors
          title={'Login to your Account'}
          showBackArrow
          titleStyle={{fontFamily: appFonts.appTextMedium}}
        />
        <Wrapper>
          <Wrapper marginVerticalMedium alignItemsCenter>
            <Logos.Primary size={responsiveFontSize(80)} />
          </Wrapper>

          <Wrapper marginHorizontalSmall>
            <Text
              alignTextCenter
              isMediumFont
              isSmallTitle
              style={{fontSize: fontSizes.extraLarge}}>
              Welcome Back
            </Text>
          </Wrapper>
          <Spacer isBasic />
          <Wrapper marginHorizontalTiny>
            <Wrapper marginHorizontalSmall>
              <Text alignTextCenter isRegularFont isMedium>
                Sign in to your S'all Good account to stay connected with your
                loved ones and receive real-time updates on their well-being.
              </Text>
            </Wrapper>
          </Wrapper>
          <Spacer isMedium />

          <CustomInput
            title={'Username or Email Address'}
            placeholder={'example@email.coms'}
          />
          <Spacer isBasic />
          <CustomInput
            title={'Password'}
            placeholder={'minimum 8 characters'}
            iconNameRight={!confirmPasswordVisible ? 'eye-off' : 'eye'}
            secureTextEntry={!confirmPasswordVisible}
            iconTypeRight={'feather'}
            onPressIconRight={() => {
              setConfirmPasswordVisible(prev => !prev);
            }}
          />

          <Spacer isBasic />
          <Wrapper
            marginHorizontalBase
            flexDirectionRow
            alignItemsCenter
            justifyContentSpaceBetween>
            <Wrapper flexDirectionRow alignItemsCenter>
              <Icons.Button
                buttonSize={responsiveFontSize(18)}
                buttonColor={accepted ? colors.primary : colors.appBgColor1}
                iconColor={colors.appTextColor6}
                onPress={() => setAccepted(pre => !pre)}
                iconSize={responsiveFontSize(14)}
                iconName={'check'}
                //    iconStyle={{ alignItems: "center", justifyContent: "center" }}
                buttonStyle={{
                  borderRadius: 0,
                  borderWidth: 1.9,
                  borderColor: colors.primary,
                }}
              />

              <Spacer isSmall horizontal />
              <Wrapper>
                <Text isRegular isMediumFont style={{opacity: 0.75}}>
                  Remember Me
                </Text>
              </Wrapper>
            </Wrapper>
            <Wrapper>
              <Text
                isRegular
                isBoldFont
                style={{color: colors.primary}}
                onPress={() => setOpenResetPassModal(true)}>
                Forgot Password?
              </Text>
            </Wrapper>
          </Wrapper>

          <Spacer isMedium />
          <Buttons.Colored
            onPress={() => navigate(routes.app)}
            buttonColor={colors.primary}
            text="Login"
          />
          <Spacer isMedium />

          <Text
            isMedium
            isMediumFont
            alignTextCenter
            // onPress={() => navigate(routes.resetPassword)}
          >
            Don't have an account?
          </Text>
          <Spacer isBasic />
          <Buttons.Colored
            buttonColor={colors.secondary}
            text={'Create an account'}
            tintColor={colors.appTextColor3}
            onPress={() => navigate(routes.createAccount)}
          />
          <Spacer isBasic />
        </Wrapper>
      </ScrollViews.KeyboardAvoiding>
      <BottomModal
        buttonText1={'Send Link'}
        onPressButton1={() => setOpenResetPassModal(false)}
        button1Style={{width: responsiveWidth(60), alignSelf: 'center'}}
        SvgIcon={appSvgs.resetPassword}
        // toggle={openResetPassModal}
        visible={openResetPassModal}
        heading={'Reset Password'}
        para={
          'Enter you registered email address to receive a password reset link.'
        }>
        <Spacer isBasic />
        <Wrapper marginVerticalSmall>
          <CustomInput
            title={'Email Address'}
            placeholder={'example@email.coms'}
          />
        </Wrapper>
      </BottomModal>
    </Wrapper>
  );
}
