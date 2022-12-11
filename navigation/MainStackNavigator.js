import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyNotes from "../components/MyNotes";
import MyNotesDetails from "../components/MyNotesDetails";
import MyPictures from "../components/MyPictures";

const Stack = createNativeStackNavigator();
const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="mypictures">
      <Stack.Screen
        name="mypictures"
        component={MyPictures}
        options={{
          headerTitle: "My Pictures",
          headerShown: false,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="myNotes"
        component={MyNotes}
        options={{
          headerTitle: "My Notes",
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="myNotesDetails"
        component={MyNotesDetails}
        options={{
          headerTitle: "My Notes Details",
          headerShown: false,
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
export default MainStackNavigator;
