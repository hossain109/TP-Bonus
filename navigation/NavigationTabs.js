import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Foundation as FoundationIcons } from "react-native-vector-icons";
import Jouer from '../screens/GameScreen';
import Accueil from '../screens/HomeScreen';


const Tab = createBottomTabNavigator();

const NavigationTabs = () => {
      return (
            <Tab.Navigator>
                  <Tab.Screen
                        name="Accueil"
                        component={Accueil}
                        options={{
                              tabBarLabel: "Accueil",
                              tabBarActiveTintColor: "#9d5465",
                              tabBarInactiveTintColor: "#d9b6bc",
                              tabBarIcon: ({ color, size }) => (
                                    <FoundationIcons name="home" color={color} size={size} />
                              ),
                              title: "Accueil",
                        }}
                  />
                  <Tab.Screen
                        name="Jouer"
                        component={Jouer}
                        options={{
                              tabBarLabel: "Jouer",
                              tabBarActiveTintColor: "#9d5465",
                              tabBarInactiveTintColor: "#d9b6bc",
                              tabBarIcon: ({ color, size }) => (
                                    <FoundationIcons name="play" color={color} size={size} />
                              ),
                              title: "Jouer",
                        }}
                  />
            </Tab.Navigator>
      )
}

export default NavigationTabs