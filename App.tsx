import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Shrine_CatalogItem from "./app/components/Shrine_CatalogItem";
import { SampleItems } from "./app/data";
import { CatalogItemVariant } from "./app/components/Shrine_CatalogItem/Shrine_CatalogItem";
import Shrine_CatalogGroup from "./app/components/Shrine_CatalogGroup";

import { Shrine_Logo } from "./app/components/Shrine_SVG";

// export { default } from "./.storybook";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    "Rubik-Regular": require("./app/assets/fonts/rubik_regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  const item = SampleItems[0];

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>
        Open up App.tsx to start working on your app!
      </Text> */}
      {/* <Shrine_CatalogItem
        variant={CatalogItemVariant.TOP_LEFT}
        data={item}
        onPress={() => {}}
        onAddToCart={() => {}}
      /> */}
      <Shrine_CatalogGroup data={[SampleItems[0], SampleItems[1]]} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Inter-Black",
  },
});
