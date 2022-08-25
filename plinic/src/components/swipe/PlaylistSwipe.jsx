import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Navigation } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/navigation/navigation.min.css';
import { posts } from '../pagination/posts';

function PlaylistSwipe() {
  const playlists = posts;
  const [swiper, setSwiper] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  SwiperCore.use([EffectCoverflow, Navigation]);

  const swiperParams = {
    navigation: true,
    onBeforeInit: swiper => {
      swiper.activeIndex = currentIndex;
      swiper.navigation.update();
    },
    slidesPerView: 3,
    centeredSlides: true,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    effect: 'coverflow',
    coverflowEffect: {
      scale: 1,
      rotate: 0,
      depth: 100,
      stretch: -3,
      modifier: 2,
      slideShadows: false,
    },
    onSwiper: setSwiper,
    onSlideChange: e => setCurrentIndex(e.activeIndex),
  };

  return (
    <Box>
      <Swiper {...swiperParams} ref={setSwiper}>
        {playlists.map(playlist => (
          <SwiperSlide key={playlist.id}>
            <Item>{playlist.title}</Item>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default PlaylistSwipe;

const NAVY = ({ theme }) => theme.color.navy;
const CENTER = ({ theme }) => theme.align.flexCenter;

const Box = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  .swiper-wrapper {
    width: 500px;
  }

  .swiper-slide {
    width: 140px;
    height: 202px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: 40px;
    height: 40px;
    background: #fff;
    border: 1px solid ${NAVY};
    border-radius: 20px;
    color: ${NAVY};
    ${CENTER}
  }

  .swiper-button-prev::after {
    content: '〈';
    font-size: 20px;
  }
  .swiper-button-next::after {
    content: '〉';
    font-size: 20px;
  }
`;

const Item = styled.div`
  background: gray;
  width: 100%;
  height: 100%;
`;
