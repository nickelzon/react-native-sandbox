import React, { useCallback, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, ScrollView, Text, TextInput, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import styles from "./styles";
import { L1 } from "./assets/images";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Bebas-Neue": require("./assets/fonts/BebasNeue-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  onLayoutRootView();

  return (
    <View style={styles.rootContainer}>
      <View style={styles.heading}>
        <Text style={{ fontFamily: "Bebas-Neue", fontSize: 35 }}>KOTLIN</Text>
        <TextInput style={styles.input} placeholder="Search" val></TextInput>
        <AntDesign name="setting" size={30}></AntDesign>
      </View>

      <ScrollView
        style={styles.featuredImage}
        contentContainerStyle={{
          alignItems: "center",
        }}
      >
        <Image source={L1} style={styles.image} />
      </ScrollView>
    </View>
  );
}
