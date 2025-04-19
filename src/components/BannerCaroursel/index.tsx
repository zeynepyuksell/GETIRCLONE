import React, { useState, useRef } from "react";
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  ViewToken,
} from "react-native";

const { width, height } = Dimensions.get("window");

const BannerCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [banners, setBanners] = useState<string[]>([]);

  const onViewRef = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <FlatList
      data={banners}
      renderItem={({ item }) => (
        <Image
          source={{ uri: item }}
          style={{
            width: width,
            height: height * 0.24,
            resizeMode: "stretch",
          }}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={width}
      snapToAlignment={"center"}
      decelerationRate={"fast"}
      viewabilityConfig={viewConfigRef.current}
      onViewableItemsChanged={onViewRef.current}
      testID="banner-carousel"
    />
  );
};

export default BannerCarousel;
