[![Language](https://img.shields.io/badge/language-ES%206-orange.svg)](https://github.com/lukehoban/es6features#readme)
[![Platforms](https://img.shields.io/badge/platform-iOS%20%7C%20Android-lightgrey.svg)](http://facebook.github.io/react-native/docs/getting-started.html)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/RayChooi)

# React Native Circle Slider

##### React native circle slider using [react-native-svg](https://github.com/react-native-community/react-native-svg) and [PanResponder](https://facebook.github.io/react-native/docs/panresponder.html).

<img src="https://media.giphy.com/media/Att6gob5HMAxQuIOTy/giphy.gif" alt="Circle Slider preview" width="320px"></img>

## Install

This component is built with `React Native 0.39+` and works for Android and iOS.

**Install with [npm](https://www.npmjs.com/):**

```sh
npm i --save react-native-circle-slider
```

**Install with [yarn](https://yarnpkg.com):**

```sh
$ yarn add react-native-circle-slider
```

## Usage

**Basic Usage(github file)**

```javascript
import React, { Component } from "react";
import { View } from "react-native";
import CircleSlider from "react-native-circle-slider";

export default class CircleSliderContainer extends Component {
	render() {
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<CircleSlider value={90} />
			</View>
		);
	}
}
```

## Properties

| Property name     | Type       | Default       | Description                           |
| ----------------- | ---------- | ------------- | ------------------------------------- |
| **btnRadius**     | _number_   | 15            | The radius of the small button        |
| **dialRadius**    | _number_   | 130           | The radius of the circle slider       |
| **dialWidth**     | _number_   | 5             | The width of the slider line          |
| **meterColor**    | _string_   | '#0cd'        | The color of slider line              |
| **fillColor**     | _string_   | 'none'        | The color of circle fill              |
| **onValueChange** | _function_ | x => x        | Value to print on button (x=degrees)  |
| **textColor**     | _string_   | '#fff'        | The color of the button text          |
| **textSize**      | _number_   | 10            | The size of the button text           |
| **strokeColor**   | _string_   | '#fff         | The color of stroke above the line    |
| **strokeWidth**   | _number_   | 0.5           | The size of stroke above the line     |
| **value**         | _number_   | 0             | The value of the slider (degrees)     |
| **min**           | _number_   | 0             | The min limit of the slider (degrees) |
| **max**           | _number_   | 359           | The max limit of the slider (degrees) |
| **xCenter**       | _number_   | Screen center | The x coordinates of rotation center  |
| **yCenter**       | _number_   | Screen center | The y coordinates of rotation center  |

## Notes

There seems to be an error in the React Native code where locationX and locationY do not update themselves and stay as the coordinates of the first touch.
A small work-around was used for now by setting the coordinates for the rotation center.

## License

GNU General Public License v3.0
