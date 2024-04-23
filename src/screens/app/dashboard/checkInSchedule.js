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
  BottomModal,
  CustomInput,
  CheckInScheduleWrapper,
  RecipientOrViewer,
} from '../../../components';
import {
  DummyCheckInData,
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
    // HandleTestCheckInModal,
    // openTestCheckInModal,
    // HandleShow,
    // show,
  } = useHooks();

  return (
    <Wrapper isMain>
      <Headers.Primary
        darkBar
        invertColors
        title={'Check-in Schedule'}
        showBackArrow
        borderBottomWidth
      />
      <ScrollViews.WithKeyboardAvoidingView>
        <Spacer isBasic />
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

        <RecipientOrViewer
          //   onPressIcon={HandleShow}
          name={'Kathy Pacheco'}
          userName={'BenjaminWilson87'}
          isViewer
          // buttonText={'Recipient'}
          iconColor={colors.darkRed}
          image={appImages.user5}
        />
        <Spacer isBasic />
        <CustomInput
          left
          iconNameRight={'close'}
          iconTypeRight={'material-community'}
          placeholder={'Search...'}
        />

        {/* <Spacer isSmall />
            <Buttons.Bordered
              onPress={() => navigate(routes.LinkViewer)}
              iconName={'eye'}
              tintColor={colors.appTextColor3}
              buttonStyle={{borderStyle: 'dashed', borderRadius: 48}}
              // buttonColor={colors.appTextColor3}
              text={'Link Viewer'}
            /> */}

        <Spacer isBasic />
        <Buttons.Bordered
          onPress={() =>
            navigate(routes.common, {
              screen: routes.AddTimeSlot,
              params: {showQuickResponse: true},
            })
          }
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
                navigate(routes.common, {
                  screen: routes.EditTimeSlot,
                  params: {showQuickResponse: true},
                })
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

        <Spacer isMedium />
      </ScrollViews.WithKeyboardAvoidingView>
    </Wrapper>
  );
}
