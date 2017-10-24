import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View
  } from 'react-native';
  import { DrawerNavigator } from 'react-navigation';
  import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
  
export default class Home extends Component {
    
    render() {
        return(
            <Container>
            <Header>
              <Left>
                <Button transparent>
                  <Icon name='menu' 
                  onPress={ () => this.props.navigation.navigate('DrawerToggle') }/>
                </Button>
              </Left>
              <Body>
                <Title>Header</Title>
              </Body>
              <Right>
              </Right>
            </Header>
          </Container>    
        );
    }
}