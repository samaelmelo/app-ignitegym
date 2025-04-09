import { useState } from 'react';
import { SectionList } from 'react-native';
import { HistoryCard } from '@components/HistoryCard';
import { ScreenHeader } from '@components/ScreenHeader';
import { Heading, VStack, Text } from '@gluestack-ui/themed';

export function History() {
   const [exercises, setExercises] = useState([
      {
         title: '22.07.24',
         data: ['Puxada frontal', 'Remada unilateral'],
      },
      {
         title: '23.07.24',
         data: ['Puxada fronta'],
      },
   ]);

   return (
      <VStack flex={1}>
         <ScreenHeader title="Histórico de Exercícios" />

         <SectionList
            sections={exercises}
            keyExtractor={(item) => item}
            renderItem={({ item }) => <HistoryCard />}
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
               <Text color="$gray100" textAlign='center'>
                  Não há exercícios registrados ainda. {"\n"} Vamos fazer exercícios
                  hoje?
               </Text>
            )}
            contentContainerStyle={
               exercises.length === 0 && {flex: 1, justifyContent: 'center'}
            }
            showsVerticalScrollIndicator={false}
         />
      </VStack>
   );
}
