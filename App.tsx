// React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// Native Base
import { NativeBaseProvider } from "native-base";

// Expo
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

// Screens
import AddWineScreen from "./screens/AddWineScreen";
import SettingsScreen from "./screens/SettingsScreen";
import WinesOverviewScreen from "./screens/WinesOverviewScreen";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarLabel: "Settings",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="tune"
                  size={26}
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="AddWine"
            component={AddWineScreen}
            options={{
              tabBarLabel: "Add Wine",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="glass-wine"
                  size={26}
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="WinesOverview"
            component={WinesOverviewScreen}
            options={{
              tabBarLabel: "Your Wines",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="bottle-wine"
                  size={26}
                  color={color}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
