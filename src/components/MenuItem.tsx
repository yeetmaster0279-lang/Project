import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export type MenuItemType = {
  id: string;
  name: string;
  description?: string;
  price?: number;
  image?: string; // optional image URI
};

type Props = {
  item: MenuItemType;
  onPress?: (id: string) => void;
};

const MenuItem: React.FC<Props> = ({ item, onPress }) => {
  const handlePress = () => {
    onPress?.(item.id);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container} activeOpacity={0.8}>
      {item.image ? (
        <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />
      ) : (
        <View style={styles.placeholder} />
      )}
      <View style={styles.textWrap}>
        <Text numberOfLines={1} style={styles.name}>{item.name}</Text>
        {item.description ? <Text numberOfLines={2} style={styles.desc}>{item.description}</Text> : null}
        {typeof item.price === 'number' ? <Text style={styles.price}>${item.price.toFixed(2)}</Text> : null}
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(MenuItem);

const IMAGE_SIZE = 64;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#e6e6e6',
    height: 90, // fixed height to enable getItemLayout
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: '#f2f2f2',
  },
  placeholder: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: '#f2f2f2',
  },
  textWrap: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
  },
  desc: {
    fontSize: 13,
    color: '#555',
    marginTop: 4,
  },
  price: {
    fontSize: 13,
    color: '#333',
    marginTop: 6,
    fontWeight: '500',
  },
});
