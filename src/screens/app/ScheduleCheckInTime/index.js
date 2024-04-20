import React, {useState} from 'react';
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

export default function Index() {
  const [isNotificationsEnable, setIsNotificationsEnable] = useState(false);
  const [isAllowCalls, setIsAllowCalls] = useState(false);
  const [isAllowContactAccess, setIsAllowContactAccess] = useState(false);
  const [isAllowLocation, setIsAllowLocation] = useState(false);
  const {DummyCheckIn} = useHooks();

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
        <RecipientOrView
          name={'Kathy Pacheco'}
          userName={'BenjaminWilson87'}
          isViewer
          // buttonText={'Recipient'}
          iconColor={colors.darkRed}
          image={appImages.user5}
        />
        <Spacer isSmall />
        <Buttons.Bordered
          //  onPress={() => setOpenInviteViaEmailModal(true)}
          iconName={'eye'}
          tintColor={colors.appTextColor3}
          buttonStyle={{borderStyle: 'dashed', borderRadius: 48}}
          // buttonColor={colors.appTextColor3}
          text={'Link Viewer'}
        />
        <Spacer isBasic />
        <Buttons.Bordered
          //  onPress={() => setOpenInviteViaEmailModal(true)}
          iconName={'alarm-plus'}
          tintColor={colors.appTextColor3}
          buttonStyle={{borderStyle: 'dashed'}}
          // buttonColor={colors.appTextColor3}
          text={'Add Time Slot'}
        />
        <Spacer isBasic />
        {DummyCheckIn.map((item, index) => {
          const {onPressEdit, heading, para, time, duration} = item;
          return (
            <CheckInSchedule
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
          //  onPress={() => navigate(routes.NotificationTest)}
          buttonColor={colors.primary}
          text={'Continue'}
        />

        {/* checkIn wrapper */}
        <Spacer isMedium />
      </ScrollViews.WithKeyboardAvoidingView>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  lineThroughText: {
    textDecorationLine: 'line-through',
  },
});

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
