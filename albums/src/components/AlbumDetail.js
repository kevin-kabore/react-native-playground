import React from 'react';

import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => (
  <Card>
    <CardSection>
      <View>
        <Image />
      </View>
      <View style={styles.textContainerStyle}>
        <Text>{album.title}</Text>
        <Text>{album.artist}</Text>
      </View>
    </CardSection>
  </Card>
);

const styles = {
  textContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
};

export default AlbumDetail;
