import React from 'react'
import { Image, StyleSheet } from 'react-native'

const Logo = () => (
  <Image
    source={{
      uri:
        'https://cdn.icon-icons.com/icons2/1465/PNG/512/154manofficeworker2_100459.png',
    }}
    style={styles.image}
  />
)

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
})

export default Logo
