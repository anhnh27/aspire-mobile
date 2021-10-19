import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "./components/Icon";
import Colors from "./theme/colors";
import HomeScreen from "./screens/home";
import DebitCardScreen from "./screens/debit-card";
import PaymentScreen from "./screens/payment";
import CreditScreen from "./screens/credit";
import ProfileScreen from "./screens/profile";
import SpendingLimitScreen from "./screens/spending-limit";
import AppModal from "./screens/modal";

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="DebitCard"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "";

          if (route.name === "Home") {
            iconName = "Logo";
          } else if (route.name === "DebitCard") {
            iconName = "Card";
          } else if (route.name === "Payment") {
            iconName = "Payments";
          } else if (route.name === "Credit") {
            iconName = "Credit";
          } else if (route.name === "Profile") {
            iconName = "user";
          }

          return <Icon iconName={iconName} style={iconStyle(focused)} />;
        },
        tabBarActiveTintColor: Colors.green,
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="DebitCard" component={DebitCardScreen} />
      <Tab.Screen name="Payment" component={PaymentScreen} />
      <Tab.Screen name="Credit" component={CreditScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SpendingLimit"
        component={SpendingLimitScreen}
        options={{
          title: "",
          headerBackTitle: "",
          headerShadowVisible: false,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

const iconStyle = (focused: boolean) => {
  return {
    fontSize: 22,
    color: focused ? Colors.green : "gray",
  };
};

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack />
      <AppModal />
    </NavigationContainer>
  );
};

export default AppNavigator;
