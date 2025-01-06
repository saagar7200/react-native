import { View, StyleSheet } from 'react-native';
 import { Image } from 'expo-image'; 
import ImageViewer from '@/app-example/components/ImageViewer';


const PlaceholderImage = require('@/assets/images/background-image.jpeg');


export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',

  },
  imageContainer: {
    flex: 1,
    marginTop: 40,
  },
});
