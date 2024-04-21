import React from 'react';
import {
  Wrapper,
  Text,
  StatusBars,
  Images,
  Spacer,
  Buttons,
  ScrollViews,
  BottomModal,
  ArrowRightButton,
  RowButton,
} from '../../../components';
import {
  ProfileTabsData,
  appImages,
  colors,
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
  routes,
  sizes,
} from '../../../services';
import {navigate} from '../../../navigation/rootNavigation';
import {useHooks} from './hooks';

export default function Index() {
  const {HandleLogoutModal, openLogoutModal} = useHooks();
  return (
    <Wrapper isMain>
      <Spacer isStatusBarHeigt />
      <StatusBars.Dark />
      <ScrollViews.WithKeyboardAvoidingView>
        {/* <Spacer isSmall /> */}
        <Wrapper marginHorizontalBase marginVerticalBase>
          <Text isMediumTitle isBoldFont>
            Profile
          </Text>
        </Wrapper>
        <Spacer isSmall />
        {/* Profile basic info */}
        <Wrapper flexDirectionRow alignItemsCenter marginHorizontalBase>
          <Wrapper
            style={{
              borderWidth: 1.5,
              borderColor: colors.grayLight,
              borderRadius: 100,
            }}>
            <Images.Round
              size={responsiveFontSize(110)}
              source={{uri: appImages.user2}}
            />
          </Wrapper>
          <Spacer horizontal isBasic />
          <Wrapper>
            <Text isMediumFont isTinyTitle>
              Dennis Callis
            </Text>
            <Spacer height={responsiveHeight(0.17)} />
            <Text style={{opacity: 0.75}} isSmall>
              MichaelDavis1998
            </Text>
            <Spacer height={responsiveHeight(0.17)} />
            <Text style={{opacity: 0.75}} isSmall>
              eddie_lake@gmail.com
            </Text>
          </Wrapper>
        </Wrapper>
        <Spacer isBasic />
        {/* User Subscription Details */}
        <Wrapper
          isBorderedWrapper
          justifyContentSpaceBetween
          flexDirectionRow
          alignItemsCenter>
          <Wrapper>
            <Text style={{color: colors.primary}} isMediumFont isMedium>
              Basic Plan
            </Text>
            <Text isTinyTitle>
              Free{' '}
              <Text
                style={[
                  {
                    opacity: 0.5,
                  },
                ]}
                isSmall>
                $0/month
              </Text>
            </Text>
          </Wrapper>

          <Buttons.ColoredSmall
            onPress={() => navigate(routes.ManageSubscription)}
            buttonStyle={{
              backgroundColor: colors.secondary,
              borderRadius: 12,
              height: sizes.smallButtonHeight,
              paddingHorizontal: responsiveWidth(3),
            }}
            text={'Manage'}
            textStyle={{color: colors.appTextColor3}}
          />
        </Wrapper>
        <Spacer isBasic />

        {ProfileTabsData.map((item, index) => (
          <Wrapper key={index}>
            <ArrowRightButton
              onPress={() =>
                navigate(item.onPress, {
                  screen:
                    (item.id == 5 && routes.privacyPolicy) ||
                    (item.id == 4 && routes.termsOfService),
                })
              }
              iconName={item.iconName}
              text={item.text}
            />
            <Spacer isTiny />
          </Wrapper>
        ))}
        <Spacer isBasic />
        <ArrowRightButton
          onPress={HandleLogoutModal}
          tintColor={colors.darkRed}
          iconName={'logout'}
          text={'Logout'}
        />
        <Spacer isDoubleBase />
        <Spacer isDoubleBase />
      </ScrollViews.WithKeyboardAvoidingView>

      {/* Logout Modal */}
      <BottomModal
        toggle={HandleLogoutModal}
        visible={openLogoutModal}
        heading={'Are you sure?'}>
        <Spacer isBasic />

        <Wrapper alignItemsCenter>
          <RowButton
            onPress2={() => navigate(routes.auth)}
            onPress1={HandleLogoutModal}
            text1={'Cancel'}
            text2={'Logout'}
            buttonStyle2={{backgroundColor: colors.darkRed}}
          />
        </Wrapper>
        <Spacer isDoubleBase />
      </BottomModal>
    </Wrapper>
  );
}
