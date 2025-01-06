import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
        tabBarActiveTintColor: '#E30B5C',
        tabBarInactiveTintColor: '#25292e',
        tabBarActiveBackgroundColor: '#fff',
        tabBarInactiveBackgroundColor: '#fff',
    }}
    >
      <Tabs.Screen name="index" 
      options={{
        headerShown: true, 
        headerTitleAlign: 'center',
        title: 'Home', 
        tabBarIcon: ({ color, focused, size }) => (
          <Ionicons name={focused ? "home-sharp" : "home-outline"} size={size} color={color} />
        )
        }} />
      <Tabs.Screen name="about" 
      options={{ 
        headerShown: false,
        title: 'About', 
        tabBarIcon: ({ color, focused, size }) => (
          <Ionicons name={focused ? "information-circle-sharp" : "information-circle-outline"} size={size} color={color} />
        )
        }} />
    </Tabs>
  );
}
