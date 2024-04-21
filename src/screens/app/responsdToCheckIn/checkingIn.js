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
  Icons,
  CheckInSchedule,
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
import {TouchableOpacity} from 'react-native';

export default function Index() {
  const {openResponseSentModal, HandleResponseSentModal} = useHooks();
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
        <Spacer isBasic />

        <CheckInSchedule
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
              Jane is waiting for your response...
            </Text>
          </Wrapper>
        </Wrapper>
        <Wrapper
          marginVerticalBase
          marginHorizontalBase
          justifyContentSpaceAround
          alignItemsCenter
          flexDirectionRow>
          <TouchableOpacity onPress={HandleResponseSentModal}>
            <Icons.Svg svg={appSvgs.logo} size={responsiveFontSize(100)} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icons.Svg
              svg={appSvgs.InvertedThumblogo}
              size={responsiveFontSize(100)}
            />
          </TouchableOpacity>
        </Wrapper>
        <RenderButtons onPressLowerBtn={{}} />
        <Spacer isMedium />
      </ScrollViews.WithKeyboardAvoidingView>

      {/* Response Recieved Modal */}
      <BottomModal
        toggle={HandleResponseSentModal}
        visible={openResponseSentModal}
        heading={'Response Received!'}>
        <RenderResponseRecievedImage
          img={appImages.user1}
          txt={'I am doing great! 😃'}
          bgColor={colors.appTextColor3}
        />

        <Wrapper marginHorizontalBase>
          <Text alignTextCenter isRegularFont isMedium>
            Your response has been sent to Jane.
          </Text>
        </Wrapper>
        <Spacer isMedium />

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

      <Buttons.Bordered
        onPress={onPressLowerBtn}
        tintColor={colors.appTextColor3}
        // buttonColor={colors.appTextColor3}
        text={'Dismiss Check-in'}
      />
    </>
  );
};
