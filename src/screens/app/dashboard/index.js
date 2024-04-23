import React from 'react';
import {
  Wrapper,
  Text,
  StatusBars,
  Images,
  Spacer,
  Lines,
  ScrollViews,
  Buttons,
  ArrowRightButton,
  BottomModal,
  CheckInScheduleWrapper,
} from '../../../components';
import {
  LinkedRecipientContacts,
  RespondToCheckInData,
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
import {Icon} from '@rneui/base';
import {TouchableOpacity} from 'react-native';

export default function Index() {
  const {
    mode,
    HandleMode,
    HandleOpenCheckInModal,
    openCheckInInfoModal,
    data,
    GoToCheckInSchedule,
  } = useHooks();

  return (
    <Wrapper isMain>
      <Spacer isStatusBarHeigt />
      <StatusBars.Dark />
      <ScrollViews.WithKeyboardAvoidingView>
        {/* <Spacer isSmall /> */}
        <Wrapper marginHorizontalBase marginVerticalBase>
          <Text isMediumTitle isBoldFont>
            Dashboard
          </Text>
        </Wrapper>

        <Spacer isSmall />
        <Wrapper marginHorizontalBase>
          <Text isTinyTitle isMediumFont>
            Check-in Overview
          </Text>
        </Wrapper>
        <Spacer isTiny />
        {/* Row Buttons as heading */}
        <Wrapper marginHorizontalBase flexDirectionRow alignItemsCenter>
          {mode === 'Today' ? (
            <Buttons.ColoredSmall
              onPress={() => HandleMode('Today')}
              text={'Today'}
            />
          ) : (
            <Buttons.BorderedSmall
              onPress={() => HandleMode('Today')}
              text={'Today'}
            />
          )}

          <Spacer isTiny horizontal />
          {mode === 'This Week' ? (
            <Buttons.ColoredSmall
              onPress={() => HandleMode('This Week')}
              text={'This Week'}
            />
          ) : (
            <Buttons.BorderedSmall
              onPress={() => HandleMode('This Week')}
              text={'This Week'}
            />
          )}

          <Spacer isTiny horizontal />
          {mode === 'This Month' ? (
            <Buttons.ColoredSmall
              onPress={() => HandleMode('This Month')}
              text={'This Month'}
            />
          ) : (
            <Buttons.BorderedSmall
              onPress={() => HandleMode('This Month')}
              text={'This Month'}
            />
          )}
        </Wrapper>
        <Spacer isSmall />
        <Wrapper
          marginHorizontalBase
          justifyContentCenter
          alignItemsCenter
          flexDirectionRow>
          {data.map((item, index) => (
            <Wrapper
              backgroundColor={colors.secondary}
              paddingHorizontalMedium
              paddingVerticalSmall
              style={{
                borderRadius: 12,
                marginRight: index == 2 ? null : responsiveWidth(1),
              }}
              key={index}>
              <Wrapper
                alignItemsCenter
                style={{paddingHorizontal: responsiveWidth(2)}}>
                <Text
                  isBoldFont
                  style={{
                    fontSize: responsiveFontSize(48),
                    color:
                      index == 0
                        ? colors.primary
                        : index == 1
                        ? colors.orangeLight
                        : index == 2
                        ? colors.darkRed
                        : null,
                  }}>
                  {item.value}
                </Text>
                <Text isRegular>{item.status}</Text>
              </Wrapper>
            </Wrapper>
          ))}
        </Wrapper>
        <Spacer isBasic />

        <Wrapper marginHorizontalBase>
          <Text isTinyTitle isMediumFont>
            Upcoming Check-ins
          </Text>
        </Wrapper>
        <Spacer isSmall />
        {RespondToCheckInData.map((item, index) =>
          mode === 'Today' ? (
            <ItemContainer
              key={index}
              item={item}
              index={index}
              iconName={'chevron-right'}
              onPressItem={HandleOpenCheckInModal}
            />
          ) : null,
        )}
        <Spacer isDoubleBase />
        <Spacer isDoubleBase />
        <Spacer isDoubleBase />
      </ScrollViews.WithKeyboardAvoidingView>
      {/* Check-in Info Modal */}
      <BottomModal
        toggle={HandleOpenCheckInModal}
        visible={openCheckInInfoModal}
        heading={'Check-in Info'}>
        <Spacer isBasic />
        <BorderedWrapperCheckInInfo
          name={'Jane Doe'}
          CheckIn={'Reached Home Safely Check-in'}
          time={'Today, 08:30 AM'}
          Image={appImages.user1}
        />
        <Spacer isBasic />
        <CheckInScheduleWrapper
          dontShowEditIcon
          heading={'Morning Check-In'}
          para={
            'Check to ensure that Mom has taken her morning medications and is feeling well. Remind her to have breakfast and ask if she needs any assistance with her morning routine.'
          }
          time={'10:00 AM'}
          duration={'~30min'}
        />
        <Spacer isBasic />
        <ArrowRightButton
          onPress={() => navigate(routes.CheckingIn)}
          text={'Check-in Now'}
        />
        <Spacer isTiny />
        <ArrowRightButton
          onPress={GoToCheckInSchedule}
          text={'Edit Check-in Schedule'}
        />
        <Spacer isTiny />
        <ArrowRightButton
          onPress={HandleOpenCheckInModal}
          tintColor={colors.darkRed}
          text={'Dismiss Check-in'}
        />
        <Spacer isDoubleBase />
        <Spacer isBasic />
      </BottomModal>
    </Wrapper>
  );
}

export const BorderedWrapperCheckInInfo = ({Image, name, CheckIn, time}) => {
  return (
    <Wrapper
      isBorderedWrapper
      style={[
        {
          borderWidth: 0.5,
        },
      ]}
      paddingVerticalSmall
      flexDirectionRow
      alignItemsCenter>
      <Wrapper
        style={{
          borderWidth: 1.5,
          borderColor: colors.grayLight,
          borderRadius: 100,
        }}>
        <Images.Round
          size={responsiveFontSize(50)}
          source={{uri: Image ? Image : appImages.user5}}
        />
      </Wrapper>
      <Spacer horizontal isSmall />
      <Wrapper>
        <Text isMediumFont isMedium>
          {CheckIn}
        </Text>
        <Wrapper flexDirectionRow alignItemsCenter>
          <Text isRegularFont isRegular>
            with {name}
          </Text>
          <Spacer isTiny horizontal />
          <Text style={{opacity: 0.75}} isRegularFont isRegular>
            {time}
          </Text>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};
const ItemContainer = ({
  item,
  index,
  iconName,
  iconType,
  iconStyle,
  tintColor,
  iconSize,
  onPressItem,
}) => {
  return (
    <Wrapper key={index}>
      <Lines.Horizontal />
      <TouchableOpacity onPress={onPressItem}>
        <Wrapper
          justifyContentSpaceBetween
          flexDirectionRow
          alignItemsCenter
          paddingHorizontalBase
          paddingVerticalSmall>
          <Wrapper flexDirectionRow alignItemsCenter>
            <Images.Round source={{uri: item.image}} />
            <Spacer horizontal isBasic />
            <Wrapper>
              <Text isMediumFont isMedium>
                {item.response}
              </Text>
              <Wrapper flexDirectionRow alignItemsCenter>
                <Text isRegularFont isRegular>
                  with {item.name}
                </Text>
                <Spacer isTiny horizontal />
                <Text style={{opacity: 0.75}} isRegularFont isRegular>
                  {item.time}
                </Text>
              </Wrapper>
            </Wrapper>
          </Wrapper>

          <Icon
            name={iconName ? iconName : 'dots-vertical'}
            type={iconType ? iconType : 'material-community'}
            size={iconSize ? iconSize : responsiveFontSize(25)}
            color={tintColor ? tintColor : colors.appTextColor3}
            iconStyle={[iconStyle]}
          />
        </Wrapper>
      </TouchableOpacity>
      {index === LinkedRecipientContacts.length - 1 && <Lines.Horizontal />}
    </Wrapper>
  );
};
