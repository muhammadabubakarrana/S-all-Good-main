import React, {useState} from 'react';
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
  routes,
} from '../../../services';
import {useHooks} from './hooks';
import {goBack, navigate} from '../../../navigation/rootNavigation';
export default function Index() {
  const [PasswordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <Wrapper isMain style={[{}]}>
      <ScrollViews.KeyboardAvoiding>
        <Headers.Primary
          darkBar
          invertColors
          title={'Secure Your Account'}
          showBackArrow
          titleStyle={{
            marginLeft: responsiveWidth(4),
          }}
          borderBottomWidth
        />
        <Wrapper>
          <Spacer isBasic />
          <Wrapper paddingHorizontalTiny>
            <Wrapper marginHorizontalTiny>
              <Text alignTextCenter isRegularFont isMedium>
                Choose a strong password to protect your account. Your password
                should be at least 8 characters long and include a mix of
                letters, numbers, and special characters for added security.
              </Text>
            </Wrapper>
          </Wrapper>
          <Spacer isMedium />

          <CustomInput
            title={'New Password'}
            placeholder={'minimum 8 characters'}
            iconNameRight={!PasswordVisible ? 'eye-off' : 'eye'}
            secureTextEntry={!PasswordVisible}
            iconTypeRight={'feather'}
            onPressIconRight={() => {
              setPasswordVisible(prev => !prev);
            }}
          />
          <Spacer isBasic />
          <CustomInput
            title={'Confirm New Password'}
            placeholder={'minimum 8 characters'}
            iconNameRight={!confirmPasswordVisible ? 'eye-off' : 'eye'}
            secureTextEntry={!confirmPasswordVisible}
            iconTypeRight={'feather'}
            onPressIconRight={() => {
              setConfirmPasswordVisible(prev => !prev);
            }}
          />

          <Spacer isDoubleBase />

          <Wrapper alignItemsCenter>
            <RowButton
              onPress2={() => navigate(routes.VerifyEmail)}
              onPress1={goBack}
              text1={'Previous'}
              text2={'Save'}
              buttonColorPrimary
            />
          </Wrapper>
          <Spacer isBasic />
        </Wrapper>
      </ScrollViews.KeyboardAvoiding>
    </Wrapper>
  );
}
