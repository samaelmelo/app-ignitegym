import { useState } from 'react';
import {
   VStack,
   Image,
   Center,
   Text,
   Heading,
   ScrollView,
   onChange,
   useToast,
} from '@gluestack-ui/themed';

import BackgroundImg from '@assets/background.png';
import Logo from '@assets/logo.svg';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { useAuth } from '@hooks/useAuth';

import { AuthNavigatorRoutesProps } from '@routes/auth.routes';
import { useNavigation } from '@react-navigation/native';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yop from 'yup';
import { AppError } from '@utils/AppError';
import { ToastMenssage } from '@components/ToastMenseger';

type SignInFormData = {
   email: string;
   password: string;
};

const signInSchema = yop.object({
   email: yop.string().required('Informe o e-mail').email('E-mail inválido'),
   password: yop.string().required('Informe a senha'),
});

export function SignIn() {
   const [isLoading, setIsLoading] = useState(false);

   const navigation = useNavigation<AuthNavigatorRoutesProps>();

   const { signIn } = useAuth();

   const toast = useToast();

   const {
      control,
      handleSubmit,
      formState: { errors },
   } = useForm<SignInFormData>({
      resolver: yupResolver(signInSchema),
   });

   function handleNewAccount() {
      navigation.navigate('signUp');
   }

   async function handleSignIn({ email, password }: SignInFormData) {
      try {
         setIsLoading(true);
         await signIn(email, password);
      } catch (error) {
         const isAppError = error instanceof AppError;

         const title = isAppError
            ? error.message
            : 'Não foi possível entrar. Tente novamente mais tarde.';

         toast.show({
            placement: 'top',
            render: ({ id }) => (
               <ToastMenssage
                  id={id}
                  action="error"
                  onClose={() => toast.close(id)}
                  title={title}
               />
            ),
         });

         setIsLoading(false);
      }
   }

   return (
      <ScrollView
         contentContainerStyle={{ flexGrow: 1 }}
         showsVerticalScrollIndicator={false}
      >
         <VStack flex={1}>
            <Image
               alt="Pessoas treinando"
               w="$full"
               h={624}
               source={BackgroundImg}
               defaultSource={BackgroundImg}
               position="absolute"
            />

            <VStack flex={1} px="$10" pb="$16">
               <Center my="$24">
                  <Logo />

                  <Text color="$gray100" fontSize="$sm">
                     Treine sua mente e seu corpo.
                  </Text>
               </Center>

               <Center gap="$2">
                  <Heading color="$gray100">Acesse a conta</Heading>

                  <Controller
                     name="email"
                     control={control}
                     render={({ field: { onChange, value } }) => (
                        <Input
                           placeholder="E-mail"
                           keyboardType="email-address"
                           autoCapitalize="none"
                           onChangeText={onChange}
                           value={value}
                           errorMessage={errors.email?.message}
                        />
                     )}
                  />

                  <Controller
                     name="password"
                     control={control}
                     render={({ field: { onChange, value } }) => (
                        <Input
                           placeholder="Senha"
                           secureTextEntry
                           onChangeText={onChange}
                           value={value}
                           errorMessage={errors.password?.message}
                           onSubmitEditing={handleSubmit(handleSignIn)}
                           returnKeyType="send"
                        />
                     )}
                  />

                  <Button
                     title="Acessar"
                     onPress={handleSubmit(handleSignIn)}
                     isLoading={isLoading}
                  />
               </Center>

               <Center flex={1} justifyContent="flex-end" mt="$4">
                  <Text
                     color="$gray100"
                     fontSize="$sm"
                     mb="$3"
                     fontFamily="$body"
                  >
                     Ainda não tem acesso ?
                  </Text>
                  <Button
                     title="Criar Conta"
                     variant="outline"
                     onPress={handleNewAccount}
                  />
               </Center>
            </VStack>
         </VStack>
      </ScrollView>
   );
}
