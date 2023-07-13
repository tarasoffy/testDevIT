import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SignInScreen } from "../screens/SignIn";
import { SignUpScreen } from "../screens/SignUp";
import { ProfileScreen } from "../screens/Profile";
import LogOutButton from "../components/LogOutButton";

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Edit Profile"
          component={ProfileScreen}
          options={{
            title: "Edit Profile",
            headerTitleAlign: "center",
            headerRight: () => <LogOutButton />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { RootNavigator };
