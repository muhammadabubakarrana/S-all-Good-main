import React, {useState} from 'react';
import {
  Text,
  Buttons,
  ScrollViews,
  Wrapper,
  Spacer,
  Headers,
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
  routes,
  sizes,
  SubscriptionPlanData,
} from '../../../services';
import {useHooks} from './hooks';
import {navigate} from '../../../navigation/rootNavigation';
import {Pressable, StyleSheet} from 'react-native';
import {Icon} from '@rneui/base';

export default function Index() {
  const [isActiveCondition, setIsActiveCondition] = useState(null);

  return (
    <Wrapper isMain style={[{}]}>
      <Headers.Primary
        darkBar
        invertColors
        title={'Select Subscription Plan'}
        showBackArrow
        titleStyle={{
          marginLeft: responsiveWidth(4),
        }}
        borderBottomWidth
      />
      <ScrollViews.KeyboardAvoiding>
        <Spacer isMedium />
        <Wrapper>
          {SubscriptionPlanData?.map((item, i) => (
            <Pressable key={i} onPress={() => setIsActiveCondition(item.id)}>
              <Wrapper
                marginHorizontalBase
                paddingVerticalSmall
                style={[
                  // {paddingLeft: responsiveWidth(3)},
                  styles.view,
                  isActiveCondition === item.id && styles.activeBorder,
                ]}>
                {/* button and text */}
                <Wrapper
                  marginHorizontalSmall
                  marginVerticalTiny
                  flexDirectionRow
                  alignItemsCenter
                  justifyContentSpaceBetween>
                  <Text
                    isMediumFont
                    isMedium
                    style={[
                      {
                        color:
                          isActiveCondition === item.id
                            ? colors.appTextColor6
                            : colors.primary,
                      },
                    ]}>
                    {item.title}
                  </Text>
                  <Icon
                    size={sizes.icons.medium}
                    name={
                      isActiveCondition === item.id
                        ? 'radiobox-marked'
                        : 'radiobox-blank'
                    }
                    color={
                      isActiveCondition === item.id
                        ? colors.appTextColor6
                        : colors.grayLight
                    }
                    type="material-community"
                  />
                </Wrapper>
                {/* Price */}

                <Wrapper marginHorizontalSmall>
                  <Text
                    isXXLTitle
                    style={[
                      {
                        color:
                          isActiveCondition === item.id
                            ? colors.appTextColor6
                            : colors.appTextColor3,
                      },
                    ]}>
                    ${item.price}{' '}
                    <Text
                      isSmall
                      style={[
                        {
                          opacity: 0.5,
                          color:
                            isActiveCondition === item.id
                              ? colors.appTextColor6
                              : colors.appTextColor3,
                        },
                      ]}>
                      /month
                    </Text>
                  </Text>
                </Wrapper>
                <Spacer isSmall />
                <Wrapper marginHorizontalSmall>
                  {item.detail.map((item2, index) => (
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
                          backgroundColor:
                            isActiveCondition === item.id
                              ? colors.appTextColor6
                              : colors.appTextColor3,
                          marginRight: responsiveWidth(2),
                          marginTop: 6.5,
                        }}
                      />

                      <Text
                        isRegularFont
                        isSmall
                        style={{
                          flex: 1,

                          opacity: 0.75,
                          color:
                            isActiveCondition === item.id
                              ? colors.appTextColor6
                              : colors.appTextColor3,
                        }}>
                        {item2.name}
                      </Text>
                    </Wrapper>
                  ))}
                </Wrapper>
              </Wrapper>
            </Pressable>
          ))}
          <Spacer isMedium />

          <Buttons.Colored
            onPress={() => navigate(routes.PurchasePlan)}
            buttonColor={colors.primary}
            text={'Proceed for Payment'}
          />
        </Wrapper>
        <Spacer isDoubleBase />
      </ScrollViews.KeyboardAvoiding>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.appTextColor6,
    marginBottom: responsiveHeight(2),
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.grayLight,
    //  height: responsiveHeight(15)
  },
  activeBorder: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderWidth: 1 /* Set the active border color */,
  },
});
