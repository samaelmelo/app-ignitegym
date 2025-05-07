import { useCallback, useState } from 'react';
import { SectionList } from 'react-native';
import { HistoryCard } from '@components/HistoryCard';
import { ScreenHeader } from '@components/ScreenHeader';
import { Heading, VStack, Text, useToast } from '@gluestack-ui/themed';
import { AppError } from '@utils/AppError';
import { ToastMenssage } from '@components/ToastMenseger';
import { api } from '@services/api';
import { useFocusEffect } from '@react-navigation/native';
import { HistoryByDayDTO } from '@dtos/HistoryByDayDTO';
import { Loading } from '@components/Loading';

export function History() {
   const [isLoading, setIsLoading] = useState(true);
   const [exercises, setExercises] = useState<HistoryByDayDTO[]>([]);

   const toast = useToast();

   async function fetchHistory() {
      try {
         setIsLoading(true);
         const respose = await api.get('/history');
         setExercises(respose.data);
      } catch (error) {
         const isAppError = error instanceof AppError;
         const title = isAppError
            ? error.message
            : 'Não foi possível carregar o histórico.';

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

   useFocusEffect(
      useCallback(() => {
         fetchHistory();
      }, []),
   );

   return (
      <VStack flex={1}>
         <ScreenHeader title="Histórico de Exercícios" />

         {isLoading ? (
            <Loading />
         ) : (
            <SectionList
               sections={exercises}
               keyExtractor={(item) => item.id}
               renderItem={({ item }) => <HistoryCard data={item} />}
               renderSectionHeader={({ section }) => (
                  <Heading
                     color="$gray200"
                     fontSize="$md"
                     mt="$10"
                     mb="$3"
                     fontFamily="$heading"
                  >
                     {section.title}
                  </Heading>
               )}
               style={{ paddingHorizontal: 32 }}
               ListEmptyComponent={() => (
                  <Text color="$gray100" textAlign="center">
                     Não há exercícios registrados ainda. {'\n'} Vamos fazer
                     exercícios hoje?
                  </Text>
               )}
               contentContainerStyle={
                  exercises.length === 0 && {
                     flex: 1,
                     justifyContent: 'center',
                  }
               }
               showsVerticalScrollIndicator={false}
            />
         )}
      </VStack>
   );
}
