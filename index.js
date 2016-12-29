'use strict';

import React, { Component } from 'react';
import { View } from 'react-native';
import CircleSlider from './CircleSlider';

export default class CircleSliderContainer extends Component {

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <CircleSlider
          value={90}
        />
      </View>
    )
  }
}
