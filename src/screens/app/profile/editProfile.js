import React, {useState} from 'react';
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
  Images,
} from '../../../components';
import {
  responsiveFontSize,
  colors,
  responsiveWidth,
  appFonts,
  routes,
} from '../../../services';
import {useHooks} from './hooks';
import {navigate} from '../../../navigation/rootNavigation';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import {Icon} from '@rneui/base';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
export default function Index() {
  const {accepted, setAccepted} = useHooks();
  const [imageUri, setImageUri] = useState(null);
  const pickImage = async () => {
    try {
      let options = {
        mediaType: 'photo',
        presentationStyle: 'fullScreen',
      };

      const result = await launchImageLibrary(options);
      if (!result.didCancel) {
        //  console.log('Image URI: ', result.assets);
        // Handle the selected image URI here
        setImageUri(result.assets[0]);
      }
    } catch (error) {
      console.error('ImagePicker error: ', error);
    }
  };
  const dashPattern = [7, 2];
  return (
    <Wrapper isMain style={[{}]}>
      <ScrollViews.KeyboardAvoiding>
        <Headers.Primary
          darkBar
          invertColors
          title={'Edit Profile'}
          showBackArrow
          borderBottomWidth
        />
        <Wrapper>
          <Spacer isBasic />
          {/* Upload Image */}
          <TouchableOpacity onPress={pickImage} style={styles.container}>
            <Svg height="170" width="170" viewBox="0 0 100 100">
              <Circle
                cx="50"
                cy="50"
                r="45"
                stroke="black"
                strokeWidth=".5"
                fill="none"
                strokeDasharray={dashPattern.join()}
              />
            </Svg>
            <Wrapper style={styles.imageView}>
              {imageUri && (
                <Wrapper
                  style={{
                    flex: 1, // Or specific dimensions
                    borderRadius: 100, // Adjust as needed
                    overflow: 'hidden',
                  }}>
                  <Wrapper
                    isImageBackground
                    source={imageUri}
                    style={{
                      width: 155,
                      height: 155,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <RenderIconAndText imageUri />
                  </Wrapper>
                </Wrapper>
              )}
              {!imageUri && <RenderIconAndText />}
            </Wrapper>
          </TouchableOpacity>

          <Spacer isMedium />
          <RowInputs title1={'First Name'} title2={'Last Name'} />
          <Spacer isTiny />

          <CustomInput
            iconTypeRight={'material-community'}
            iconNameRight={'calendar-blank'}
            title={'Date of birth'}
            placeholder={'Select--'}
          />
          <Spacer isTiny />

          <CustomInput
            title={'Email Address'}
            placeholder={'example@email.coms'}
          />
          <Spacer isTiny />
          <RowInputs
            placeholder2={'--- --- -----'}
            placeholder1={'+92 (PK)'}
            iconNameRightFirst={'keyboard-arrow-down'}
            iconTypeRightFirst={'material'}
            iconContainerStyleRight={{marginRight: responsiveWidth(2)}}
            flex={1.4}
            title1={'Phone Number'}
            title2={' '}
          />

          <Spacer isMedium />
          <Lines.Horizontal style={{alignSelf: 'center'}} width={'88%'} />
          <Spacer isMedium />

          <Wrapper alignItemsCenter>
            <RowButton
              // onPress2={HandleUnlinkContactModal}
              // onPress1={HandleUnlinkContactModal}
              text1={'Cancel'}
              text2={'Update'}
              buttonStyle2={{backgroundColor: colors.primary}}
            />
          </Wrapper>
          <Spacer isMedium />

          <Spacer isBasic />
        </Wrapper>
      </ScrollViews.KeyboardAvoiding>
    </Wrapper>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    position: 'absolute', // Position text over the circle
  },
});

const RenderIconAndText = ({imageUri}) => {
  return (
    <>
      <Icon
        type="feather"
        name={imageUri ? 'camera' : 'upload'}
        color={imageUri ? colors.appTextColor6 : colors.appTextColor3}
      />
      <Spacer isTiny />
      <Text
        style={{
          color: imageUri ? colors.appTextColor6 : colors.appTextColor3,
        }}
        isRegular>
        {imageUri ? 'Change Image' : 'Upload Image'}
      </Text>
    </>
  );
};
