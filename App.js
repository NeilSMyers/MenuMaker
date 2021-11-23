import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native"
import { Feather } from "@expo/vector-icons"

import MenuItem from "./components/MenuItem"
import CreateMenuItemModal from "./components/CreateMenuItemModal"

import genericMenu from "./menu"

export default function App() {
  const [menu, setMenu] = useState(genericMenu)
  const [createModalOpen, setCreateModalOpen] = useState(false)

  const deleteItem = (id) => {
    Alert.alert("Are you suuuure you wana delete that?", null, [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => setMenu(menu.filter((item) => item.id !== id)),
      },
    ])
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <TouchableOpacity
        onPress={() => setCreateModalOpen(true)}
        style={styles.create}
      >
        <Feather name="plus-circle" size={25} color="white" />
      </TouchableOpacity>
      <FlatList
        data={menu}
        renderItem={({ item }) => (
          <MenuItem {...item} deleteItem={deleteItem} />
        )}
        keyExtractor={(item) => item.id}
      />
      <CreateMenuItemModal
        visible={createModalOpen}
        onSubmit={(newItem) => {
          setCreateModalOpen(false)
          setMenu([...menu, newItem])
        }}
        menuLength={menu.length}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  create: {
    paddingHorizontal: 15,
    paddingBottom: 5,
    alignSelf: "flex-end",
  },
})
