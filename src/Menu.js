import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
  StatusBar
} from 'react-native'
import { Font } from 'expo'
import { expo as app } from '../app.json'
import MenuButton from './component/menuButton'

const screenSize = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    // textTransform: 'uppercase',
    color: '#D6D6D6',
    marginTop: StatusBar.currentHeight + 20,
    paddingTop: 0,
    fontSize: 30,
    fontWeight: 'bold'
  }
})

class Menu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      container: {
        flex: 1,
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }
    }

    this.showButtonFromLeft = new Animated.ValueXY({
      x: -screenSize.width,
      y: -200
    })
    this.rotation = new Animated.Value(0)
  }

  async componentDidMount() {
    await Font.loadAsync({
      'montserrat-regular': require('../assets/fonts/Montserrat-Regular.ttf')
    })

    this.setState({
      container: {
        ...this.state.container,
        fontFamily: 'montserrat-regular'
      }
    })

    Animated.spring(this.showButtonFromLeft, {
      toValue: { x: 0, y: 0 },
      friction: 7
    }).start()

    Animated.spring(this.rotation, {
      toValue: 1,
      friction: 7
    }).start()
  }

  render() {
    const spin = this.rotation.interpolate({
      inputRange: [0, 1],
      outputRange: ['-90deg', '0deg']
    })

    return (
      <View style={this.state.container}>
        <View style={{ flex: 2 }}>
          <Text style={styles.title}>{app.name.toUpperCase()}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Animated.View
            style={[
              this.showButtonFromLeft.getLayout(),
              { transform: [{ rotate: spin }] }
            ]}
          >
            <MenuButton label={'button 1'} primary={true} />
          </Animated.View>
        </View>
        <View style={{ flex: 2 }}>
          <MenuButton label={'button 2'} primary={false} />
        </View>
      </View>
    )
  }
}

export default Menu
