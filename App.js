import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import styles from "./styles";

export default function App() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.heading}>
        <Text style={styles.title}>KOTLIN</Text>
        <TextInput style={styles.input} placeholder="Search"></TextInput>
      </View>
    </View>
  );
}
