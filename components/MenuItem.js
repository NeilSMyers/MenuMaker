import React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import { Feather } from "@expo/vector-icons"

const MenuItem = ({ id, image, title, description, price, deleteItem }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.metadata}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity onPress={() => deleteItem(id)}>
            <Feather name="trash-2" size={15} color="red" />
          </TouchableOpacity>
        </View>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 150,
    overflow: "hidden",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  metadata: {
    padding: 10,
    backgroundColor: "#1c1c1e",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    color: "white",
    fontWeight: "bold",
  },
  description: {
    color: "white",
  },
  price: {
    textAlign: "right",
    color: "white",
  },
})

export default MenuItem
