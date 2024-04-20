import React, {useState} from 'react';
import {
  Text,
  Buttons,
  ScrollViews,
  Wrapper,
  Spacer,
  Headers,
  Icons,
} from '../../../components';
import {
  responsiveFontSize,
  colors,
  appFonts,
  appSvgs,
  responsiveWidth,
  routes,
} from '../../../services';
import {useHooks} from './hooks';
import {navigate} from '../../../navigation/rootNavigation';

export default function Index() {
  const [accepted, setAccepted] = useState(false);
  const {terms} = useHooks();

  return (
    <Wrapper isMain style={[{}]}>
      <ScrollViews.WithKeyboardAvoidingView>
        <Headers.Primary
          darkBar
          invertColors
          title={'Terms and Conditions'}
          showBackArrow
          titleStyle={{fontFamily: appFonts.appTextMedium}}
        />
        <Wrapper>
          <Wrapper marginVerticalBase alignItemsCenter>
            <Icons.Svg
              svg={appSvgs.emailVerification}
              size={responsiveFontSize(85)}
            />
          </Wrapper>

          {/* <ScrollViews.WithKeyboardAvoidingView> */}
          <Wrapper marginHorizontalSmall>
            <Wrapper
              marginHorizontalSmall
              style={{paddingRight: responsiveWidth(2)}}>
              {terms?.map((item, index) => {
                const {detail} = item;
                return (
                  <Wrapper key={index}>
                    <Wrapper flexDirectionRow>
                      <Text isMedium>{index + 1}.</Text>
                      <Spacer isSmall horizontal />

                      <Text isMedium>{detail}</Text>
                    </Wrapper>
                    <Spacer isSmall />
                  </Wrapper>
                );
              })}
            </Wrapper>
          </Wrapper>
          <Spacer isBasic />

          <Wrapper marginHorizontalBase flexDirectionRow alignItemsCenter>
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
                Accept Terms & Conditions
              </Text>
            </Wrapper>
          </Wrapper>

          <Spacer isMedium />
          <Buttons.Colored
            //    buttonStyle={{backgroundColor: colors.primaryLight}}
            buttonColor={colors.primary}
            disabled={!accepted}
            text="Continue"
            onPress={() => navigate(routes.SecureYourAccount)}
          />

          <Spacer isDoubleBase />
        </Wrapper>
      </ScrollViews.WithKeyboardAvoidingView>
    </Wrapper>
  );
}
