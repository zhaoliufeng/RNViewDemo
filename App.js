import React, {Component} from 'react';

import {View, Text, StyleSheet, Animated} from 'react-native';

import {AdToast} from './src/AdToast';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Easing = require('react-native');
const {PanResponder} = require('react-native');

export default class Page extends Component {
    fadeInAnimated;

    constructor(props) {
        super(props);
        this.fadeInAnimated = new Animated.Value(0);
        this.state = {
            bg: 'white',
            top: 50,
            left: 50,
        };
    }

    panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
            this._top = this.state.top;
            this._left = this.state.left;
            this.setState({bg: 'red'});
        },
        onPanResponderMove: (evt, gs) => {
            console.log(gs.dx + ' ' + gs.dy);
            this.setState({
                top: this._top + gs.dy,
                left: this._left + gs.dx,
            });
        },
        onPanResponderRelease: (evt, gs) => {
            this.setState({
                bg: 'white',
                top: this._top + gs.dy,
                left: this._left + gs.dx,
            });
        },
    });

    render() {
        return (
            <View style={PageStyle.viewStyle}>
                <Text {...this.panResponder.panHandlers}
                      style={{
                          fontSize: 20, margin: 50, color: Colors.white, backgroundColor: this.state.bg,
                          top: this.state.top,
                          left: this.state.left,
                      }}
                      onPress={() => this._onShowAnim()}>开始动画</Text>
                <Animated.View style={[PageStyle.downViewStyle, {opacity: this.fadeInAnimated}]}>
                </Animated.View>
            </View>

        );
    }

    _onShowAnim() {
        Animated.timing(this.fadeInAnimated, {
            toValue: 1,
            duration: 500,
            easing: Easing.linear,
        }).start();
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
    downViewStyle: {
        width: 100,
        height: 100,
        backgroundColor: '#f90',
    },
    textStyle: {
        color: 'white',
        fontSize: 20,
    },
});
