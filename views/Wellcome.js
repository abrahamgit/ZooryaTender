'use strict';

import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Image, ScrollView, Dimensions ,Switch} from 'react-native';

import {Theme,Carousel, NavigationPage, ListRow, SegmentedView, Label, PullPicker} from 'teaset';
import TenderDetail from './TenderDetail';
export default class SegmentedViewExample extends NavigationPage {

  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'Tenders',
    showBackButton: true,
  };

  constructor(props) {
    super(props);
    this.items = ['projector', 'carousel'];
    Object.assign(this.state, {
      type: 'projector',
      custom: true,
      activeIndex: 0,
      width: Dimensions.get('window').width,
      control: 'none',
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
    let titles = ['Home', 'Tenders', 'Following'];
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

  //for the carousel

selectControl() {
    PullPicker.show(
      'Control',
      this.items,
      this.items.indexOf(this.state.control),
      (item, index) => this.setState({control: item})
    );
  }

  renderControl() {
    let {control} = this.state;
    if (control === 'default') {
      return <Carousel.Control />;
    } else if (control === 'custom') {
      return (
        <Carousel.Control
          style={{alignItems: 'flex-end'}}
          dot={<Text style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: '#5bc0de', padding: 4}}>□</Text>}
          activeDot={<Text style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: '#5bc0de', padding: 4}}>■</Text>}
          />
      );
    }
  }



  renderPage() {
    let {width} = this.state;
    let {custom} = this.state;
    return (

      // The first segmentedView

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
           

              <ScrollView style={{flex: 1}}>
        <Carousel
          style={{height: 150}}
          control={this.renderControl()}
          onLayout={e => this.setState({width: e.nativeEvent.layout.width})}
        >
          <Image style={{width, height: 150}} resizeMode='cover' source={require('../images/teaset1.jpg')} />
          <Image style={{width, height: 150}} resizeMode='cover' source={require('../images/teaset2.jpg')} />
          <Image style={{width, height: 150}} resizeMode='cover' source={require('../images/teaset3.jpg')} />
        </Carousel>
        
        
        <ListRow
          onPress={() => alert('Press!')}
          title='Swipe able'
          detail={
          'React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React.'
        } titlePlace='top'
          swipeActions={[
            <ListRow.SwipeActionButton title='Follow' style={{backgroundColor: '#ffd700'}} />,
            <ListRow.SwipeActionButton title='Alert' style={{backgroundColor: '#ef3340'}}/>,
            <ListRow.SwipeActionButton title='Share' style={{backgroundColor: '#0085ca'}} onPress={() => alert('Remove')}/>,            
          ]}
          bottomSeparator='full'
          />

          <ListRow
          onPress={() => alert('Press!')}
          title='Swipe able'
          detail={
          'React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React.'
        } titlePlace='top'
          swipeActions={[
           <ListRow.SwipeActionButton title='Follow' style={{backgroundColor: '#ffd700'}} />,
            <ListRow.SwipeActionButton title='Alert' style={{backgroundColor: '#ef3340'}}/>,
            <ListRow.SwipeActionButton title='Share' style={{backgroundColor: '#0085ca'}} onPress={() => alert('Remove')}/>,       
          ]}
          bottomSeparator='full'
          />


          <ListRow
          onPress={() => alert('Press!')}
          title='Swipe able'
          detail={
          'React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React.'
        } titlePlace='top'
          swipeActions={[
            <ListRow.SwipeActionButton title='Follow' style={{backgroundColor: '#ffd700'}} />,
            <ListRow.SwipeActionButton title='Alert' style={{backgroundColor: '#ef3340'}}/>,
            <ListRow.SwipeActionButton title='Share' style={{backgroundColor: '#0085ca'}} onPress={() => alert('Remove')}/>,      
          ]}
          bottomSeparator='full'
          />


          <ListRow
          onPress={() => alert('Press!')}
          title='Swipe able'
          detail={
          'React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React.'
        } titlePlace='top'
          swipeActions={[
            <ListRow.SwipeActionButton title='Follow' style={{backgroundColor: '#ffd700'}} />,
            <ListRow.SwipeActionButton title='Alert' style={{backgroundColor: '#ef3340'}}/>,
            <ListRow.SwipeActionButton title='Share' style={{backgroundColor: '#0085ca'}} onPress={() => alert('Remove')}/>,         
          ]}
          bottomSeparator='full'
          />

      </ScrollView>
          </SegmentedView.Sheet>

          {/*The second segmentedView*/}
          <SegmentedView.Sheet title={this.renderTitle(1)}>
            <View style={{flex: 1 }}>
                    <ScrollView style={{flex: 1}}>
        <View style={{height: 20}} />
       
      
        <ListRow
          onPress={() => this.navigator.push({view: <TenderDetail />})}
          title='Swipe able'
          detail={
          'React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React.'
        } titlePlace='top'
          swipeActions={[
            <ListRow.SwipeActionButton title='Follow' style={{backgroundColor: '#ffd700'}} />,
            <ListRow.SwipeActionButton title='Alert' style={{backgroundColor: '#ef3340'}}/>,
            <ListRow.SwipeActionButton title='Share' style={{backgroundColor: '#0085ca'}} onPress={() => alert('Remove')}/>,        
          ]}
          bottomSeparator='full'
          />


           <ListRow
          onPress={() => alert('Press!')}
          title='Swipe able'
          detail={
          'React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React.'
        } titlePlace='top'
          swipeActions={[
            <ListRow.SwipeActionButton title='Follow' style={{backgroundColor: '#ffd700'}} />,
            <ListRow.SwipeActionButton title='Alert' style={{backgroundColor: '#ef3340'}}/>,
            <ListRow.SwipeActionButton title='Share' style={{backgroundColor: '#0085ca'}} onPress={() => alert('Remove')}/>,        
          ]}
          bottomSeparator='full'
          />


           <ListRow
          onPress={() => alert('Press!')}
          title='Swipe able'
          detail={
          'React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React.'
        } titlePlace='top'
          swipeActions={[
            <ListRow.SwipeActionButton title='Follow' style={{backgroundColor: '#ffd700'}} />,
            <ListRow.SwipeActionButton title='Alert' style={{backgroundColor: '#ef3340'}}/>,
            <ListRow.SwipeActionButton title='Share' style={{backgroundColor: '#0085ca'}} onPress={() => alert('Remove')}/>,         
          ]}
          bottomSeparator='full'
          />


           <ListRow
          onPress={() => alert('Press!')}
          title='Swipe able'
          detail={
          'React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React.'
        } titlePlace='top'
          swipeActions={[
            <ListRow.SwipeActionButton title='Follow' style={{backgroundColor: '#ffd700'}} />,
            <ListRow.SwipeActionButton title='Alert' style={{backgroundColor: '#ef3340'}}/>,
            <ListRow.SwipeActionButton title='Share' style={{backgroundColor: '#0085ca'}} onPress={() => alert('Remove')}/>,         
          ]}
          bottomSeparator='full'
          />


           <ListRow
          onPress={() => alert('Press!')}
          title='Swipe able'
          detail={
          'React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React.'
        } titlePlace='top'
          swipeActions={[
            <ListRow.SwipeActionButton title='Follow' style={{backgroundColor: '#ffd700'}} />,
            <ListRow.SwipeActionButton title='Alert' style={{backgroundColor: '#ef3340'}}/>,
            <ListRow.SwipeActionButton title='Share' style={{backgroundColor: '#0085ca'}} onPress={() => alert('Remove')}/>,         
          ]}
          bottomSeparator='full'
          />


           <ListRow
          onPress={() => alert('Press!')}
          title='Swipe able'
          detail={
          'React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React.'
        } titlePlace='top'
          swipeActions={[
            <ListRow.SwipeActionButton title='Follow' style={{backgroundColor: '#ffd700'}} />,
            <ListRow.SwipeActionButton title='Alert' style={{backgroundColor: '#ef3340'}}/>,
            <ListRow.SwipeActionButton title='Share' style={{backgroundColor: '#0085ca'}} onPress={() => alert('Remove')}/>,           
          ]}
          bottomSeparator='full'
          />


           <ListRow
          onPress={() => alert('Press!')}
          title='Swipe able'
          detail={
          'React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React.'
        } titlePlace='top'
          swipeActions={[
           <ListRow.SwipeActionButton title='Follow' style={{backgroundColor: '#ffd700'}} />,
            <ListRow.SwipeActionButton title='Alert' style={{backgroundColor: '#ef3340'}}/>,
            <ListRow.SwipeActionButton title='Share' style={{backgroundColor: '#0085ca'}} onPress={() => alert('Remove')}/>,        
          ]}
          bottomSeparator='full'
          />
      </ScrollView>
            </View>
          </SegmentedView.Sheet>

          <SegmentedView.Sheet title={this.renderTitle(2)}>
            <View style={{flex: 1, }}>

                <ListRow
          onPress={() => alert('Press!')}
          title='Swipe able'
          detail={
          'React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React.'
        } titlePlace='top'
          swipeActions={[
            <ListRow.SwipeActionButton title='Follow' style={{backgroundColor: '#ffd700'}} />,
            <ListRow.SwipeActionButton title='Alert' style={{backgroundColor: '#ef3340'}}/>,
            <ListRow.SwipeActionButton title='Share' style={{backgroundColor: '#0085ca'}} onPress={() => alert('Remove')}/>,       
          ]}
          bottomSeparator='full'
          />


            <ListRow
          onPress={() => alert('Press!')}
          title='Swipe able'
          detail={
          'React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React.'
        } titlePlace='top'
          swipeActions={[
            <ListRow.SwipeActionButton title='Follow' style={{backgroundColor: '#ffd700'}} />,
            <ListRow.SwipeActionButton title='Alert' style={{backgroundColor: '#ef3340'}}/>,
            <ListRow.SwipeActionButton title='Share' style={{backgroundColor: '#0085ca'}} onPress={() => alert('Remove')}/>,          
          ]}
          bottomSeparator='full'
          />


            <ListRow
          onPress={() => alert('Press!')}
          title='Swipe able'
          detail={
          'React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React.'
        } titlePlace='top'
          swipeActions={[
            <ListRow.SwipeActionButton title='Follow' style={{backgroundColor: '#ffd700'}} />,
            <ListRow.SwipeActionButton title='Alert' style={{backgroundColor: '#ef3340'}}/>,
            <ListRow.SwipeActionButton title='Share' style={{backgroundColor: '#0085ca'}} onPress={() => alert('Remove')}/>,       
          ]}
          bottomSeparator='full'
          />


            <ListRow
          onPress={() => alert('Press!')}
          title='Swipe able'
          detail={
          'React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React.'
        } titlePlace='top'
          swipeActions={[
           <ListRow.SwipeActionButton title='Follow' style={{backgroundColor: '#ffd700'}} />,
            <ListRow.SwipeActionButton title='Alert' style={{backgroundColor: '#ef3340'}}/>,
            <ListRow.SwipeActionButton title='Share' style={{backgroundColor: '#0085ca'}} onPress={() => alert('Remove')}/>,          
          ]}
          bottomSeparator='full'
          />



            <ListRow
          onPress={() => alert('Press!')}
          title='Swipe able'
          detail={
          'React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React.'
        } titlePlace='top'
          swipeActions={[
            <ListRow.SwipeActionButton title='Follow' style={{backgroundColor: '#ffd700'}} />,
            <ListRow.SwipeActionButton title='Alert' style={{backgroundColor: '#ef3340'}}/>,
            <ListRow.SwipeActionButton title='Share' style={{backgroundColor: '#0085ca'}} onPress={() => alert('Remove')}/>,           
          ]}
          bottomSeparator='full'
          />


            <ListRow
          onPress={() => alert('Press!')}
          title='Swipe able'
          detail={
          'React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React.'
        } titlePlace='top'
          swipeActions={[
            <ListRow.SwipeActionButton title='Follow' style={{backgroundColor: '#ffd700'}} />,
            <ListRow.SwipeActionButton title='Alert' style={{backgroundColor: '#ef3340'}}/>,
            <ListRow.SwipeActionButton title='Share' style={{backgroundColor: '#0085ca'}} onPress={() => alert('Remove')}/>,         
          ]}
          bottomSeparator='full'
          />


          
            </View>
          </SegmentedView.Sheet>
        </SegmentedView>
        
        
        
      </View>
    );
  }

}
