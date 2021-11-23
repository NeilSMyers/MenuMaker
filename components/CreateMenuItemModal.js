import React, { useRef, useState, useEffect } from "react"
import {
  SafeAreaView,
  Text,
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native"

function CreateMenuItemModal({ visible, onSubmit, menuLength }) {
  const imageRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const priceRef = useRef(null)

  const [image, setImage] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")

  return (
    <Modal visible={visible} animationType="slide">
      <SafeAreaView style={styles.container}>
        <Text style={styles.screenTitle}>Create / Edit Menu Item</Text>
        <TextInput
          ref={imageRef}
          placeholder="Image URL"
          style={styles.textInput}
          autoFocus={true}
          placeholderTextColor={"#565656"}
          value={image}
          onChangeText={setImage}
          onSubmitEditing={() => titleRef.current.focus()}
        />
        <TextInput
          ref={titleRef}
          placeholder="Title"
          style={styles.textInput}
          placeholderTextColor={"#565656"}
          value={title}
          onChangeText={setTitle}
          onSubmitEditing={() => descriptionRef.current.focus()}
        />
        <TextInput
          ref={descriptionRef}
          placeholder="Description"
          style={styles.textInput}
          placeholderTextColor={"#565656"}
          value={description}
          onChangeText={setDescription}
          onSubmitEditing={() => priceRef.current.focus()}
        />
        <TextInput
          ref={priceRef}
          placeholder="Price"
          style={styles.textInput}
          placeholderTextColor={"#565656"}
          value={price}
          onChangeText={setPrice}
        />
        <TouchableOpacity
          onPress={() => {
            setImage("")
            setTitle("")
            setDescription("")
            setPrice("")
            onSubmit({
              id: Math.random(),
              title,
              image,
              description,
              price,
            })
          }}
          disabled={!image || !title || !description || !price}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  screenTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  textInput: {
    padding: 15,
    backgroundColor: "#1c1c1e",
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 16,
    color: "white",
  },
  button: {
    padding: 12,
    backgroundColor: "green",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    alignSelf: "center",
    fontWeight: "bold",
  },
})

export default CreateMenuItemModal
