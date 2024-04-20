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
            Recipient Contacts
          </Text>
        </Wrapper>

        <CustomInput
          left
          iconNameRight={'close'}
          iconTypeRight={'material-community'}
          title={'Search a Recipient'}
          placeholder={'Search by email or username...'}
        />

        <Spacer isBasic />

        <Buttons.Bordered
          //onPress={() => setOpenInviteViaEmailModal(true)}
          iconName={'link'}
          tintColor={colors.appTextColor3}
          // buttonColor={colors.appTextColor3}
          text={'Link New Recipient'}
        />
        <Spacer isBasic />
        {/* Link */}
        <RenderText text={'24 Linked Recipient Contacts'} />
        <Spacer isTiny />
        {LinkedRecipientContacts.map((item, index) => (
          <ItemContainer
            onPressIcon={HandleLinkedRecipientModal}
            key={index}
            item={item}
            index={index}
          />
        ))}
        <Spacer isDoubleBase />
        <Spacer isDoubleBase />
        <Spacer isDoubleBase />
      </ScrollViews.WithKeyboardAvoidingView>

      {/* Link Modal */}
      <BottomModal
        toggle={HandleLinkedRecipientModal}
        visible={openLinkedRecipientModal}
        paraContainerStyle={{marginHorizontal: sizes.marginHorizontal}}
        heading={'Linked Recipient'}>
        <Spacer isBasic />
        <BorderedWrapperWithUserDetails
          name={'Kathy Pacheco'}
          id={'BenjaminWilson87'}
          email={'j.e.dukes@aol.com'}
        />
        <Spacer isBasic />
        <ArrowRightButton text={'Edit Check-in Schedule'} />
        <Spacer isTiny />
        <ArrowRightButton
          onPress={HandleUnlinkContactModal}
          tintColor={colors.darkRed}
          iconName={'link-off'}
          text={'Unlink Contact'}
        />
        <Spacer isDoubleBase />
        <Spacer isBasic />
      </BottomModal>
      {/* Unlink Contact Modal */}
      <BottomModal
        toggle={HandleUnlinkContactModal}
        visible={openUnlinkContactModal}
        heading={'Unlink Contact?'}>
        <Wrapper alignItemsCenter>
          <Spacer isMedium />
          <Lines.Horizontal width={'88%'} />
          <Spacer isMedium />
          <Text isRegularFont isMedium>
            Do you really want to unlink this contact?
          </Text>
          <Spacer isMedium />
        </Wrapper>
        <BorderedWrapperWithUserDetails
          name={'Kathy Pacheco'}
          id={'BenjaminWilson87'}
          email={'j.e.dukes@aol.com'}
        />
        <Wrapper alignItemsCenter>
          <Spacer isMedium />
          <Lines.Horizontal width={'88%'} />
          <Spacer isMedium />
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
const RenderText = ({text}) => {
  return (
    <Wrapper marginHorizontalSmall>
      <Text isMediumFont isRegular>
        {text}
      </Text>
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
  onPressIcon,
}) => {
  return (
    <Wrapper key={index}>
      <Lines.Horizontal />
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
              {item.name}
            </Text>
            <Text style={{opacity: 0.75}} isRegularFont isRegular>
              {item.userId}
            </Text>
          </Wrapper>
        </Wrapper>

        <TouchableOpacity onPress={onPressIcon}>
          <Icon
            name={iconName ? iconName : 'dots-vertical'}
            type={iconType ? iconType : 'material-community'}
            size={iconSize ? iconSize : responsiveFontSize(25)}
            color={tintColor ? tintColor : colors.appTextColor3}
            iconStyle={[iconStyle]}
          />
        </TouchableOpacity>
      </Wrapper>
      {index === LinkedRecipientContacts.length - 1 && <Lines.Horizontal />}
    </Wrapper>
  );
};
