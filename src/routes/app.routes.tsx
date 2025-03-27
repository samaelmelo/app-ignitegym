import {
   createBottomTabNavigator,
   BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { gluestackUIConfig } from '../../config/gluestack-ui.config';

import HomeSvg from '@assets/home.svg';
import HistorySvg from '@assets/history.svg';
import ProfileSvg from '@assets/profile.svg';

import { Home } from '@screens/Home';
import { Profile } from '@screens/Profile';
import { History } from '@screens/History';
import { Exercise } from '@screens/Exercise';
import { Platform } from 'react-native';

type AppRoutes = {
   home: undefined;
   exercise: undefined;
   profile: undefined;
   history: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const BottomTab = createBottomTabNavigator<AppRoutes>();
const Stack = createNativeStackNavigator();

export function TabRoutes() {
   const { tokens } = gluestackUIConfig;
   const iconSize = tokens.space['6'];

   return (
      <BottomTab.Navigator
         screenOptions={{
            headerShown: false, // remove o header de todas as telas
            tabBarShowLabel: false, // remove a label de todos os botoes de navegacão
            tabBarActiveTintColor: tokens.colors.green500, // botao de navegação ativo tem essa cor
            tabBarInactiveTintColor: tokens.colors.gray200, // botao de navegação inativo tem essa cor
            tabBarStyle: {
               // estilizar a barra dos botoes de navegação
               backgroundColor: tokens.colors.gray600,
               borderTopWidth: 0,
               height: Platform.OS === 'android' ? 'auto' : 96,
               paddingBottom: tokens.space['10'],
               paddingTop: tokens.space['1'],
            },
         }}
      >
         <BottomTab.Screen
            name="home"
            component={Home}
            options={{
               // definição de icone dos botoes de navegação
               tabBarIcon: ({ color }) => (
                  <HomeSvg fill={color} width={iconSize} height={iconSize} />
               ),
            }}
         />
         <BottomTab.Screen
            name="history"
            component={History}
            options={{
               // definição de icone dos botoes de navegação
               tabBarIcon: ({ color }) => (
                  <HistorySvg fill={color} width={iconSize} height={iconSize} />
               ),
            }}
         />
         <BottomTab.Screen
            name="profile"
            component={Profile}
            options={{
               // definição de icone dos botoes de navegação
               tabBarIcon: ({ color }) => (
                  <ProfileSvg fill={color} width={iconSize} height={iconSize} />
               ),
            }}
         />

      </BottomTab.Navigator>
   );
}


export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={TabRoutes} />
      <Stack.Screen name="exercise" component={Exercise} />
    </Stack.Navigator>
  );
}