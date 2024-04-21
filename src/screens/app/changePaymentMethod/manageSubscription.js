import React, {useState} from 'react';
import {
  Text,
  Buttons,
  Wrapper,
  Spacer,
  Headers,
  Lines,
  ScrollViews,
} from '../../../components';
import {
  colors,
  responsiveHeight,
  responsiveWidth,
  routes,
  DummyBulletPoints,
} from '../../../services';
import {useHooks} from './hooks';
import {StyleSheet} from 'react-native';
import {navigate} from '../../../navigation/rootNavigation';

export default function Index() {
  //   const {openModal, setOpenModal} = useHooks();
  return (
    <Wrapper isMain style={[{}]}>
      <ScrollViews.KeyboardAvoiding>
        <Headers.Primary
          darkBar
          invertColors
          title={'Manage Subscription'}
          showBackArrow
          titleStyle={{
            marginLeft: responsiveWidth(4),
          }}
          borderBottomWidth
        />
        <Wrapper>
          <Spacer isBasic />
          <Wrapper marginHorizontalBase>
            <Text isMediumFont isRegular>
              Current Plan
            </Text>
          </Wrapper>
          <Spacer isTiny />
          <Wrapper
            marginHorizontalBase
            paddingVerticalSmall
            paddingHorizontalBase
            style={[styles.planBorderStyle]}>
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

          <Spacer isBasic />
          <Lines.Horizontal style={{alignSelf: 'center'}} width={'90%'} />
          <Spacer isBasic />
          <Buttons.Colored
            onPress={() => navigate(routes.ChangePaymentMethod)}
            buttonColor={colors.secondary}
            text={'Change Payment Method'}
            tintColor={colors.appTextColor3}
          />
          <Spacer isTiny />
          <Buttons.Colored
            onPress={() =>
              navigate(routes.common, {
                screen: routes.SubscriptionPlan,
                params: {id: 'isSubscribed'},
              })
            }
            buttonColor={colors.secondary}
            text={'Upgrade Subscription'}
            tintColor={colors.orangeLight}
          />
          <Spacer isTiny />
          <Buttons.Colored
            //onPress={() => navigate(routes.OnBoarding)}
            buttonColor={colors.secondary}
            text={'Cancel Subscription'}
            tintColor={colors.darkRed}
          />
        </Wrapper>
      </ScrollViews.KeyboardAvoiding>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  planBorderStyle: {
    backgroundColor: colors.primary,
    //borderColor: colors.primary,
    borderRadius: 16,
    //borderWidth: 1,
  },
});
