import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Dimensions } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import Icon from "react-native-vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";
import { QRModuleStyles } from "./Styles/Styles";

const SCREEN_WIDTH = Dimensions.get("window").width;
const iconScanColor = "#fff";

export default function QRScreen() {
  const [hasPermission, setHasPermission] = useState(null); 
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  const makeSlideOutTranslation = (translationType, fromValue) => {
    return {
      from: {
        [translationType]: SCREEN_WIDTH * -0.18,
      },
      to: {
        [translationType]: fromValue,
      },
    };
  };
  return (
    <View style={QRModuleStyles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={QRModuleStyles.rectangleContainer}>
        <View style={QRModuleStyles.topOverlay}>
          <Text style={{ fontSize: 30, color: "white" }}>QR CODE SCANNER</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={QRModuleStyles.leftAndRightOverlay} />
          <View style={QRModuleStyles.rectangle}>
            <Icon
              name="scan-outline"
              size={SCREEN_WIDTH * 0.69}
              color={iconScanColor}
            />
            <Animatable.View
              style={QRModuleStyles.scanBar}
              direction="alternate-reverse"
              iterationCount="infinite"
              duration={1700}
              easing="linear"
              animation={makeSlideOutTranslation(
                "translateY",
                SCREEN_WIDTH * -0.54
              )}
            />
          </View>
          <View style={QRModuleStyles.leftAndRightOverlay} />
        </View>
        <View style={QRModuleStyles.bottomOverlay}>
          {scanned && (
            <Button
              title={"Tap to Scan Again"}
              style={{ fontSize: 30, color: "white" }}
              onPress={() => setScanned(false)}
            />
          )}
        </View>
      </View>
    </View>
  );
}
