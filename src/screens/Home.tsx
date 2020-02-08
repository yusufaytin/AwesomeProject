import React, {Component} from 'react';
import {Text, Button} from 'react-native';
import {NavigationInjectedProps} from 'react-navigation';

class Detail extends Component<NavigationInjectedProps> {
  render() {
    return (
      <>
        <Text>Home Page</Text>
        <Button
          title={'Detail'}
          onPress={() => this.props.navigation.navigate('Detail')}
        />
      </>
    );
  }
}

export default Detail;
