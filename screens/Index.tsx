// React Navigation
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// Expo
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

// Theme
import colors from "../theme/colors.json";

// Screens
import AddWineScreen from "./AddWineScreen";
import SettingsScreen from "./SettingsScreen";
import WinesOverviewScreen from "./WinesOverviewScreen";

// Create Navigation Tabs
const Tab = createMaterialBottomTabNavigator();

// Set theme Navigation tabs
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors["md.sys.color.primary-container"].hex,
  },
};


const Index = () => {
    return (
        <NavigationContainer theme={theme}>
          <Tab.Navigator
            barStyle={{
              backgroundColor: colors["md.sys.color.primary"].hex,
            }}
          >
            <Tab.Screen
              name="Settings"
              component={SettingsScreen}
              options={{
                tabBarLabel: "Settings",
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="tune" size={26} color={color} />
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
    )
}

export default Index