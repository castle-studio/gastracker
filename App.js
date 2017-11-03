import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
import { Button, Root } from 'native-base';
import Sidebar from './views/Sidebar';
import Home from './views/Home';
import Stations from './views/Stations';
import Statistics from './views/Statistics';
import Settings from './views/Settings';
import Map from './views/Tools/Map'

import { DrawerNavigator } from 'react-navigation';

const CustomDrawerContentComponent = (props) => (
  <View style={styles.container}>
    <Sidebar {...props} />
  </View>
);

const Drawer = DrawerNavigator(
    {
      Home: { screen: Home },
      Statistics: { screen: Statistics },
      Stations: { screen: Stations },
      Settings: { screen: Settings },
      Map: { screen: Map },
    },
    {
      initialRouteName: "Map",
      contentOptions: {
        activeTintColor: "#e91e63"
      },
      contentComponent: CustomDrawerContentComponent 
        });

export default () => 
    <Root>
      <Drawer/>
    </Root>

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
