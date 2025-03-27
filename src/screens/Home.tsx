import { useState } from 'react';
import { FlatList } from 'react-native';
import { HStack, VStack, Text, Heading } from '@gluestack-ui/themed';
import { HomeHeader } from '@components/HomeHeader';
import { Group } from '@components/Group';

export function Home() {
   const [groups, setGroups] = useState([
      'Costas',
      'Bíceps',
      'Tríceps',
      'Ombro',
   ]);

   const [groupSelected, setGroupSelected] = useState('costa');

   return (
      <VStack flex={1}>
         <HomeHeader />

         <FlatList
            data={groups}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
               <Group
                  name={item}
                  isActive={groupSelected === item}
                  onPress={() => setGroupSelected(item)}
               />
            )}
            horizontal
            showsHorizontalScrollIndicator
            contentContainerStyle={{ paddingHorizontal: 32 }}
            style={{ marginVertical: 40, maxHeight: 44, minHeight: 44 }}
         />

         <VStack px="$8">
            <HStack justifyContent="space-between" mb="$5">
               <Heading color="$gray200" fontSize="$md" fontFamily="$heading">
                  Exercícios
               </Heading>

               <Text color="$gray200" fontSize="$sm" fontFamily="$body">
                  4
               </Text>
            </HStack>
         </VStack>
      </VStack>
   );
}
