// Home.js

'use strict';

import React, {Component, PropTypes} from 'react';
import {View, ScrollView,Text} from 'react-native';
import {Theme, NavigationPage, NavigationBar, ListRow, Label, Input, Button} from 'teaset';
import TenderCatagories from './TenderCatagories';
import Register from './Register';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Home extends NavigationPage {

  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'Zoorya Tender',   
  };

  constructor(props){
      super(props);
      Object.assign(this.state,{
          email:'',
          password:'',
      })
  }

  renderPage() {
    return (
      <ScrollView style={{flex: 1}}>

        {/*<ListRow icon={require('../icons/home_active.png')} onPress={() => this.navigator.push({view: <DrawerExample />})}/>*/}

        <ListRow  detail={<Label style={{color: '#0aadff', fontSize: 108}} text='Zoorya'/>}/>
        <ListRow  detail={<Label style={{color: '#595959', fontSize: 25}} text='Tender'/>} />
        <ListRow  detail={<Input style={{width: 325 }} size='lg'  placeholder="Enter Your Email" value={this.state.email} onChangeText={text => this.setState({email: text})} />}/>
        <ListRow  detail={<Input style={{width: 325 }} size='lg' placeholder="Enter Your Password" value={this.state.password} onChangeText={text => this.setState({password: text})} secureTextEntry={true} />} bottomSeparator='full' />
        <ListRow  detail={<Button style={{width: 325 ,borderWidth:2}} title='Login' onPress={() => this.navigator.push({view: <TenderCatagories />})} />} />

        
        <ListRow  detail={<Label style={{color: '#0aadff', fontSize: 15, display:'flex', justifyContent:'center'}} text='Donot have an account' onPress={() => this.navigator.push({view: <Register/>})}/>} />
        <View style={{height: 20}} />   
        <ListRow  detail={<Icon.Button name="facebook" backgroundColor="#3b5998" style={{flex:1, width: 325,justifyContent:'center'}}> 
        <Text style={{fontFamily: 'Arial', fontSize: 15 , color:'#ffffff',textAlign:'center',}}>Login with Facebook</Text>
        </Icon.Button>} />
         <ListRow  detail={<Icon.Button name="google" backgroundColor="#ff5050" style={{flex:1, width: 325,justifyContent:'center'}}> 
        <Text style={{fontFamily: 'Arial', fontSize: 15 , color:'#ffffff',textAlign:'center',}}>Login with Google</Text>
        </Icon.Button>} />
    
      </ScrollView>
    );
  }

}
