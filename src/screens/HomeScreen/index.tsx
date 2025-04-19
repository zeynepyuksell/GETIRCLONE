import React from 'react';
import { ScrollView } from 'react-native';
import HeaderMain from '../../components/HeaderMain';
import BannerCarousel from '../../components/BannerCaroursel';

function Index() {
  return (
    <ScrollView>
      <HeaderMain/>
      <BannerCarousel/>
    </ScrollView>
  );
}

export default Index;
