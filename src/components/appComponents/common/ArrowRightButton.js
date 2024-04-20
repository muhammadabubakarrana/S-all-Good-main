import React from 'react';
import Wrapper from '../../wrapper';
import Text from '../../text';
import {colors, sizes, responsiveFontSize} from '../../../services';
import {TouchableOpacity} from 'react-native';
import Spacer from '../../spacer';
import {Icon} from '@rneui/base';

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
    <TouchableOpacity>
      <Wrapper
        style={{borderWidth: 0, height: sizes.buttonHeight}}
        isBorderedWrapper
        backgroundColor={colors.secondary}
        flexDirectionRow
        alignItemsCenter
        justifyContentSpaceBetween>
        <Wrapper flexDirectionRow alignItemsCenter>
          {iconName &&
            ((
              <Icon
                name={iconName ? iconName : 'bell'}
                type={iconType ? iconType : 'material-community'}
                size={iconSize ? iconSize : sizes.icons.medium}
                color={tintColor ? tintColor : colors.appTextColor3}
                iconStyle={[iconStyle]}
              />
            ),
            (<Spacer horizontal isSmall />))}
          <Text isMedium isMediumFont>
            {text}
          </Text>
        </Wrapper>

        <Icon
          color={colors.appTextColor3}
          // color={iconColor ? iconColor : colors.appBgColor1}
          type="material-community"
          name={'chevron-right'}
          size={responsiveFontSize(28)}
        />
      </Wrapper>
    </TouchableOpacity>
  );
};
