import React from 'react';
import { AppRegistry, TouchableHighlight, FlatList, StyleSheet, Text, View } from 'react-native';

export default class WalkList extends React.Component {

  render() {
    const highlighted = true;
    return (
      <View style={style.container}>
       <FlatList
        ItemSeparatorComponent={<View style={[style.separator, highlighted && {marginLeft: 0}]} />}
        data={[{title: 'Title Text', key: 'item1'}]}
        renderItem={({item, separators}) => (
            <TouchableHighlight
            onPress={() => this._onPress(item)}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}>
            <View style={{backgroundColor: 'white'}}>
                <Text>{item.title}</Text>
            </View>
            </TouchableHighlight>
        )}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  separator: {
    borderColor: 'black',
    borderWidth: 1
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})