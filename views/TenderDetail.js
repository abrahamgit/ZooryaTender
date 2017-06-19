// ListRowExample.js

'use strict';

import React, {Component, PropTypes} from 'react';
import {View, ScrollView, Image, Text} from 'react-native';

import {NavigationPage, ListRow, Label} from 'teaset';

export default class TenderDetail extends NavigationPage {

  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'Details',
    showBackButton: true,
  };

  constructor(props) {
    super(props);
  }

  renderPage() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{height: 20}} />
        <ListRow title={<Label style={{fontSize: 18, color: '#31708f'}} text='Tender title' />} />
        <ListRow title='Posted on' detail={
          <View style={{backgroundColor: '#5bc0de', width: 60, height: 24, borderRadius: 4}} />
        } />
        <ListRow
          title='Posted on'
          detail='12/04/09'
          bottomSeparator='full'
          />
          <ListRow
          title='Bid Opening'
          detail='27/04/09'
          bottomSeparator='full'
          />

          <ListRow
          title='Company'
          detail='Company name'
          bottomSeparator='full'
          />

          <ListRow
          title='Catagory'
          detail='Catagory name'
          bottomSeparator='full'
          />

          <ListRow title='Detail Note' detail={
          'bla bla bla React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React. enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript'
        } titlePlace='top' />

        
      </ScrollView>
    );
  }

}
