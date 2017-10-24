/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
import { Button, Root } from 'native-base';
import Sidebar from './views/Sidebar';
import Home from './views/Home';

import { DrawerNavigator } from 'react-navigation';

const CustomDrawerContentComponent = (props) => (
  <View style={styles.container}>
    <Sidebar {...props} />
  </View>
);

const Drawer = DrawerNavigator(
    {
      Home: { screen: Home },
      SideBar: { screen: Sidebar },
    },
    {
      initialRouteName: "Home",
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
