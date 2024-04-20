import React from 'react';
import {
  Wrapper,
  Text,
  StatusBars,
  Images,
  Spacer,
  Buttons,
  Icons,
  Headers,
  CustomBorderedWrapper,
  CustomInput,
  Lines,
  ScrollViews,
  BottomModal,
  BorderedWrapperWithUserDetails,
  ArrowRightButton,
  RowButton,
} from '../../../components';
import {
  LinkedRecipientContacts,
  ProfileTabsData,
  appImages,
  colors,
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
  routes,
  sizes,
  users,
} from '../../../services';
import {navigate} from '../../../navigation/rootNavigation';
import {useHooks} from './hooks';
import {Icon} from '@rneui/base';
import {TouchableOpacity} from 'react-native';

export default function Index() {
  const {
    openLinkedRecipientModal,
    HandleLinkedRecipientModal,
    HandleUnlinkContactModal,
    openUnlinkContactModal,
  } = useHooks();
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
            //onPress={onPressLink}
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
              onPress={item.onPress}
              // tintColor={colors.darkRed}
              iconName={item.iconName}
              text={item.text}
            />
            <Spacer isTiny />
          </Wrapper>
        ))}
        <Spacer isBasic />
        <ArrowRightButton
          //  onPress={item.onPress}
          tintColor={colors.darkRed}
          iconName={'logout'}
          text={'Logout'}
        />
        <Spacer isDoubleBase />
        <Spacer isDoubleBase />
      </ScrollViews.WithKeyboardAvoidingView>

      {/* Logout Modal */}
      <BottomModal
        // toggle={HandleUnlinkContactModal}
        // visible={openUnlinkContactModal}
        heading={'Unlink Contact?'}>
        <Wrapper alignItemsCenter>
          <RowButton
            onPress2={HandleUnlinkContactModal}
            onPress1={HandleUnlinkContactModal}
            text1={'Cancel'}
            text2={'Unlink'}
            buttonStyle2={{backgroundColor: colors.darkRed}}
          />
        </Wrapper>
        <Spacer isDoubleBase />
      </BottomModal>
    </Wrapper>
  );
}
