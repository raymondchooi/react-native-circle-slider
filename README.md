[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/RayChooi)

# React Native Circle Slider


##### React native circle slider using [react-native-svg](https://github.com/react-native-community/react-native-svg) and [PanResponder](https://facebook.github.io/react-native/docs/panresponder.html).

<img src="https://github.com/raymondchooi/react-native-circle-slider/blob/master/img/circleSliderPreview.gif" alt="Circle Slider preview" width="320px"></img>

## Install

This component is built with `React Native 0.39+` and works for Android and iOS.

**Install react-native-svg library**

Installation instructions [here.](https://github.com/react-native-community/react-native-svg)

**Import CircleSlider.js**
```javascript
import CircleSlider from './CircleSlider';
```

## Usage

**Basic Usage**

```javascript
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
```

## Properties

| Property name        | Type       | Default | Description                          |
| ---                  | ---        | ---     | ---                                  |
| **btnRadius**        | *number*   | 15      | The radius of the small button       |
| **dialRadius**       | *number*   | 130     | The radius of the circle slider      |
| **dialWidth**        | *number*   | 5       | The width of the slider line         |
| **meterColor**       | *string*   | '#0cd'  | The color of slider line             |
| **onValueChange**    | *function* | x => x  | Value to print on button (x=degrees) |
| **textColor**        | *string*   | '#fff'  | The color of the button text         |
| **textSize**         | *number*   | 10      | The size of the button text          |
| **value**            | *number*   | 0       | The value of the slider (degrees)    |

## Notes

There seems to be an error in the React Native code where locationX and locationY do not update themselves and stay as the coordinates of the first touch.
A small work-around was used for now by calculating the location of slider on the page and using the gestureState coordinates. 

## License

GNU General Public License v3.0
