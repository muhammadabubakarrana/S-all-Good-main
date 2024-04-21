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
} from '../../../components';
import {
  appImages,
  appStyles,
  appSvgs,
  colors,
  responsiveFontSize,
  responsiveWidth,
  routes,
  sizes,
  users,
} from '../../../services';
import {navigate} from '../../../navigation/rootNavigation';
import {useHooks} from './hooks';

export default function Index() {
  const {
    openInviteViaEmailModal,
    setOpenInviteViaEmailModal,
    openLinkRequestModal,
    setOpenLinkRequestModal,
    HandleInviteViaEmailModal,
    HandleLinkRequestModal,
    HandleInviteSentModal,
    openInviteSentModal,
  } = useHooks();
  return (
    <Wrapper isMain>
      <Headers.Primary
        darkBar
        invertColors
        title={'Link Recipient'}
        showBackArrow
        titleStyle={{
          marginLeft: responsiveWidth(4),
        }}
        borderBottomWidth
      />
      <ScrollViews.WithKeyboardAvoidingView>
        {/* <Spacer isSmall /> */}

        <Spacer isBasic />
        <CustomInput
          left
          iconNameRight={'close'}
          iconTypeRight={'material-community'}
          title={'Search a Recipient'}
          placeholder={'Search by email or username...'}
        />
        <Spacer isBasic />

        <Wrapper marginHorizontalTiny>
          <Wrapper marginHorizontalSmall>
            <Text alignTextCenter isRegularFont isRegular>
              Couldn’t find the recipient? Send an invite now.
            </Text>
          </Wrapper>
        </Wrapper>
        <Spacer isSmall />

        <Buttons.Bordered
          onPress={() => setOpenInviteViaEmailModal(true)}
          iconName={'email'}
          tintColor={colors.appTextColor3}
          // buttonColor={colors.appTextColor3}
          text={'via Email'}
        />
        <Spacer isBasic />
        {/* Link */}
        <RenderText text={'4 Users are already in your contacts'} />
        <Spacer isTiny />
        {users.map((item, index) => (
          <ItemContainer
            onPressLink={() => setOpenLinkRequestModal(true)}
            key={index}
            item={item}
            index={index}
          />
        ))}
        <Spacer isDoubleBase />
        {/* Invite */}
        <RenderText text={'Send an invite to your contact'} />
        <Spacer isTiny />
        {users.map((item, index) => (
          <ItemContainer
            //  onPressInvite={() => setOpenInviteViaEmailModal(true)}
            isInvite
            key={index}
            item={item}
            index={index}
          />
        ))}
        <Spacer isMedium />
      </ScrollViews.WithKeyboardAvoidingView>
      {/* Invite Modal */}
      <BottomModal
        buttonText1={'Send Invite'}
        onPressButton1={HandleInviteSentModal}
        button1Style={{width: responsiveWidth(60), alignSelf: 'center'}}
        SvgIcon={appSvgs.inviteViaEmail}
        toggle={HandleInviteViaEmailModal}
        visible={openInviteViaEmailModal}
        heading={'Invite via Email'}
        paraContainerStyle={{marginHorizontal: sizes.marginHorizontal}}
        para={
          'Enter the email address of the recipient to send an invitation link via email.'
        }>
        <Spacer isBasic />
        <Wrapper marginVerticalSmall>
          <CustomInput
            title={'Email Address'}
            placeholder={'example@email.coms'}
          />
        </Wrapper>
      </BottomModal>
      {/* Link Modal */}
      <BottomModal
        buttonText1={'Setup Check-in Schedule'}
        buttonText2={'Skip for now'}
        SvgIcon={appSvgs.LinkChain}
        onPressButton1={() => navigate(routes.SetupCheckingUp)}
        onPressButton2={HandleLinkRequestModal}
        toggle={HandleLinkRequestModal}
        visible={openLinkRequestModal}
        paraContainerStyle={{marginHorizontal: sizes.marginHorizontal}}
        heading={'Link Request Sent'}
        para={
          "The link request has been successfully sent to the recipient. They will receive a notification to accept the link request shortly. Once they accept, you'll be able to monitor their well-being through regular check-ins."
        }>
        <Spacer isSmall />
        <Wrapper marginHorizontalBase marginVerticalBase>
          <Text alignTextCenter isRegularFont isMedium>
            Meanwhile, while the recipient accepts your request, would you like
            to set up your check-in schedule with them?
          </Text>
        </Wrapper>
      </BottomModal>
      {/* Invite Sent Success Modal */}
      <BottomModal
        // buttonText1={'Send Invite'}
        // onPressButton1={() => setOpenInviteViaEmailModal(false)}
        // button1Style={{width: responsiveWidth(60), alignSelf: 'center'}}
        SvgIcon={appSvgs.linkSent}
        // toggle={HandleInviteViaEmailModal}
        visible={openInviteSentModal}
        heading={'Invite Sent'}
        paraContainerStyle={{marginHorizontal: sizes.marginHorizontal}}
        para={'Your invite has been sent successfully.'}>
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

const ItemContainer = ({item, index, isInvite, onPressInvite, onPressLink}) => {
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
              {item.address}
            </Text>
          </Wrapper>
        </Wrapper>

        {isInvite ? (
          <Buttons.BorderedSmall
            onPress={onPressInvite}
            text={'Invite'}
            iconName={'account-plus'}
            iconSize={sizes.icons.medium}
            // textStyle={{...appStyles.textMedium}}
            buttonStyle={{
              backgroundColor: colors.appTextColor6,
              borderRadius: 12,
              height: sizes.smallButtonHeight,
              paddingHorizontal: responsiveWidth(3),
            }}
          />
        ) : (
          <Buttons.ColoredSmall
            onPress={onPressLink}
            iconName={'link'}
            iconSize={sizes.icons.medium}
            buttonStyle={{
              backgroundColor: colors.primary,
              borderRadius: 12,
              height: sizes.smallButtonHeight,
              paddingHorizontal: responsiveWidth(3),
            }}
            text={'Link'}
          />
        )}
      </Wrapper>
      {index === users.length - 1 && <Lines.Horizontal />}
    </Wrapper>
  );
};
