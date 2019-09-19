import React, { Component } from 'react'
import {  View, AsyncStorage as storage, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native'
import { Button, Footer,FooterTab,Icon, Text, Container,Header,  Left, Body, Right, Title, Subtitle ,Content, List, ListItem,} from 'native-base';
import ButtonIcon from '../components/ButtonIcon';

const Ndass = ({title,subtitle}) => {
  return (
    <Header style={{backgroundColor:'white'}}>

      <Left style={{flex:1}}>
        <ButtonIcon iconName='arrow-back' color={{color:'#6d7fa3'}} fungsi={()=> alert('parameter')}/>
      </Left>

      <Body style={{flex:1}}>
        <Title style={{color:'black',justifyContent: 'center'}}>{title}</Title>
        <Subtitle style={{color:'#6d7fa3'}}> {subtitle}</Subtitle>
      </Body>

      <Right style={{flex:1}}>
        <ButtonIcon iconName='share' color={{color:'#6d7fa3'}} fungsi={()=> alert('share')}/>
      </Right>
      
    </Header>
  )
}

export default Ndass

