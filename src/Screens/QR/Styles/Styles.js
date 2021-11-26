import { StyleSheet } from "react-native";
const SCREEN_WIDTH = Dimensions.get("window").width;
const rectDimensions = SCREEN_WIDTH * 0.65; // this is equivalent to 255 from a 393 device width
const rectBorderWidth = SCREEN_WIDTH * 0.003; // this is equivalent to 2 from a 393 device width
const rectBorderColor = "#fff";
const overlayColor = "rgba(0,0,0,0.6)"; // this gives us a black color with a 50% transparency

const scanBarWidth = SCREEN_WIDTH * 0.4; // this is equivalent to 180 from a 393 device width
const scanBarHeight = SCREEN_WIDTH * 0.003; //this is equivalent to 1 from a 393 device width
const scanBarColor = "red";

export const QRModuleStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  rectangleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },

  rectangle: {
    height: rectDimensions,
    width: rectDimensions,
    borderWidth: rectBorderWidth,
    borderColor: rectBorderColor,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },

  topOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
    justifyContent: "center",
    alignItems: "center",
  },

  bottomOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
    paddingBottom: SCREEN_WIDTH * 0.25,
    justifyContent: "center",
    alignItems: "center",
  },

  leftAndRightOverlay: {
    height: SCREEN_WIDTH * 0.65,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
  },

  scanBar: {
    width: scanBarWidth,
    height: scanBarHeight,
    backgroundColor: scanBarColor,
  },
});
