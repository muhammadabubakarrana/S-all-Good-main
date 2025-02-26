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
  ScrollViews,
  BottomModal,
  CheckInScheduleWrapper,
  RecipientOrViewer,
} from '../../../components';
import {
  DummyCheckInData,
  appImages,
  appSvgs,
  colors,
  responsiveFontSize,
  responsiveWidth,
  routes,
  sizes,
} from '../../../services';
import {navigate} from '../../../navigation/rootNavigation';
import {Icon} from '@rneui/base';
import {TouchableOpacity} from 'react-native';
import {useHooks} from './hooks';

export default function Index(props) {
  const {HandleTestCheckInModal, openTestCheckInModal, HandleShow, show} =
    useHooks();

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
        <RecipientOrViewer
          name={'Kathy Pacheco'}
          userName={'BenjaminWilson87'}
          // buttonText={'Recipient'}
          image={appImages.user1}
        />
        <Spacer isSmall />
        {!show && (
          <RecipientOrViewer
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
              onPress={() => navigate(routes.LinkViewer)}
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
        {DummyCheckInData.map((item, index) => {
          const {heading, para, time, duration} = item;
          return (
            <CheckInScheduleWrapper
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
