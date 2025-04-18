import { useContext } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';
import { gluestackUIConfig } from '../../config/gluestack-ui.config';
import { Box } from '@gluestack-ui/themed';
import { useAuth } from '@hooks/useAuth';

export function Routes() {
   // manter o background padrao para todas as telas
   const theme = DefaultTheme;
   const { user } = useAuth();

   theme.colors.background = gluestackUIConfig.tokens.colors.gray700;

   console.log('user', user);

   return (
      <Box flex={1} bg="$gray700">
         <NavigationContainer>
            <AuthRoutes />
         </NavigationContainer>
      </Box>
   );
}
