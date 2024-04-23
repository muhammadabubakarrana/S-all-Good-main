import React, {useEffect, useState} from 'react';
import {
  Text,
  Buttons,
  ScrollWrappers,
  Wrapper,
  Spacer,
  Headers,
  RowButton,
  RowInputs,
  CustomInput,
  Lines,
  ScrollViews,
  BottomModal,
  Icons,
} from '../../../components';
import {
  colors,
  responsiveHeight,
  responsiveWidth,
  appSvgs,
  sizes,
  routes,
  DummyBulletPoints,
} from '../../../services';
import {useHooks} from './hooks';
import {StyleSheet} from 'react-native';
import {goBack, navigate} from '../../../navigation/rootNavigation';

export default function Index(props) {
  const {openModal, setOpenModal, HandleOpenModal, HandleTwoScreensGoBack} =
    useHooks();

  const previousScreenData = props.route.params;
  return (
    <Wrapper isMain style={[{}]}>
      <ScrollViews.KeyboardAvoiding>
        <Headers.Primary
          darkBar
          invertColors
          title={'Purchase Plan'}
          showBackArrow
          titleStyle={{
            marginLeft: responsiveWidth(4),
          }}
          borderBottomWidth
        />
        <Wrapper>
          <Spacer isBasic />
          <Wrapper
            marginHorizontalBase
            paddingVerticalSmall
            paddingHorizontalBase
            style={[styles.activeBorder]}>
            {/* button and text */}

            <Text
              isMediumFont
              isMedium
              style={[
                {
                  color: colors.appTextColor6,
                },
              ]}>
              Premium Plan
            </Text>

            {/* Price */}

            <Wrapper>
              <Text
                isXXLTitle
                style={[
                  {
                    color: colors.appTextColor6,
                  },
                ]}>
                $12{' '}
                <Text
                  isSmall
                  style={[
                    {
                      opacity: 0.5,
                      color: colors.appTextColor6,
                    },
                  ]}>
                  /month
                </Text>
              </Text>
            </Wrapper>
            <Spacer isSmall />

            <Wrapper>
              {DummyBulletPoints.map((item, index) => (
                <Wrapper
                  key={index}
                  style={{marginBottom: responsiveHeight(0.5)}}
                  flexDirectionRow
                  alignItemsFlexStart>
                  <Wrapper
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: 2,
                      backgroundColor: colors.appTextColor6,
                      marginRight: responsiveWidth(2),
                      marginTop: 6.5,
                    }}
                  />

                  <Text
                    isRegularFont
                    isSmall
                    style={{
                      flex: 1,
                      // opacity: 0.75,
                      color: colors.appTextColor6,
                    }}>
                    {item.name}
                  </Text>
                </Wrapper>
              ))}
            </Wrapper>
          </Wrapper>
          <Spacer isSmall />

          <CustomInput title={'Card Holder Name'} />
          <Spacer isSmall />

          <CustomInput
            title={'Card Number'}
            placeholder={'---- ---- ---- ----'}
          />
          <Spacer isSmall />
          <RowInputs
            placeholder1={'MM / YY'}
            placeholder2={'- - -'}
            title1={'Card Expiry'}
            title2={'CVC'}
          />
          <Spacer isMedium />
          <Lines.Horizontal style={{alignSelf: 'center'}} width={'90%'} />
          <Spacer isMedium />

          <Wrapper alignItemsCenter>
            <RowButton
              onPress2={
                previousScreenData?.id === 'isSubscribed'
                  ? HandleTwoScreensGoBack
                  : HandleOpenModal
              }
              //   onPress1={goToPreviousSlide}
              text1={'Cancel'}
              text2={'Purchase'}
              buttonStyle2={{
                backgroundColor:
                  previousScreenData?.id === 'isSubscribed'
                    ? colors.primary
                    : colors.appTextColor3,
              }}
              // buttonColorPrimary
            />
          </Wrapper>
        </Wrapper>
      </ScrollViews.KeyboardAvoiding>
      <BottomModal
        SvgIcon={appSvgs.greenTick}
        buttonText1={'Setup Checking Up'}
        buttonText2={'Skip for now'}
        onPressButton1={() => navigate(routes.EnableNecessaryPermissions)}
        onPressButton2={() => setOpenModal(false)}
        // toggle={openModal}
        visible={openModal}
        paraContainerStyle={{marginHorizontal: sizes.marginHorizontal}}
        heading={'Registration Complete'}
        para={
          "Your registration is complete. You're now part of the S'all Good community. Start connecting with your loved ones and ensuring their safety today."
        }>
        <Wrapper marginHorizontalBase marginVerticalBase>
          <Text alignTextCenter isRegularFont isMedium>
            Would you like to set up regular check-in notifications now to stay
            updated on your loved ones' well-being, or skip this step for later?
          </Text>
        </Wrapper>
      </BottomModal>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  activeBorder: {
    backgroundColor: colors.primary,
    //borderColor: colors.primary,
    borderRadius: 16,
    //borderWidth: 1,
  },
});
