import { Platform, TextStyle } from "react-native";
import { Colors, FontSizes, FontFamilies } from "./palettes";

const text: TextStyle = {
  color: Colors.surfaceVariant,
  ...Platform.select({
    ios: {
      fontSize: FontSizes.base,
      fontFamily: FontFamilies.avenir,
    },
    android: {
      fontSize: FontSizes.base,
      fontFamily: FontFamilies.roboto,
    },
  }),
};

const defaultStyles = {
  Colors,
  text,
};

export default defaultStyles;
