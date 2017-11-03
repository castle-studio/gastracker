import React, { Component } from 'react';
import * as strings from '../Data/Strings'
import {
  Platform,
  StyleSheet,
  View,
  Image
} from 'react-native';

import Map from './Tools/Map'
import { DrawerNavigator } from 'react-navigation';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, Content, Card, CardItem, Thumbnail } from 'native-base';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu'
                onPress={() => this.props.navigation.navigate('DrawerToggle')} />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <Content>
          <View style={{ height: 500 }}>
          <Map />

            <CardItem cardBody>

            </CardItem>
            <CardItem style={ styles.CardItem}>
              <Left>
                <Button transparent>
                  <Icon active name="add" />
                  <Text>{strings.add} </Text>
                </Button>
              </Left>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </View>


        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  CardItem: {
    paddingLeft: 20,
    paddingRight: 20
  },
});
