import { View, StyleSheet, Image } from '@react-pdf/renderer';

export function Watermark() {

  return (
    <View
      style={{ position: 'absolute', right: -19, top: -22, zIndex: -10 }}
      fixed
    >
      <Image src={"@/subtle-prism.svg"} />
    </View>
  );
}