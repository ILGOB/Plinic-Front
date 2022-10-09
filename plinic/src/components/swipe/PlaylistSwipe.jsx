import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
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
    slideToClickedSlide: true,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    effect: 'coverflow',
    coverflowEffect: {
      scale: 1,
      rotate: 0,
      depth: 100,
      stretch: 30,
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

const FadeIn = isIn => keyframes`
  0% {
    opacity: ${isIn ? 0 : 1};
  }
  100% {
    opacity: ${isIn ? 1 : 0};
  }
`;

const Box = styled.div`
  width: 500px;
  display: flex;
  align-items: center;

  .swiper-container-coverflow {
    width: 500px;
    right: 0px;
  }

  .swiper-wrapper {
    width: 500px;
    align-self: center;
  }

  .swiper-slide {
    width: 140px;
    height: 202px;
    animation: ${FadeIn(false)} 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }

  .swiper-slide-prev,
  .swiper-slide-active,
  .swiper-slide-next {
    animation: ${FadeIn(true)} 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }

  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    width: 40px;
    height: 40px;
    background: #fff;
    border: 1px solid ${NAVY};
    border-radius: 20px;
    color: ${NAVY};
    ${CENTER};
  }

  .swiper-button-prev {
    left: 0px;
  }

  .swiper-button-next {
    right: 20px;
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
