'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = ReactNative;

export default class OriginalBar extends React.Component {
  static title = '<TabBarIOS>';
  static description = 'Tab-based navigation.';
  static displayName = 'TabBarExample';

  state = {
    selectedTab: 'redTab',
    notifCount: 0,
    presses: 0,
  };

  _renderContent = (color: string, pageText: string) => {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={[styles.tabText, {color: "black"}]}>{pageText}</Text>
      </View>
    );
  };

  render() {
    return (
      <TabBarIOS.Item
        title="Mine"
        icon={require ('../images/bottom-bar/person-30.png')}
        selectedIcon={require('../images/bottom-bar/person-black-30.png')}
        selected={this.state.selectedTab === 'mineTab'}
        onPress={() => {
          this.setState({
            selectedTab: 'mineTab',
          });
        }}>
        {this._renderContent('white', 'This is Mine')}
      </TabBarIOS.Item>
    );
  }
}

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});