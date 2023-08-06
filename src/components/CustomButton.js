import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Fonst} from '../utils/Constants';
import MyIcon from './MyIcon';

const CustomButton = ({onPress, title, butonIcon, iconColor, bgColor}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: bgColor}]}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      {butonIcon && <MyIcon name={butonIcon} color={iconColor} />}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'white',
    fontFamily: Fonst.bold,
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin:5,
    
  },
});
