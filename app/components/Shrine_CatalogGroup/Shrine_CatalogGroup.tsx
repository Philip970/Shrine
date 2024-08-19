import { ScrollView, StyleSheet, View } from "react-native";

import { CatalogItemVariant } from "../Shrine_CatalogItem/Shrine_CatalogItem";
import Shrine_CatalogItem from "../Shrine_CatalogItem";

import { Dimensions, Spacings } from "../../config/palettes";
import { ItemData } from "../../data";

type Props = {
  data: ItemData[];
};

const Shrine_CatalogGroup = ({ data }: Props) => {
  return (
    <ScrollView style={styles.container} horizontal>
      <View style={styles.leftContainer}>
        {data[1] && (
          <Shrine_CatalogItem
            style={styles.topLeftItem}
            variant={CatalogItemVariant.TOP_LEFT}
            data={data[1]}
            onPress={() => {}}
            onAddToCart={() => {}}
          />
        )}
        <Shrine_CatalogItem
          style={styles.bottomLeftItem}
          variant={CatalogItemVariant.BOTTOM_LEFT}
          data={data[0]}
          onPress={() => {}}
          onAddToCart={() => {}}
        />
      </View>
      {data[2] && (
        <Shrine_CatalogItem
          style={styles.rightItem}
          variant={CatalogItemVariant.RIGHT}
          data={data[2]}
          onPress={() => {}}
          onAddToCart={() => {}}
        />
      )}
    </ScrollView>
  );
};

export default Shrine_CatalogGroup;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacings.sm,
  },
  leftContainer: {
    width: Dimensions.xxl + 2 * Spacings.md,
  },
  bottomLeftItem: {
    alignSelf: "flex-start",
  },
  topLeftItem: {
    alignSelf: "flex-end",
    marginBottom: Spacings.lg,
  },
  rightItem: {
    marginTop: Dimensions.xxl,
    marginHorizontal: Dimensions.xs,
  },
});
