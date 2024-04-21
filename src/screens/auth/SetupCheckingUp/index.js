import React, {useEffect, useState} from 'react';
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
  ScrollViews,
  CheckInSchedule,
  BottomModal,
} from '../../../components';
import {
  appImages,
  appSvgs,
  colors,
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
  routes,
  sizes,
} from '../../../services';
import {navigate} from '../../../navigation/rootNavigation';
import {Icon} from '@rneui/base';
import {Pressable, StyleSheet, TouchableOpacity} from 'react-native';
import {useHooks} from './hooks';

export default function Index(props) {
  const {
    DummyCheckIn,
    HandleTestCheckInModal,
    openTestCheckInModal,
    HandleShow,
    show,
  } = useHooks();

  return (
    <Wrapper isMain>
      <Headers.Primary
        darkBar
        invertColors
        title={'Schedule Check-in Time'}
        showBackArrow
        titleStyle={{
          marginLeft: responsiveWidth(4),
          width: responsiveWidth(75),
        }}
        borderBottomWidth
        isClose
      />
      <ScrollViews.WithKeyboardAvoidingView>
        <Wrapper marginVerticalSmall alignItemsCenter>
          <Icons.Svg
            svg={appSvgs.scheduleTime}
            size={responsiveFontSize(110)}
          />
        </Wrapper>
        <Wrapper marginHorizontalTiny>
          <Wrapper marginHorizontalSmall>
            <Text alignTextCenter isRegularFont isMedium>
              Add the time slots you want to check-in with
            </Text>
          </Wrapper>
        </Wrapper>
        <Spacer isSmall />
        {/* User wrapper */}
        <RecipientOrView
          name={'Kathy Pacheco'}
          userName={'BenjaminWilson87'}
          // buttonText={'Recipient'}
          image={appImages.user1}
        />
        <Spacer isSmall />
        {!show && (
          <RecipientOrView
            onPressIcon={HandleShow}
            name={'Kathy Pacheco'}
            userName={'BenjaminWilson87'}
            isViewer
            // buttonText={'Recipient'}
            iconColor={colors.darkRed}
            image={appImages.user5}
          />
        )}

        {show && (
          <>
            <Spacer isSmall />
            <Buttons.Bordered
              onPress={() =>
                navigate(routes.LinkRecipient, {type: 'linkViewer'})
              }
              iconName={'eye'}
              tintColor={colors.appTextColor3}
              buttonStyle={{borderStyle: 'dashed', borderRadius: 48}}
              // buttonColor={colors.appTextColor3}
              text={'Link Viewer'}
            />
          </>
        )}
        <Spacer isBasic />
        <Buttons.Bordered
          onPress={() => navigate(routes.common, {screen: routes.AddTimeSlot})}
          iconName={'alarm-plus'}
          tintColor={colors.appTextColor3}
          buttonStyle={{borderStyle: 'dashed'}}
          // buttonColor={colors.appTextColor3}
          text={'Add Time Slot'}
        />
        <Spacer isBasic />
        {DummyCheckIn.map((item, index) => {
          const {heading, para, time, duration} = item;
          return (
            <CheckInSchedule
              onPressEdit={() =>
                navigate(routes.common, {screen: routes.EditTimeSlot})
              }
              key={index}
              heading={heading}
              para={para}
              time={time}
              duration={duration}
            />
          );
        })}
        <Spacer isSmall />

        <Buttons.Colored
          onPress={HandleTestCheckInModal}
          buttonColor={colors.primary}
          text={'Continue'}
        />

        {/* checkIn wrapper */}
        <Spacer isMedium />
      </ScrollViews.WithKeyboardAvoidingView>
      {/* Test Check-in Modal */}
      <BottomModal
        buttonText1={'Test Check-in with John'}
        buttonText2={'Skip for now'}
        SvgIcon={appSvgs.testCheckIn}
        onPressButton1={() => navigate(routes.TestingCheckIn)}
        onPressButton2={HandleTestCheckInModal}
        toggle={HandleTestCheckInModal}
        visible={openTestCheckInModal}
        paraContainerStyle={{marginHorizontal: sizes.marginHorizontal}}
        heading={'Test Check-In'}
        para={
          'Would you like to conduct a test check-in to ensure everything works properly between you and your loved ones?'
        }>
        <Spacer isBasic />
      </BottomModal>
    </Wrapper>
  );
}

const RecipientOrView = ({
  name,
  userName,
  onPressButton,
  onPressIcon,
  image,
  iconName,
  iconType,
  iconSize,
  iconStyle,
  iconColor,
  isViewer,
}) => {
  return (
    <Wrapper
      marginHorizontalSmall
      style={{
        borderRadius: 48,
        borderWidth: 0.5,
        borderColor: colors.grayLight,
      }}
      justifyContentSpaceBetween
      flexDirectionRow
      alignItemsCenter
      paddingHorizontalSmall
      paddingVerticalSmall>
      <Wrapper flexDirectionRow alignItemsCenter>
        <Images.Round source={{uri: image}} />
        <Spacer horizontal isSmall />
        <Wrapper>
          <Text isMediumFont isMedium>
            {name}
          </Text>
          <Text style={{opacity: 0.75}} isRegularFont isRegular>
            {userName}
          </Text>
        </Wrapper>
      </Wrapper>

      <Wrapper flexDirectionRow alignItemsCenter>
        <Buttons.ColoredSmall
          // onPress={onPressLink}
          buttonStyle={{
            backgroundColor: isViewer ? colors.primary : colors.orange,
            paddingHorizontal: responsiveWidth(2),
          }}
          text={isViewer ? 'Viewer' : 'Recipient'}
        />
        <Spacer horizontal isSmall />
        <TouchableOpacity onPress={onPressIcon}>
          <Icon
            name={
              iconName
                ? iconName
                : isViewer
                ? 'delete-outline'
                : 'swap-horizontal'
            }
            type={iconType ? iconType : 'material-community'}
            size={iconSize ? iconSize : sizes.icons.medium}
            color={iconColor}
            iconStyle={[{marginRight: responsiveWidth(2)}, iconStyle]}
          />
        </TouchableOpacity>
      </Wrapper>
    </Wrapper>
  );
};
