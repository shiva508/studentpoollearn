import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import MainStackNavigator from "./navigation/MainStackNavigator";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </>
  );
}
