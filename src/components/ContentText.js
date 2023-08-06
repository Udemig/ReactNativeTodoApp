import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Fonst } from '../utils/Constants'

const ContentText = ({content}) => {
  return (
    <View>
      <Text style={styles.text}>{content}</Text>
    </View>
  )
}

export default ContentText

const styles = StyleSheet.create({


text:{
    fontSize:20,
    color:'gray',
    fontFamily:Fonst.regular,
}

})