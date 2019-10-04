import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import styles from './styles'

const { width: winWidth, height: winHeight } = Dimensions.get('window');
export default function ScanPreview () {
    return (
      <View style={{ height:winHeight*0.62 ,width:winWidth-50,top:50,left:25, position:"absolute", zIndex:2,justifyContent:"space-between"}}>
        <View style={{flexDirection:"row",justifyContent:"space-between", width: winWidth-50, }}>
          <Image style={[styles.scanPreviewImage]} source = {require('../image/trentrai.png')}/>
          <Image style={[styles.scanPreviewImage]} source = {require('../image/trenphai.png')}/>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between",width: winWidth-50}}>
          <Image style={[styles.scanPreviewImage]} source = {require('../image/duoitrai.png')}/>
          <Image style={[styles.scanPreviewImage]} source = {require('../image/duoiphai.png')}/>
        </View>
        
      </View>
    );
  
}
