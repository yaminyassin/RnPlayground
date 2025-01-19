import {useNavigation} from '@react-navigation/native';
import {Button, ScrollView, View, useWindowDimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React from 'react';
import {AnimatedCard} from '../components/AnimatedCard';
import {PATHS, Routes} from '../Navigation';

export const Dashboard = () => {
  const nav = useNavigation<Routes>();
  const {width} = useWindowDimensions();

  return (
    <SafeAreaView style={{flex: 1, paddingHorizontal: 16}}>
      <ScrollView style={{flex: 1}} contentContainerStyle={{gap: 8}}>
        <AnimatedCard width={width - 32} height={185} r={16} />
        <View
          style={{
            borderRadius: 16,
            paddingVertical: 4,
            backgroundColor: 'darkcyan',
          }}>
          <Button
            color="white"
            title="Go to Accounts"
            onPress={() => {
              nav.navigate(PATHS.ACCOUNTS);
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
