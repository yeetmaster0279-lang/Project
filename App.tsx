import React, { useCallback } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import MenuList from './src/components/MenuList';
import { useMenu } from './src/hooks/useMenu';

const SAMPLE = Array.from({ length: 40 }).map((_, i) => ({
  id: String(i + 1),
  name: `Dish ${i + 1}`,
  description: `A delicious sample dish ${i + 1}`,
  price: (8 + (i % 12)) + 0.99,
  // image: 'https://placekitten.com/200/200'  // add if you want to test images
}));

export default function App() {
  const { items, setAll, update, add, remove } = useMenu(SAMPLE);

  // example handler - stable reference
  const onPressItem = useCallback((id: string) => {
    // quick example: update price to show a change
    update(id, { price: Math.round((Math.random() * 20 + 1) * 100) / 100 });
  }, [update]);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <MenuList items={items} onPressItem={onPressItem} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f8f8f8' },
});