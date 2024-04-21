import React from 'react';
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
  RespondToCheckIn,
  colors,
  responsiveFontSize,
  routes,
} from '../../../services';
import {navigate} from '../../../navigation/rootNavigation';
import {useHooks} from './hooks';
import {Icon} from '@rneui/base';
import {TouchableOpacity} from 'react-native';

export default function Index() {
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

        <Spacer isBasic />

        <Spacer isBasic />

        {RespondToCheckIn.map((item, index) => (
          <ItemContainer
            onPressItem={() => navigate(routes.CheckingIn)}
            key={index}
            item={item}
            index={index}
            data={LinkedRecipientContacts}
            iconName={'chevron-right'}
          />
        ))}
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
