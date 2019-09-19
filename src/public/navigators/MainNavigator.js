import React from 'react';
import { createAppContainer,createStackNavigator,createSwitchNavigator ,createDrawerNavigator} from 'react-navigation';
import Home from '../../screens/Home'
import DetailHarga from '../../screens/DetailHarga'
import Sider from '../../screens/Drawer'


const AppNavigator = createStackNavigator(
  { 
    Home: {
      screen: Home,
      navigationOptions: { header: null }
    },
    DetailHarga: {
      screen: DetailHarga,
      navigationOptions: { header: null }
    }, 
    Sider: {
      screen: Sider,
      navigationOptions: { header: null }
    },
    
  }
)
const drawer = createDrawerNavigator (
  {AppNavigator},{contentComponent:Sider}

)

export default createAppContainer( createSwitchNavigator( { drawer} ) )

