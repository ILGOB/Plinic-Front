import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Navigation } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/navigation/navigation.min.css';
import Thumbnail from '../thumbnail/Thumbnail';
import data from '../post/dummyData';

function PlaylistSwipe() {
  const playlists = data;
  const [swiper, setSwiper] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentItem, setCurrentItem] = useState(data[currentIndex]);

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
    onSlideChange: e => {
      setCurrentIndex(e.activeIndex);
      setCurrentItem(data[e.activeIndex]);
    },
  };

  return (
    <Box>
      <Swiper {...swiperParams} ref={setSwiper}>
        {playlists.map(playlist => (
          <SwiperSlide key={playlist.id}>
            <Item>
              <Shadow>
                <Thumbnail img={playlist.thumbnail} size={140} />
              </Shadow>
              <Title>{playlist.title}</Title>
              <div>장르</div>
            </Item>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default PlaylistSwipe;

const NAVY = ({ theme }) => theme.color.navy;
const CENTER = ({ theme }) => theme.align.flexCenter;
const CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;

const FadeIn = isIn => keyframes`
  0% {
    opacity: ${isIn ? 0 : 1};
  }
  100% {
    opacity: ${isIn ? 1 : 0};
  }
`;

const Item = styled.div`
  width: 140px;
  height: 202px;
  ${CENTER_COLUMN};
  gap: 12px;
  user-select: none;
  cursor: pointer;
`;

const Shadow = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: 10px;
`;

const Title = styled.div`
  ${({ theme }) => theme.font.size['16']}
`;

const Box = styled.div`
  width: 500px;
  display: flex;
  align-items: center;

  .swiper-container-coverflow {
    width: 500px;
    top: 15px;
    right: 0px;
    overflow: visible;
  }

  .swiper-wrapper {
    width: 500px;
    align-self: center;
  }

  .swiper-slide {
    width: fit-content;
    height: fit-content;
    animation: ${FadeIn(false)} 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }

  .swiper-slide-prev,
  .swiper-slide-active,
  .swiper-slide-next {
    animation: ${FadeIn(true)} 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }

  .swiper-slide-active {
    ${Shadow} {
      box-shadow: 0 0 15px ${NAVY};
    }

    ${Item} {
      ${({ theme }) => theme.font.weight['bold']};
    }
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
