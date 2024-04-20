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
export default function Index() {
  const {accepted, setAccepted} = useHooks();
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
          <Spacer isTiny />

          <Spacer isMedium />
          <RowInputs title1={'First Name'} title2={'Last Name'} />
          <Spacer isBasic />

          <CustomInput
            iconTypeRight={'material-community'}
            iconNameRight={'calendar-blank'}
            title={'Date of birth'}
            placeholder={'Select--'}
          />
          <Spacer isBasic />

          <CustomInput
            title={'Email Address'}
            placeholder={'example@email.coms'}
          />
          <Spacer isBasic />
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
