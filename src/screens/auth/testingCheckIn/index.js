import React from 'react';
import {
  Wrapper,
  Text,
  Spacer,
  Buttons,
  Headers,
  RowButton,
  ScrollViews,
  BottomModal,
  RenderCirclesWithImage,
  RenderResponseRecievedImage,
} from '../../../components';
import {
  appImages,
  appSvgs,
  colors,
  responsiveFontSize,
  routes,
  sizes,
} from '../../../services';
import {navigate} from '../../../navigation/rootNavigation';

import {useHooks} from './hooks';

export default function Index() {
  const {
    HandleNoResponseModal,
    openNoResponseModal,
    HandleResponseRecievedModal,
    openResponseRecievedModal,
  } = useHooks();
  return (
    <Wrapper isMain>
      <Headers.Primary
        darkBar
        invertColors
        title={'Testing Check-In'}
        showBackArrow
        isClose
        borderBottomWidth
      />
      <ScrollViews.WithKeyboardAvoidingView>
        {/* <Spacer isSmall /> */}
        <Wrapper marginVerticalBase alignItemsCenter>
          <Text
            isBoldFont
            style={{fontSize: responsiveFontSize(48), color: colors.primary}}>
            00:29:59
          </Text>
        </Wrapper>

        <Wrapper marginHorizontalTiny>
          <Wrapper marginHorizontalSmall>
            <Text alignTextCenter isRegularFont isMedium>
              S'all Good has sent a test push notification. Please open the
              notification to proceed.
            </Text>
          </Wrapper>
        </Wrapper>
        <RenderCirclesWithImage img={appImages.user1} />
        <Spacer isSmall />
        <Wrapper marginHorizontalTiny>
          <Wrapper alignItemsCenter marginHorizontalSmall>
            <Text style={{color: colors.primary}} isMedium isRegular>
              Waiting for response...
            </Text>
          </Wrapper>
        </Wrapper>
        <Spacer isSmall />
        <RenderButtons
          onPressLowerBtn={() => navigate(routes.Congratulations)}
          onPressUpperBtn={HandleNoResponseModal}
        />
        <Spacer isMedium />
      </ScrollViews.WithKeyboardAvoidingView>
      {/* No Response Modal */}
      <BottomModal
        SvgIcon={appSvgs.NoResponse}
        toggle={HandleNoResponseModal}
        visible={openNoResponseModal}
        paraContainerStyle={{marginHorizontal: sizes.marginHorizontal}}
        heading={'No Response!'}
        para={
          'The recipient has not responded to the check-in notification within the allotted time window. Please consider reaching out to them directly to ensure their well-being.'
        }>
        <Spacer isDoubleBase />

        <RenderButtons
          onPressUpperBtn={HandleResponseRecievedModal}
          UpperBtnTxt={'Try Again for 5 minutes'}
          LowerBtnTxt={'Dismiss Check-in'}
        />
        <Spacer isDoubleBase />
      </BottomModal>
      {/* Response Recieved Modal */}
      <BottomModal
        //  SvgIcon={appSvgs.NoResponse}
        toggle={HandleResponseRecievedModal}
        visible={openResponseRecievedModal}
        heading={'Response Received!'}>
        <RenderResponseRecievedImage
          img={appImages.user1}
          txt={'I am doing great! 😃'}
        />

        <Wrapper marginHorizontalBase>
          <Text alignTextCenter isRegularFont isMedium>
            The recipient has responded to the check-in notification. You can
            review their response and take any necessary action.
          </Text>
        </Wrapper>
        <Spacer isMedium />
        <Buttons.Bordered
          onPress={HandleResponseRecievedModal}
          tintColor={colors.appTextColor3}
          // buttonColor={colors.appTextColor3}
          text={'Dismiss Check-in'}
        />
        <Spacer isDoubleBase />
      </BottomModal>
    </Wrapper>
  );
}

const RenderButtons = ({
  onPressRowButton2,
  onPressRowButton1,
  onPressUpperBtn,
  onPressLowerBtn,
  UpperBtnTxt,
  LowerBtnTxt,
}) => {
  return (
    <>
      <Wrapper alignItemsCenter>
        <RowButton
          onPress2={onPressRowButton2}
          onPress1={onPressRowButton1}
          textStyle1={{color: colors.appTextColor6}}
          buttonColorPrimary
          buttonColorLeft={colors.primary}
          iconNameLeftInput={'message-bulleted'}
          iconTypeLeftInput={'material-community'}
          iconTypeRight={'material-community'}
          iconNameRight={'phone'}
          text1={'Send Message'}
          text2={'Call Now'}
        />
      </Wrapper>
      <Spacer isSmall />
      <Wrapper>
        <Buttons.Colored
          onPress={onPressUpperBtn}
          buttonColor={colors.secondary}
          text={UpperBtnTxt ? UpperBtnTxt : 'Send Notification Again'}
          tintColor={colors.appTextColor3}
          iconName={'refresh'}
        />
        <Spacer isSmall />
        <Buttons.Bordered
          onPress={onPressLowerBtn}
          tintColor={colors.appTextColor3}
          // buttonColor={colors.appTextColor3}
          text={LowerBtnTxt ? LowerBtnTxt : 'Skip for now'}
        />
      </Wrapper>
    </>
  );
};
