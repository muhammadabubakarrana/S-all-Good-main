import React from 'react';
import {
  Wrapper,
  Text,
  Spacer,
  Buttons,
  Headers,
  ScrollViews,
  BottomModal,
  RenderCirclesWithImage,
  RenderResponseRecievedImage,
  CheckInScheduleWrapper,
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
        title={'Checking In'}
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
        <CheckInScheduleWrapper
          dontShowEditIcon
          heading={'Morning Check-In'}
          para={
            'Check to ensure that Mom has taken her morning medications and is feeling well. Remind her to have breakfast and ask if she needs any assistance with her morning routine.'
          }
          dontShowTimeAndDuration
        />
        <RenderCirclesWithImage img={appImages.user1} />
        <Spacer isSmall />
        <Wrapper marginHorizontalTiny>
          <Wrapper alignItemsCenter marginHorizontalSmall>
            <Text style={{color: colors.primary}} isMedium isRegular>
              Waiting for response...
            </Text>
          </Wrapper>
        </Wrapper>
        <Spacer isBasic />
        <RenderButtons
          onPressUpperBtn={HandleResponseRecievedModal}
          onPressLowerBtn={HandleNoResponseModal}
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
          LowerBtnTxt={'Try Again for 5 minutes'}
          onPressUpperBtn={HandleNoResponseModal}
          onPressLowerBtn={HandleNoResponseModal}
          onPressLowestBtn={HandleNoResponseModal}
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
        <Spacer isDoubleBase />
      </BottomModal>
    </Wrapper>
  );
}

const RenderButtons = ({
  onPressUpperBtn,
  onPressLowerBtn,
  onPressLowestBtn,
  UpperBtnTxt,
  LowerBtnTxt,
  LowestBtnTxt,
}) => {
  return (
    <Wrapper>
      <Buttons.Colored
        onPress={onPressUpperBtn}
        // buttonColor={colors.secondary}
        text={UpperBtnTxt ? UpperBtnTxt : 'Call Now'}
        tintColor={colors.appTextColor6}
        iconName={'phone'}
      />
      <Spacer isSmall />
      <Buttons.Colored
        onPress={onPressLowerBtn}
        buttonColor={colors.secondary}
        text={LowerBtnTxt ? LowerBtnTxt : 'Send Notification Again'}
        tintColor={colors.appTextColor3}
        iconName={'refresh'}
      />
      {onPressLowestBtn && (
        <>
          <Spacer isSmall />
          <Buttons.Bordered
            onPress={onPressLowestBtn}
            tintColor={colors.appTextColor3}
            // buttonColor={colors.appTextColor3}
            text={LowestBtnTxt ? LowestBtnTxt : 'Dismiss Check-in'}
          />
        </>
      )}
    </Wrapper>
  );
};
