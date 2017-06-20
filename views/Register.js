// Home.js

'use strict';

import React, {Component, PropTypes} from 'react';
import {View, ScrollView , Text} from 'react-native';
import {Theme, NavigationPage, NavigationBar, ListRow, Label, Input, Button} from 'teaset';
import Home from './Home';

export default class Register extends NavigationPage {

  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'Zoorya Tender',
  };

  constructor(props){
      super(props);
      Object.assign(this.state,{
          email:'Email address',
          password:'Password',
      })
  }

  renderPage() {
    return (
      <ScrollView style={{flex: 1}}>

        <ListRow  detail={<Text style={{color: '#0aadff', fontSize: 50,alignContent:'center'}}>Zoorya</Text>} topSeparator='full' bottomSeparator='full' />
        <ListRow  detail={<Label style={{color: '#8a6d3b', fontSize: 20,justifyContent:'center'}} text='Tender' />} topSeparator='full' bottomSeparator='full' />
     
        <View style={{height: 20}} />

         <ListRow  detail={<Input style={{width: 325 }} size='lg' placeholder="Enter Your Full Name"  value={this.state.fullname} onChangeText={text => this.setState({fullname: text})} />} bottomSeparator='full' />
        <ListRow  detail={<Input style={{width: 325}} size='lg'  placeholder="Enter Your Email" value={this.state.Email} onChangeText={text => this.setState({email: text})} />} bottomSeparator='full' />
        <View style={{height: 20}} />
        <ListRow  detail={<Input style={{width: 325 }} size='lg'  placeholder="Enter Password" value={this.state.Password} onChangeText={text => this.setState({password: text})}  secureTextEntry={true}/>} bottomSeparator='full' />
        <ListRow  detail={<Input style={{width: 325 }} size='lg'  placeholder="ReEnter Your Password" value={this.state.reenterpassword} onChangeText={text => this.setState({reenterpassword: text})} secureTextEntry={true}/>} bottomSeparator='full' />
        <ListRow  detail={<Button style={{width: 325, borderWidth:2}} title='Sign-Up' onPress={() => this.navigator.push({view: <Home />})} />} />
         <View style={{height: 20}} /> 
         
      </ScrollView>
    );
  }

}
