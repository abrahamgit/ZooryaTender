/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {TeaNavigator} from 'teaset';
import TeasetExampleHome from './views/Home';

export default class ZooryaTender extends Component {
  render() {
    return <TeaNavigator rootView={<TeasetExampleHome />} />;
  }
}


AppRegistry.registerComponent('ZooryaTender', () => ZooryaTender);
