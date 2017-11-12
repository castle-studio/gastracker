import React, { Component } from 'react';
import * as strings from '../Data/Strings';
import PriceConsultor from '../Data/Services/PriceConsultor'
import {
  Platform,
  StyleSheet,
  View,
  Image,
  Dimensions
} from 'react-native';

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import fontelloConfig from '../resources/fonts/selection.json';
import { DrawerNavigator } from 'react-navigation';
import { Container, Col, Row, Header, Left, Icon, Body, Right, Fab, Button, Title, Text, Content, Card, CardItem, Thumbnail } from 'native-base';
const { height, width } = Dimensions.get('window');
const Icn = createIconSetFromIcoMoon(fontelloConfig);

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Col style={styles.upperView}>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('DrawerToggle')}
            >
              <Icon
                name='menu'
                style={{ color: 'white', marginTop: 50 }}
              />
            </Button>
          <Row style={{ justifyContent: 'center' }}>
            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <Text style={{ color: 'lightgreen', fontWeight:'bold', fontSize: 40 }}>27 MPG</Text>
            </View>
          </Row>
          <Fab
            containerStyle={{ bottom: -30 }}
            onPress={() => PriceConsultor.fetchPrices()}
            style={styles.fab}
          >
            <Icn name='filler' />
          </Fab>
        </Col>
        <Content>
          
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
  upperView: {
    height: height / 2,
    backgroundColor: '#2BA1E5',
    shadowColor: '#000000',

    shadowOpacity: 1.4
  },
  shadow: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    height: 1,
    shadowColor: '#000000',

    shadowOpacity: 1.4
  },
  header: {
    backgroundColor: '#2BA1E5'
  },
  fab: {
    backgroundColor: '#fbb040ff'
  }
});
