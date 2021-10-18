import React, {Component} from 'react';
import {Text} from 'react-native';
import IconList from '../assets/fonts/selection.json';

type IconProps = {
  style?: any;
  iconFamily?: string;
  iconName: string;
};

export default class Icon extends Component<IconProps> {
  static defaultProps = {
    iconFamily: IconList.preferences.fontPref.metadata.fontFamily,
  };

  render() {
    const {style, iconFamily, iconName} = this.props;
    let glyphMap = {};
    let icon;

    IconList.icons.forEach(icon => {
      glyphMap[icon.properties.name] = icon.properties.code;
    });

    if (typeof glyphMap[iconName] === 'number') {
      icon = String.fromCharCode(glyphMap[iconName]);
    } else {
      icon = iconName;
    }

    return <Text style={[style, {fontFamily: iconFamily}]}>{icon}</Text>;
  }
}
