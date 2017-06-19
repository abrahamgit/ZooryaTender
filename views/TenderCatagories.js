'use strict';

import React, {Component, PropTypes} from 'react';
import {View, ScrollView, Image} from 'react-native';

import {NavigationPage, ListRow, Checkbox, Label, Button} from 'teaset';
import Wellcome from './Wellcome';
export default class TenderCatagories extends NavigationPage {

  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'Tenders Catagories',
    showBackButton: true,
  };

  constructor(props) {
    super(props);
    Object.assign(this.state, {
      checkedSM: false,
      checkedMD: false,
      checkedLG: false,
      checkedLG2: false,
      checkedLG3: true,
      checkedLG4: false,
    });
  }

  renderPage() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{height: 20}} />
       
     
        <ListRow title='Catagorie title' detail={
          <Checkbox
            title=''
            size='lg'
            checked={this.state.checkedSM}
            onChange={value => this.setState({checkedSM: value})}
            />
        } bottomSeparator='full' />

         <ListRow title='Catagorie title' detail={
          <Checkbox
            title=''
            size='lg'
            checked={this.state.checkedMD}
            onChange={value => this.setState({checkedMD: value})}
            />
        } bottomSeparator='full' />

         <ListRow title='Catagorie title' detail={
          <Checkbox
            title=''
            size='lg'
            checked={this.state.checkedLG}
            onChange={value => this.setState({checkedLG: value})}
            />
        } bottomSeparator='full' />

          <ListRow title='Catagorie title' detail={
          <Checkbox
            title=''
            size='lg'
            checked={this.state.checkedLG2}
            onChange={value => this.setState({checkedLG2: value})}
            />
        } bottomSeparator='full' />

          <ListRow title='Catagorie title' detail={
          <Checkbox
            title=''
            size='lg'
            checked={this.state.checkedLG3}
            onChange={value => this.setState({checkedLG3: value})}
            />
        } bottomSeparator='full' />

          <ListRow title='Catagorie title' detail={
          <Checkbox
            title=''
            size='lg'
            checked={this.state.checkedLG4}
            onChange={value => this.setState({checkedLG4: value})}
            />
        } bottomSeparator='full' />









        <View style={{height: 20}} />
        <ListRow title='Empty title' detail={
          <Checkbox
            checked={this.state.checkedEmpty}
            onChange={value => this.setState({checkedEmpty: value})}
            />
        } topSeparator='full' />
        <ListRow title='Disabled' detail={
          <Checkbox
            title='Checkbox'
            disabled={true}
            checked={this.state.checkedDisable}
            onChange={value => this.setState({checkedDisable: value})}
            />
        } bottomSeparator='full' />
        <View style={{height: 20}} />
        <ListRow title='Custom' detail={
          <Checkbox
            title='Custom'
            titleStyle={{color: '#8a6d3b', paddingLeft: 4}}
            checkedIcon={<Image style={{width: 15, height: 15, tintColor: '#8a6d3b'}} source={require('../icons/checkbox_checked.png')} />}
            uncheckedIcon={<Image style={{width: 15, height: 15, tintColor: '#8a6d3b'}} source={require('../icons/checkbox_unchecked.png')} />}
            checked={this.state.checkedCustom}
            onChange={value => this.setState({checkedCustom: value})}
            />
        } topSeparator='full' bottomSeparator='full' />

        <ListRow detail={<Button style={{width: 330}} title='Get Started' type='primary' onPress={() => this.navigator.push({view: <Wellcome />})} />} />



      </ScrollView>
    );
  }

}
