import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StackActions } from '@react-navigation/native';

class SplashScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        setTimeout(() => {
          this.moveToNextScreen();
        }, 4000);
      }
      moveToNextScreen = () => {
        this.props.navigation.dispatch(StackActions.replace('LoginScreen'));
      };


    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Dhruv</Text>
                </View>
            </View>
        );
    }
}

export default SplashScreen;