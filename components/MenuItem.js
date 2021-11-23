import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"

const MenuItem = ({ id, image, title, description, price }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>${price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 2,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 8,
  },
})

export default MenuItem
