import React, {Component} from 'react';

import {View, Text, StyleSheet} from 'react-native';

class Greeting extends Component {
  str: string;

  render() {
    return (
      <View>
        <Text style={{color: '#ff0', fontSize: 20}}>{this.props.str}</Text>
      </View>
    );
  }
}

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
  }

  render() {
    return (
      <View style={PageStyle.viewStyle}>
        <Text style={PageStyle.textStyle} onPress={this._clickEvent}>
          Number is {this.state.num}
          {this.props.name}
        </Text>
        <Greeting str="1" />
      </View>
    );
  }

  _clickEvent = () => {
    // this.state.num += 1;
    this.setState(
      {
        num: (this.state.num += 1),
      },
      () => {
        console.log(this.state.num);
      },
    );
  };

  shouldComponentUpdate(nextP, NextS) {
    console.log('state ' + this.state.num + ' nextState ' + NextS.num);
    return true;
  }
}

const PageStyle = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
  },
});
