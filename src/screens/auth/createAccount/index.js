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
} from '../../../components';
import {
  responsiveFontSize,
  colors,
  responsiveWidth,
  appFonts,
  routes,
} from '../../../services';
import {useHooks} from './hooks';
import {navigate} from '../../../navigation/rootNavigation';
export default function Index() {
  const {accepted, setAccepted} = useHooks();
  return (
    <Wrapper isMain style={[{}]}>
      <ScrollViews.KeyboardAvoiding>
        <Headers.Primary
          darkBar
          invertColors
          title={'Create an Account'}
          showBackArrow
          titleStyle={{fontFamily: appFonts.appTextMedium}}
        />
        <Wrapper>
          <Spacer isTiny />

          <Wrapper marginHorizontalTiny>
            <Text alignTextCenter isRegularFont isMedium>
              Register now to begin your journey towards enhanced safety &
              connection with your loved ones.
            </Text>
          </Wrapper>
          <Spacer isMedium />
          <RowInputs title1={'First Name'} title2={'Last Name'} />
          <Spacer isSmall />

          <CustomInput
            iconTypeRight={'material-community'}
            iconNameRight={'calendar-blank'}
            title={'Date of birth'}
            placeholder={'Select--'}
          />
          <Spacer isSmall />

          <CustomInput
            title={'Email Address'}
            placeholder={'example@email.coms'}
          />
          <Spacer isSmall />
          <RowInputs
            placeholder2={'--- --- -----'}
            placeholder1={'+92 (PK)'}
            iconNameRightFirst={'keyboard-arrow-down'}
            iconTypeRightFirst={'material'}
            iconContainerStyleRight={{marginRight: responsiveWidth(2)}}
            flex={1.4}
            title1={'Phone Number'}
            title2={' '}
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
                  Accept{' '}
                  <Text
                    style={{textDecorationLine: 'underline'}}
                    // onPress={NavigateToTOfC}
                    isRegular>
                    Terms & Conditions
                  </Text>
                </Text>
              </Wrapper>
            </Wrapper>
          </Wrapper>

          <Spacer isMedium />
          <Spacer isSmall />

          <Buttons.Colored
            onPress={() => navigate(routes.TermsAndConditions)}
            buttonColor={colors.primary}
            text="Create Account"
          />
          <Spacer isMedium />

          <Text
            isMedium
            isMediumFont
            alignTextCenter
            onPress={() => navigate(routes.resetPassword)}>
            Already have an account?
          </Text>
          <Spacer isBasic />
          <Buttons.Colored
            buttonColor={colors.secondary}
            text={'Login to Your Account'}
            tintColor={colors.appTextColor3}
            onPress={() => navigate(routes.signin)}
          />
          <Spacer isBasic />
        </Wrapper>
      </ScrollViews.KeyboardAvoiding>
    </Wrapper>
  );
}
