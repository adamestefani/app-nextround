import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'

const commonStyles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderRadius: 20,
    borderColor: '#D6D6D6'
  },
  text: {
    fontSize: 28,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20
  }
})

const primaryStyles = StyleSheet.create({
  container: {
    backgroundColor: '#D6D6D6'
  },
  text: {
    color: '#333',
    fontWeight: 'bold'
  }
})
const secondaryStyles = StyleSheet.create({
  container: {
    backgroundColor: '#333'
  },
  text: {
    color: '#D6D6D6',
    fontWeight: 'normal'
  }
})

class MenuButton extends Component {
  render() {
    const stylesContainer = {
      ...(this.props.primary
        ? primaryStyles.container
        : secondaryStyles.container),
      ...commonStyles.container
    }

    const stylesText = {
      ...(this.props.primary ? primaryStyles.text : secondaryStyles.text),
      ...commonStyles.text
    }

    return (
      <View style={stylesContainer}>
        <Text style={stylesText}>{this.props.label.toUpperCase()}</Text>
      </View>
    )
  }
}

MenuButton.propTypes = {
  label: PropTypes.string,
  primary: PropTypes.bool
}

export default MenuButton
