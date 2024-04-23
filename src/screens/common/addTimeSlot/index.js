import React, {useEffect} from 'react';
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
import {goBack, navigate} from '../../../navigation/rootNavigation';
import {TextInput} from 'react-native';
export default function Index({route}) {
  const {accepted, setAccepted} = useHooks();
  const previousScreenData = route.params;

  return (
    <Wrapper isMain style={[{}]}>
      <Headers.Primary
        darkBar
        invertColors
        title={'Add Time Slot'}
        showBackArrow
        borderBottomWidth
      />
      <ScrollViews.KeyboardAvoiding>
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
          {previousScreenData?.showQuickResponse ? (
            <>
              <CustomInput
                title={'Quick Response 01'}
                placeholder={'Search...'}
              />
              <Spacer isSmall />
              <CustomInput
                title={'Quick Response 02'}
                placeholder={'Search...'}
              />
              <RenderLineWithVerticalBase BothSpaceBase />
            </>
          ) : null}
          <Wrapper alignItemsCenter>
            <RowButton
              //  onPress2={HandleUnlinkContactModal}
              onPress1={goBack}
              text1={'Cancel'}
              text2={'Add Slot'}
              buttonStyle2={{backgroundColor: colors.primary}}
            />
          </Wrapper>
          <Spacer isBasic />

          <Spacer isBasic />
        </Wrapper>
      </ScrollViews.KeyboardAvoiding>
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
