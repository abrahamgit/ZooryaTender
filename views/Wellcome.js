'use strict';

import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Image, ScrollView, Switch} from 'react-native';

import {Theme, NavigationPage, ListRow, SegmentedView, Label, PullPicker} from 'teaset';

export default class SegmentedViewExample extends NavigationPage {

  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'SegmentedView',
    showBackButton: true,
  };

  constructor(props) {
    super(props);
    this.items = ['projector', 'carousel'];
    Object.assign(this.state, {
      type: 'projector',
      custom: true,
      activeIndex: 0,
    });
  }

  selectType() {
    PullPicker.show(
      'Type',
      this.items,
      this.items.indexOf(this.state.type),
      (item, index) => this.setState({type: item})
    );
  }

  renderTitle(index) {
    let titles = ['One', 'Two', 'Three'];
    let {custom, activeIndex} = this.state;
    if (!custom) return titles[index];

    let icons = [
      require('../icons/home.png'),
      require('../icons/store.png'),
      require('../icons/me.png'),
    ];
    let activeIcons = [
      require('../icons/home_active.png'),
      require('../icons/store_active.png'),
      require('../icons/me_active.png'),
    ];
    let isActive = index == activeIndex;
    let tintColor = isActive ? Theme.primaryColor : '#989898';

    return (
      <View style={{alignItems: 'center'}}>
        <Image
          style={{width: 20, height: 20, tintColor}}
          source={isActive ? activeIcons[index] : icons[index]}
          />
        <Label style={{color: tintColor, paddingTop: 4}} text={titles[index]} />
      </View>
    );
  }

  renderPage() {
    let {custom} = this.state;
    return (
      <View style={{flex: 1}}>
        <SegmentedView
          style={{flex: 1}}
          type={this.state.type}
          indicatorLineColor={custom ? '#5cb85c' : undefined}
          indicatorLineWidth={custom ? 1 : undefined}
          indicatorPositionPadding={custom ? 3 : undefined}
          onChange={index => this.setState({activeIndex: index})}
        >
          <SegmentedView.Sheet title={this.renderTitle(0)}>
            <View style={{flex: 1 }}>
                    <ScrollView style={{flex: 1}}>
        <View style={{height: 20}} />
        <ListRow title='Title' detail='Detail' topSeparator='full' />
        <ListRow title={<Label style={{fontSize: 18, color: '#31708f'}} text='Custom title' />} />
        <ListRow title='Custom detail' detail={
          <View style={{backgroundColor: '#5bc0de', width: 60, height: 24, borderRadius: 4}} />
        } />
        <ListRow title='Long detail' detail={
          'React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React.'
        } />
        <ListRow title='Title place top' detail={
          'React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React.'
        } titlePlace='top' />
        <ListRow title='Icon' icon={require('../icons/config.png')} />
        <ListRow title='Accessory indicator' accessory='indicator' />
        <ListRow title='Custom accessory' accessory={<Image source={require('../icons/location.png')} />} />
        <ListRow title='Press able' onPress={() => alert('Press!')} />
        <ListRow
          title='Swipe able'
          detail='Swipe to show action buttons'
          swipeActions={[
            <ListRow.SwipeActionButton title='Cancel' />,
            <ListRow.SwipeActionButton title='Remove' type='danger' onPress={() => alert('Remove')}/>,          
          ]}
          bottomSeparator='full'
          />
      </ScrollView>
            </View>
          </SegmentedView.Sheet>
          <SegmentedView.Sheet title={this.renderTitle(1)}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Label type='detail' size='xl' text='Segment two' />
            </View>
          </SegmentedView.Sheet>
          <SegmentedView.Sheet title={this.renderTitle(2)}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Label type='detail' size='xl' text='Segment three' />
            </View>
          </SegmentedView.Sheet>
        </SegmentedView>
        
        
        
      </View>
    );
  }

}
