import React, {Component} from 'react';

import {View, Text, StyleSheet, Dimensions} from 'react-native';

//自定义自控件
class SubComponent extends Component {
  word: ?string = 'hello';

  render() {
    console.log('Render --- SubComponent');
    return (
      <View>
        <Text style={GreetingStyle.textStyle} onPress={this._changeWord}>
          {this.props.word}
        </Text>
      </View>
    );
  }

  _changeWord = () => {
    console.log('word ' + this.word);
    this.word = this.word === 'change' ? 'hello' : 'change';
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextState !== this.state;
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
    console.log('Page Render');
    return (
      <View style={PageStyle.viewStyle}>
        <Text style={PageStyle.textStyle} onPress={this._clickEvent}>
          Number is {this.state.num}
          {this.props.name}
        </Text>
        <SubComponent word="hello" />
      </View>
    );
  }

  _clickEvent = () => {
    const {width, height} = Dimensions.get('window');
    console.log('width --> ' + width + ' height --> ' + height);
    let num = this.state.num + 1;
    this.setState(
      {
        num: num,
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

const GreetingStyle = StyleSheet.create({
  textStyle: {
    color: '#6f0',
    fontSize: 20,
  },
});

const PageStyle = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    flexDirection: 'column',
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
  },
});
