import { View } from 'react-native';
import {
   useFonts,
   Roboto_700Bold,
   Roboto_400Regular,
} from '@expo-google-fonts/roboto';
import { StatusBar } from 'expo-status-bar';
import { GluestackUIProvider, Text, Center } from '@gluestack-ui/themed';
import { config } from './config/gluestack-ui.config';
import { Loading } from '@components/Loading';
import { SignUp } from '@screens/SignUp';
import { Routes } from '@routes/index';

export default function App() {
   const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

   return (
      <GluestackUIProvider config={config}>
         <StatusBar style="light" backgroundColor="transparent" translucent />

         {fontsLoaded ? <Routes /> : <Loading />}
      </GluestackUIProvider>
   );
}
