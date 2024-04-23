import React, {useState} from 'react';
import {
  Wrapper,
  Text,
  StatusBars,
  Images,
  Spacer,
  Lines,
  ScrollViews,
} from '../../../components';
import {
  LinkedRecipientContacts,
  RespondToCheckInData,
  appFonts,
  colors,
  fontSizes,
  responsiveFontSize,
  routes,
  sizes,
} from '../../../services';
import {navigate} from '../../../navigation/rootNavigation';
import {useHooks} from './hooks';
import {Icon} from '@rneui/base';
import {TouchableOpacity} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';

export default function Index() {
  const [mode, setMode] = useState('Upcoming');
  return (
    <Wrapper isMain>
      <Spacer isStatusBarHeigt />
      <StatusBars.Dark />
      <ScrollViews.WithKeyboardAvoidingView>
        {/* <Spacer isSmall /> */}
        <Wrapper marginHorizontalBase marginVerticalBase>
          <Text isMediumTitle isBoldFont>
            Respond to Check-in
          </Text>
        </Wrapper>

        <Wrapper marginHorizontalBase>
          <SwitchSelector
            options={[
              {
                label: 'Upcoming',
                value: 'Upcoming',
                activeColor: colors.appTextColor3,
              },
              {
                label: 'Missed Alerts',
                value: 'Missed Alerts',
                activeColor: colors.appTextColor3,
              },
            ]}
            initial={0}
            style={{width: '75%'}}
            // height={sizes.buttonHeight}

            fontSize={fontSizes.medium}
            selectedTextColor={colors.appTextColor6}
            textStyle={{opacity: 0.6, fontFamily: appFonts.appTextMedium}}
            backgroundColor={colors.secondary}
            onPress={value => setMode(value)}
          />
        </Wrapper>
        <Spacer isBasic />

        {RespondToCheckInData.map((item, index) =>
          mode === 'Upcoming' ? (
            <ItemContainer
              key={index}
              item={item}
              index={index}
              data={LinkedRecipientContacts}
              iconName={'chevron-right'}
              onPressItem={() => navigate(routes.CheckingInRespond)}
            />
          ) : null,
        )}
        <Spacer isDoubleBase />
        <Spacer isDoubleBase />
        <Spacer isDoubleBase />
      </ScrollViews.WithKeyboardAvoidingView>
    </Wrapper>
  );
}

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
              <Text isRegularFont isRegular>
                {item.name} wants to check-in
              </Text>
              <Text style={{opacity: 0.75}} isRegularFont isRegular>
                {item.time}
              </Text>
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
