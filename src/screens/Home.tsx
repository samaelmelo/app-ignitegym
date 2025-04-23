import { useCallback, useEffect, useState } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { FlatList } from 'react-native';
import {
   HStack,
   VStack,
   Text,
   Heading,
   useToast,
   set,
} from '@gluestack-ui/themed';
import { HomeHeader } from '@components/HomeHeader';
import { Group } from '@components/Group';
import { ExerciseCard } from '@components/ExerciseCard';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { api } from '@services/api';
import { AppError } from '@utils/AppError';
import { ToastMenssage } from '@components/ToastMenseger';
import { ExerciseDTO } from '@dtos/ExercisDTO';
import { Loading } from '@components/Loading';

export function Home() {
   const [isLoading, setIsLoading] = useState(true);
   const [exercises, setExercises] = useState<ExerciseDTO[]>([]);
   const [groups, setGroups] = useState<string[]>([]);
   const toast = useToast();
   const [groupSelected, setGroupSelected] = useState('antebraço');

   const navigation = useNavigation<AppNavigatorRoutesProps>();

   function handleOpenExerciseDetails(exerciseId: string) {
      navigation.navigate('exercise', { exerciseId });
   }

   async function fetchGroups() {
      try {
         const response = await api.get('/groups');

         setGroups(response.data);
      } catch (error) {
         const isAppError = error instanceof AppError;
         const title = isAppError
            ? error.message
            : 'Não foi possível carregar os grupos musculares.';

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
      }
   }

   async function fetchExerciseByGroup() {
      try {
         setIsLoading(true);

         const response = await api.get(`/exercises/bygroup/${groupSelected}`);

         setExercises(response.data);
      } catch (error) {
         const isAppError = error instanceof AppError;
         const title = isAppError
            ? error.message
            : 'Não foi possível carregar os exercícios.';

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
      } finally {
         setIsLoading(false);
      }
   }

   useEffect(() => {
      fetchGroups();
   }, []);

   useFocusEffect(
      useCallback(() => {
         fetchExerciseByGroup();
      }, [groupSelected]),
   );

   return (
      <VStack flex={1}>
         <HomeHeader />

         <FlatList
            data={groups}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
               <Group
                  name={item}
                  isActive={
                     groupSelected.toLocaleUpperCase() ===
                     item.toLocaleUpperCase()
                  }
                  onPress={() => setGroupSelected(item)}
               />
            )}
            horizontal
            showsHorizontalScrollIndicator
            contentContainerStyle={{ paddingHorizontal: 32 }}
            style={{ marginVertical: 40, maxHeight: 44, minHeight: 44 }}
         />

         {isLoading ? (
            <Loading />
         ) : (
            <VStack px="$8" flex={1}>
               <HStack
                  justifyContent="space-between"
                  mb="$5"
                  alignItems="center"
               >
                  <Heading
                     color="$gray200"
                     fontSize="$md"
                     fontFamily="$heading"
                  >
                     Exercícios
                  </Heading>

                  <Text color="$gray200" fontSize="$sm" fontFamily="$body">
                     {exercises.length}
                  </Text>
               </HStack>
               <FlatList
                  data={exercises}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                     <ExerciseCard
                        onPress={() => handleOpenExerciseDetails(item.id)}
                        data={item}
                     />
                  )}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{ paddingBottom: 20 }}
               />
            </VStack>
         )}
      </VStack>
   );
}
