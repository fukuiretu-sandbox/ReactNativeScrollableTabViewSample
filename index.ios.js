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
  View,
  ScrollView
} from 'react-native';
// import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ReactNativeScrollableTabViewSample extends Component {
  render() {
    return (
      <ScrollableTabView
        style={{ marginTop: 20, }}
        initialPage={0}
        renderTabBar={() => <ScrollableTabBar />}
      >
        <Text tabLabel='Tab #1'>My<Icon name='logo-apple' color='black' style={styles.icon} /></Text>
        <Text tabLabel='Tab #2 word word'>favorite</Text>
        <Text tabLabel='Tab #3 word word word'>project</Text>
        <Text tabLabel='Tab #4 word word word word'>favorite</Text>
        <Text tabLabel='Tab #5'>project</Text>
      </ScrollableTabView>
    //   <ScrollableTabView
    //   style={styles.container}
    //   renderTabBar={()=><DefaultTabBar backgroundColor='rgba(255, 255, 255, 0.7)' />}
    //   tabBarPosition='overlayTop'
    // >
    //     <ScrollView tabLabel='iOS'>
    //       <Icon name='logo-apple' color='black' size={300} style={styles.icon} />
    //       <Icon name='ios-phone-portrait' color='black' size={300} style={styles.icon} />
    //       <Icon name='logo-apple' color='#DBDDDE' size={300} style={styles.icon} />
    //       <Icon name='ios-phone-portrait' color='#DBDDDE' size={300} style={styles.icon} />
    //     </ScrollView>
    //     <ScrollView tabLabel='Android'>
    //       <Icon name='logo-android' color='#A4C639' size={300} style={styles.icon} />
    //       <Icon name='logo-android' color='black' size={300} style={styles.icon} />
    //       <Icon name='logo-android' color='brown' size={300} style={styles.icon} />
    //     </ScrollView>
    //   </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeScrollableTabViewSample', () => ReactNativeScrollableTabViewSample);
