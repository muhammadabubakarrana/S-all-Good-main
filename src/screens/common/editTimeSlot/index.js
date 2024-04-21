import React from 'react';
import {
  Text,
  Buttons,
  ScrollViews,
  Wrapper,
  Spacer,
  Headers,
  CustomInput,
  Icons,
  RowInputs,
  RowButton,
  Lines,
  BottomModal,
  CheckInSchedule,
  RenderLineWithVerticalBase,
} from '../../../components';
import {
  responsiveFontSize,
  colors,
  responsiveWidth,
  appFonts,
  routes,
  responsiveHeight,
  fontSizes,
  sizes,
} from '../../../services';
import {useHooks} from './hooks';
import {navigate} from '../../../navigation/rootNavigation';
import {TextInput} from 'react-native';
export default function Index() {
  const {accepted, setAccepted} = useHooks();
  return (
    <Wrapper isMain style={[{}]}>
      <ScrollViews.KeyboardAvoiding>
        <Headers.Primary
          darkBar
          invertColors
          title={'Edit Time Slot'}
          showBackArrow
          borderBottomWidth
        />
        <Wrapper>
          <Spacer isBasic />
          <CustomInput title={'Check In Title'} />

          <Spacer isSmall />
          <RowInputs
            iconNameRightFirst={'clock-outline'}
            iconTypeRightFirst={'material-community'}
            iconNameRightSecond={'keyboard-arrow-down'}
            iconTypeRightSecond={'material'}
            placeholder1={'Select--'}
            placeholder2={'Select'}
            title1={'Time Slot'}
            title2={'Response Window'}
          />
          <Spacer isSmall />
          <RenderOtherNotes />
          <RenderLineWithVerticalBase BothSpaceBase />
          <Wrapper alignItemsCenter>
            <RowButton
              iconNameLeftInput={'delete'}
              iconTypeLeftInput={'material-community'}
              tintColorLeft={colors.darkRed}
              textStyle1={{color: colors.darkRed}}
              //  onPress2={HandleUnlinkContactModal}
              //   onPress1={HandleLogoutModal}
              text1={'Delete'}
              text2={'Update'}
              buttonStyle2={{backgroundColor: colors.primary}}
            />
          </Wrapper>
          <Spacer isBasic />

          <Spacer isBasic />
        </Wrapper>
      </ScrollViews.KeyboardAvoiding>
      {/* Logout Modal */}
      <BottomModal
        //   toggle={HandleLogoutModal}
        // visible={true}
        showLineAfterHeading
        para={'Do you really want to delete this time slot?'}
        heading={'Delete Time Slot'}>
        <Spacer isBasic />
        <CheckInSchedule
          dontShowEditIcon
          heading={'Morning Check-In'}
          para={
            'Check to ensure that Mom has taken her morning medications and is feeling well. Remind her to have breakfast and ask if she needs any assistance with her morning routine.'
          }
          time={'10:00 AM'}
          duration={'~30min'}
        />
        <RenderLineWithVerticalBase LowerSpaceBase />
        <Wrapper alignItemsCenter>
          <RowButton
            //  onPress2={HandleUnlinkContactModal}
            //  onPress1={HandleLogoutModal}
            text1={'Cancel'}
            text2={'Delete'}
            buttonStyle2={{backgroundColor: colors.darkRed}}
          />
        </Wrapper>
        <Spacer isDoubleBase />
      </BottomModal>
    </Wrapper>
  );
}

const RenderOtherNotes = ({onChangeText}) => {
  return (
    <Wrapper>
      <Wrapper marginHorizontalBase>
        <Text
          style={{
            fontSize: fontSizes.regular,
            opacity: 0.75,
            color: colors.appTextColor3,
            fontFamily: appFonts.appTextBold,
          }}>
          Other Notes
        </Text>
      </Wrapper>
      <Spacer isTiny />

      <Wrapper
        paddingVerticalSmall
        paddingHorizontalSmall
        marginHorizontalBase
        style={{
          height: responsiveHeight(17),
          borderWidth: 1,
          borderColor: colors.grayLight,
          borderRadius: sizes.cardRadius,
        }}
        flex={1}>
        <TextInput
          multiline
          style={{
            marginTop: -10,
            color: colors.appTextColor3,
            fontFamily: appFonts.appTextRegular,
            fontSize: responsiveFontSize(16),
          }}
          placeholderTextColor={colors.grayLight}
          placeholder="Write something here..."
          onChangeText={onChangeText}
        />
      </Wrapper>
    </Wrapper>
  );
};
