import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";

import { Dimensions, Spacings } from "../../config/palettes";
import { getVendorRes, ItemData } from "../../data";

export enum CatalogItemVariant {
  TOP_LEFT = "TOP_LEFT",
  BOTTOM_LEFT = "BOTTOM_LEFT",
  RIGHT = "RIGHT",
}

type Props = {
  variant: CatalogItemVariant;
  data: ItemData;
  style?: ViewStyle;
  onPress: () => void;
  onAddToCart: () => void;
};

const Shrine_CatalogItem = ({
  variant,
  data,
  style,
  onPress,
  onAddToCart,
}: Props) => {
  const HEIGHT =
    variant === CatalogItemVariant.TOP_LEFT ||
    variant === CatalogItemVariant.BOTTOM_LEFT
      ? Dimensions.xxl + Dimensions.xxxs
      : Dimensions.xxxl;

  return (
    <View style={[styles.container, style]}>
      <Pressable onPress={onPress}>
        <ImageBackground
          style={[
            styles.image,
            {
              height: HEIGHT,
            },
          ]}
          resizeMode="cover"
          source={data.photo}
        >
          <View style={styles.brandContainer}>
            {getVendorRes(data.vendor)()}
          </View>
        </ImageBackground>
      </Pressable>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.price}>${data.price}</Text>
    </View>
  );
};

export default Shrine_CatalogItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  brandContainer: {
    position: "absolute",
    bottom: -10,
    alignSelf: "center",
  },
  image: {
    width: Dimensions.xxl,
  },
  title: {
    paddingTop: Spacings.md,
  },
  price: {
    paddingTop: Spacings.xxs,
  },
});
