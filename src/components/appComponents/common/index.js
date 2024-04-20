import React from 'react';
import Wrapper from '../../wrapper';
import Text from '../../text';
import {
  appSvgs,
  appStyles,
  colors,
  responsiveWidth,
  sizes,
  responsiveHeight,
  responsiveFontSize,
  appFonts,
  fontSizes,
  appImages,
} from '../../../services';
import * as TextInputs from '../../textInput';
import * as Modals from '../../modals';
import * as Icons from '../../icons';
import {Pressable, StyleSheet, TouchableOpacity} from 'react-native';
import {Buttons, Images} from '../..';
import Spacer from '../../spacer';
import {Icon} from '@rneui/base';

export const ChatInput = ({onPressEmojy, onPressSend, ...props}) => {
  return (
    <Wrapper
      background1
      style={[
        {
          paddingTop: sizes.marginVertical / 2,
          paddingBottom: sizes.marginVertical / 1.5,
        },
        appStyles.shadowExtraDark,
      ]}>
      <Wrapper flexDirectionRow alignItemsFlexEnd>
        <Icons.Button
          iconName={'smile'}
          iconType={'feather'}
          buttonColor={colors.appBgColor1}
          iconColor={colors.appTextColor5}
          iconSize={responsiveWidth(7)}
          buttonSize={responsiveWidth(10)}
          isRound
          buttonStyle={[appStyles.marginHorizontalTiny]}
          onPress={onPressEmojy}
        />
        <Wrapper flex={1}>
          <TextInputs.Colored
            placeholder={'Write a message'}
            placeholderTextColor={colors.appTextColor5}
            containerStyle={{...appStyles.marginHorizontalZero}}
            inputContainerStyle={{
              backgroundColor: colors.appBgColor1,
              borderRadius: sizes.cardRadius / 2,
            }}
            multiline
            inputStyle={[
              {
                height: null,
              },
              appStyles.paddingHorizontalZero,
              appStyles.marginVerticalZero,
              appStyles.paddingVerticalSmall,
              appStyles.fontRegular,
              {},
            ]}
            {...props}
          />
        </Wrapper>
        <Icons.Button
          iconName={'send'}
          iconType={'feather'}
          buttonColor={colors.appColor1}
          iconColor={colors.appTextColor6}
          iconSize={responsiveWidth(6)}
          buttonSize={responsiveWidth(10)}
          isRound
          buttonStyle={[appStyles.marginHorizontalSmall]}
          onPress={onPressSend}
        />
      </Wrapper>
    </Wrapper>
  );
};

export const TitleInfoPrimary = ({
  title,
  info,
  isBold,
  titleStyel,
  infoStyle,
}) => {
  const titleInfoBold = isBold || false;
  return (
    <Wrapper marginHorizontalBase flexDirectionRow justifyContentSpaceBetween>
      <Text isMedium isBoldFont={titleInfoBold} style={titleStyel}>
        {title}
      </Text>
      <Text isMedium isBoldFont={titleInfoBold} style={infoStyle}>
        {info}
      </Text>
    </Wrapper>
  );
};

export const IconButtonPrimary = ({...props}) => {
  return (
    <Icons.Button
      buttonColor={colors.appColor1}
      iconColor={colors.appTextColor6}
      iconSize={responsiveWidth(6)}
      buttonSize={responsiveWidth(10)}
      iconName={'arrow-left'}
      isRound
      {...props}
    />
  );
};

export const NoDataViewPrimary = ({containerStyle, ...props}) => {
  return (
    <Wrapper style={containerStyle}>
      <Icons.WithText
        iconName={'search-off'}
        iconType="material"
        text={'No Data Available'}
        direction="column"
        iconSize={responsiveHeight(15)}
        tintColor={colors.appTextColor4}
        textStyle={[
          appStyles.textRegular,
          appStyles.textGray,
          appStyles.textCenter,
        ]}
        titleStyle={[
          appStyles.textMedium,
          appStyles.fontBold,
          appStyles.textGray,
          appStyles.textCenter,
        ]}
        textContainerStyle={[appStyles.alignItemsCenter]}
        {...props}
      />
    </Wrapper>
  );
};

export const SuccessPopup = ({...PopupPrimaryProps}) => {
  return (
    <Modals.PopupPrimary
      // visible={isFoodLoggedPopupVisible}
      // toggle={toggleFoodLoggedPopup}
      // title={'Food Logged'}
      // buttonText1={'Add More'}
      // buttonText2={'Done'}
      // onPressButton1={() => {
      //     toggleFoodLoggedPopup()
      // }}
      // onPressButton2={() => {
      //     toggleFoodLoggedPopup()
      //     goBack()
      // }}
      titleStyle={[appStyles.h6, appStyles.textPrimaryColor]}
      icon={<Icons.Svg svg={appSvgs.arrow_left} size={responsiveWidth(25)} />}
      // topMargin={responsiveHeight(55)}
      {...PopupPrimaryProps}
    />
  );
};
export const RowButton = ({
  text1,
  text2,
  onPress2,
  buttonStyle1,
  buttonStyle2,
  onPress1,
  textStyle1,
  textStyle2,
  buttonColorPrimary,
}) => {
  return (
    <Wrapper flexDirectionRow alignItemsCenter>
      <Buttons.Colored
        onPress={onPress1}
        textStyle={[{color: colors.appTextColor3}, textStyle1]}
        buttonStyle={[styles.RowButton, buttonStyle1]}
        buttonColor={colors.secondary}
        text={text1}
      />
      <Spacer isSmall horizontal />
      <Buttons.Colored
        onPress={onPress2}
        buttonColor={buttonColorPrimary ? colors.primary : colors.appTextColor3}
        textStyle={textStyle2}
        buttonStyle={[styles.RowButton, buttonStyle2]}
        text={text2}
      />
    </Wrapper>
  );
};

export const CustomInput = ({
  secureTextEntry,
  titleStyle,
  onPressIconRight,
  iconNameRight,
  iconTypeRight,
  onPress,
  placeholderTextColor,
  inputStyle,
  placeholder,
  title,
  props,
  value,
  onChangeText,
  left,
  containerStyle,
}) => {
  return (
    <TextInputs.Colored
      secureTextEntry={secureTextEntry}
      onPress={onPress}
      iconColorRight={colors.appTextColor3}
      iconNameRight={iconNameRight}
      iconTypeRight={iconTypeRight}
      onPressIconRight={onPressIconRight}
      iconStyleLeft={{color: colors.appTextColor3}}
      iconNameLeft={left && 'magnify'}
      iconTypeLeft={'material-community'}
      value={value}
      onChangeText={onChangeText}
      titleStyle={[
        {
          fontSize: fontSizes.regular,
          opacity: 0.75,
          color: colors.appTextColor3,
          fontFamily: appFonts.appTextBold,
        },
        titleStyle,
      ]}
      inputContainerStyle={{
        borderRadius: 16,
        borderWidth: 1,
        borderColor: colors.grayLight,
        backgroundColor: colors.appTextColor6,
      }}
      // inputStyle={[
      //   {
      //     paddingBottom: responsiveHeight(1),
      //     fontSize: responsiveFontSize(16),
      //   },
      //   inputStyle,
      // ]}
      placeholderTextColor={
        placeholderTextColor ? placeholderTextColor : colors.grayLight
      }
      title={title}
      placeholder={placeholder ? placeholder : 'Type here...'}
      {...props}
    />
  );
};
export const RowInputs = ({
  placeholderTextColor,
  placeholder2TextColor,
  title1,
  titleStyle1,
  titleStyle2,
  title2,
  placeholder1,
  placeholder2,
  flex,
  iconColorLeft,
  iconTypeLeft,
  iconNameLeft,
  iconSizeLeft,
  item_value,
  price_value,
  // onChangePriceText,
  // onChangeItemText,
  keyboardType1,
  keyboardType2,
  onPressIconRightFirst,
  iconNameRightFirst,
  iconTypeRightFirst,
  iconContainerStyleRight,
}) => {
  return (
    <Wrapper flexDirectionRow alignItemsCenter marginHorizontalBase>
      <Wrapper flex={1}>
        <TextInputs.Colored
          titleStyle={[
            {
              fontSize: fontSizes.regular,
              opacity: 0.75,
              color: colors.appTextColor3,
              fontFamily: appFonts.appTextBold,
            },
            titleStyle1,
          ]}
          containerStyle={[{width: '100%', marginHorizontal: 0}]}
          inputContainerStyle={{
            borderRadius: 16,
            borderWidth: 1,
            borderColor: colors.grayLight,
            backgroundColor: colors.appTextColor6,
          }}
          iconColorRight={colors.appTextColor3}
          iconNameRight={iconNameRightFirst}
          iconTypeRight={iconTypeRightFirst}
          onPressIconRight={onPressIconRightFirst}
          iconContainerStyleRight={iconContainerStyleRight}
          //  iconStyleRight:
          // inputStyle={{
          //   paddingBottom: responsiveHeight(1),
          //   fontSize: responsiveFontSize(16),
          // }}
          keyboardType={keyboardType1}
          title={title1}
          placeholder={placeholder1 ? placeholder1 : 'Type here...'}
          placeholderTextColor={placeholderTextColor}
          value={item_value}
          // onChangeText={value => onChangeItemText(id, value)}
        />
      </Wrapper>
      <Wrapper flex={0.1} />
      <Wrapper flex={flex ? flex : 1}>
        <TextInputs.Colored
          titleStyle={[
            {
              fontSize: fontSizes.regular,
              opacity: 0.75,
              color: colors.appTextColor3,
              fontFamily: appFonts.appTextBold,
            },
            titleStyle2,
          ]}
          containerStyle={[{width: '100%', marginHorizontal: 0}]}
          inputContainerStyle={{
            borderRadius: 16,
            borderWidth: 1,
            borderColor: colors.grayLight,
            backgroundColor: colors.appTextColor6,
          }}
          // inputStyle={{
          //   paddingBottom: responsiveHeight(1),
          //   fontSize: responsiveFontSize(16),
          // }}
          title={title2}
          placeholder={placeholder2 ? placeholder2 : 'Type here...'}
          iconColorLeft={iconColorLeft}
          iconTypeLeft={iconTypeLeft}
          iconNameLeft={iconNameLeft}
          iconSizeLeft={iconSizeLeft}
          placeholderTextColor={placeholder2TextColor}
          value={price_value}
          // onChangeText={value => onChangePriceText(id, value)}
          keyboardType={keyboardType2}
        />
      </Wrapper>
    </Wrapper>
  );
};
export const CustomBorderedWrapper = ({
  text,
  iconNameLeft,
  iconTypeLeft,
  iconSizeLeft,
  tintColorLeft,
  iconStyleLeft,
  iconName,
  iconType,
  iconSize,
  tintColor,
  iconStyle,
  textStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Wrapper
        isBorderedWrapper
        flexDirectionRow
        alignItemsCenter
        justifyContentSpaceBetween
        style={{borderRadius: 24}}>
        <Wrapper flexDirectionRow alignItemsCenter flex={6.2}>
          <Icon
            name={iconNameLeft ? iconNameLeft : 'bell'}
            type={iconTypeLeft ? iconTypeLeft : 'material-community'}
            size={iconSizeLeft ? iconSizeLeft : sizes.icons.medium}
            color={tintColorLeft ? tintColorLeft : colors.appTextColor3}
            iconStyle={[iconStyleLeft]}
          />
          <Wrapper style={{marginLeft: responsiveWidth(2.5)}}>
            <Text style={[textStyle]} isMediumFont isMedium>
              {text}
            </Text>
          </Wrapper>
        </Wrapper>
        <Wrapper flex={0.8}>
          <Icon
            name={iconName ? iconName : 'keyboard-arrow-right'}
            type={iconType ? iconType : 'material'}
            size={iconSize ? iconSize : sizes.icons.medium}
            color={tintColor ? tintColor : colors.appTextColor3}
            iconStyle={[iconStyle]}
          />
        </Wrapper>
      </Wrapper>
    </TouchableOpacity>
  );
};
export const BottomModal = ({
  button2Style,
  button1Style,
  children,
  buttonText2,
  buttonsDirection,
  onPressButton2,
  buttonText1,
  onPressButton1,
  visible,
  toggle,
  IconFontSize,
  SvgIcon,
  heading,
  para,
  paraContainerStyle,
}) => {
  return (
    <Modals.PopupPrimary
      buttonsDirection={buttonsDirection}
      button1Style={[button1Style]}
      button2Style={[button2Style]}
      //  buttonText1Style={{fontFamily: appFonts.appTextMedium}}
      //   buttonText2Style={{
      //     fontFamily: appFonts.appTextMedium,
      //   }}
      buttonText2={buttonText2}
      buttonText1={buttonText1}
      onPressButton1={onPressButton1}
      onPressButton2={onPressButton2}
      mainContainerStyle={{borderTopRightRadius: 48, borderTopLeftRadius: 48}}
      visible={visible}
      toggle={toggle}>
      <Wrapper>
        {/* <Spacer isBasic /> */}
        {heading && (
          <Text alignTextCenter isMediumTitle>
            {heading}
          </Text>
        )}
        {SvgIcon ? (
          <Wrapper marginVerticalMedium alignItemsCenter>
            <Icons.Svg
              svg={SvgIcon}
              size={IconFontSize ? IconFontSize : responsiveFontSize(120)}
            />
          </Wrapper>
        ) : null}
        {para && (
          <Wrapper style={[paraContainerStyle]}>
            <Text alignTextCenter isRegularFont isMedium>
              {para}
            </Text>
          </Wrapper>
        )}
        {children}
      </Wrapper>
    </Modals.PopupPrimary>
  );
};
export const CheckInSchedule = ({
  onPressEdit,
  heading,
  para,
  time,
  duration,
}) => {
  return (
    <Wrapper
      marginHorizontalBase
      paddingVerticalBase
      paddingHorizontalBase
      style={{
        backgroundColor: colors.secondary,
        borderRadius: sizes.cardRadius,
        borderWidth: 0.5,
        borderColor: colors.grayLight,
        marginBottom: responsiveHeight(2),
      }}>
      <Wrapper flexDirectionRow alignItemsCenter justifyContentSpaceBetween>
        <Wrapper flexDirectionRow alignItemsCenter>
          <Icon
            size={sizes.icons.medium}
            name={'clock-outline'}
            color={colors.appTextColor3}
            type="material-community"
          />
          <Spacer horizontal isSmall />
          <Text
            isMediumFont
            isMedium
            style={[
              {
                color: colors.primary,
              },
            ]}>
            {time}
          </Text>
          <Spacer horizontal isSmall />
          <Text
            isMediumFont
            isRegular
            style={[
              {
                color: colors.darkRed,
              },
            ]}>
            ({duration})
          </Text>
        </Wrapper>
        <TouchableOpacity onPress={onPressEdit}>
          <Icon
            size={sizes.icons.medium}
            name={'pencil'}
            color={colors.appTextColor3}
            type="material-community"
          />
        </TouchableOpacity>
      </Wrapper>

      <Wrapper marginVerticalSmall>
        <Text isTinyTitle>{heading}</Text>
      </Wrapper>

      <Wrapper>
        <Text isSmall>{para}</Text>
      </Wrapper>
    </Wrapper>
  );
};
export const BorderedWrapperWithUserDetails = ({Image, name, id, email}) => {
  return (
    <Wrapper
      isBorderedWrapper
      style={[
        {
          borderWidth: 0.5,
        },
      ]}
      paddingVerticalSmall
      flexDirectionRow
      alignItemsCenter>
      <Wrapper
        style={{
          borderWidth: 1.5,
          borderColor: colors.grayLight,
          borderRadius: 100,
        }}>
        <Images.Round
          size={responsiveFontSize(50)}
          source={{uri: Image ? Image : appImages.user5}}
        />
      </Wrapper>
      <Spacer horizontal isBasic />
      <Wrapper>
        <Text isMediumFont isMedium>
          {name}
        </Text>
        <Spacer height={responsiveHeight(0.17)} />
        <Text style={{opacity: 0.75}} isSmall>
          {id}
        </Text>
        <Spacer height={responsiveHeight(0.17)} />

        <Text style={{opacity: 0.75}} isSmall>
          {email}
        </Text>
      </Wrapper>
    </Wrapper>
  );
};
export const ArrowRightButton = ({
  Image,
  text,
  para,
  iconName,
  iconType,
  iconSize,
  tintColor,
  iconStyle,
  textStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Wrapper
        style={{borderWidth: 0, height: sizes.buttonHeight}}
        isBorderedWrapper
        backgroundColor={colors.secondary}
        flexDirectionRow
        alignItemsCenter
        justifyContentSpaceBetween>
        <Wrapper flexDirectionRow alignItemsCenter>
          {iconName && (
            <Icon
              name={iconName}
              type={iconType ? iconType : 'material-community'}
              size={iconSize ? iconSize : sizes.icons.medium}
              color={tintColor ? tintColor : colors.appTextColor3}
              iconStyle={[iconStyle, {marginRight: responsiveWidth(3.5)}]}
            />
          )}

          <Text
            style={[
              textStyle,
              {color: tintColor ? tintColor : colors.appTextColor3},
            ]}
            isMedium
            isMediumFont>
            {text}
          </Text>
        </Wrapper>

        <Icon
          color={tintColor ? tintColor : colors.appTextColor3}
          // color={iconColor ? iconColor : colors.appBgColor1}
          type="material-community"
          name={'chevron-right'}
          size={sizes.icons.medium}
        />
      </Wrapper>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    bottom: 65,
    right: 0,
    zIndex: 999, // Ensure it's above other content
  },
  RowButton: {
    width: responsiveWidth(43),
    // borderColor: colors.transparent,
    marginHorizontal: 0,
  },
});
