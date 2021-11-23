import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, FlatList, SafeAreaView } from "react-native"

import MenuItem from "./components/MenuItem"

import menu from "./menu.json"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={menu}
        renderItem={({ item }) => <MenuItem {...item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
