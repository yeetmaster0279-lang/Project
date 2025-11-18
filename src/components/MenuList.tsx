import React, { useCallback, useMemo } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import MenuItem, { MenuItemType } from './MenuItem';

type Props = {
  items: MenuItemType[];
  onPressItem?: (id: string) => void;
};

const ITEM_HEIGHT = 90; // must match MenuItem style height

const MenuList: React.FC<Props> = ({ items, onPressItem }) => {
  const renderItem = useCallback(
    ({ item }: { item: MenuItemType }) => <MenuItem item={item} onPress={onPressItem} />, 
    [onPressItem]
  );

  const keyExtractor = useCallback((item: MenuItemType) => item.id, []);

  const getItemLayout = useCallback(
    (_data: any, index: number) => ({
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    }),
    []
  );

  const snapshotData = useMemo(() => items, [items]); // stable reference for FlatList

  return (
    <View style={styles.container}>
      <FlatList
        data={snapshotData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={5}
        removeClippedSubviews={true}
        getItemLayout={getItemLayout}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default React.memo(MenuList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});