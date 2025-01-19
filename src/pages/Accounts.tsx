import React from 'react';
import {Button, ScrollView, useWindowDimensions, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AnimatedCard} from '../components/AnimatedCard';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../Navigation';

export const Accounts = () => {
  const nav = useNavigation<Routes>();
  const {width} = useWindowDimensions();

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}} contentContainerStyle={{gap: 8}}>
        <AnimatedCard width={width} height={250} r={0} />
        <View
          style={{
            borderRadius: 16,
            paddingVertical: 4,
            backgroundColor: 'darkcyan',
          }}>
          <Button
            color="white"
            title="Go back"
            onPress={() => {
              nav.goBack();
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
