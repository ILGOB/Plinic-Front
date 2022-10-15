import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Scrollbar } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import Card from '../card/Card';
import ModalPortal from '../modal/ModalPortal';
import Modal from '../modal/Modal';
import data from '../card/dummyData';

function CardSwipe() {
  const [swiper, setSwiper] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaylistModal, setIsPlaylistModal] = useState(false);

  SwiperCore.use([EffectCoverflow, Scrollbar]);

  const swiperParams = {
    onBeforeInit: swiper => {
      swiper.activeIndex = currentIndex;
    },
    slidesPerView: 1,
    centeredSlides: false,
    effect: 'coverflow',
    coverflowEffect: {
      scale: 1,
      rotate: 0,
      depth: 100,
      stretch: 180,
      modifier: 2,
      slideShadows: false,
    },
    scrollbar: { dragsize: 'auto', draggable: true },
    onSwiper: setSwiper,
    onSlideChange: e => setCurrentIndex(e.activeIndex),
  };

  const handlePlaylistModal = () => {
    setIsPlaylistModal(!isPlaylistModal);
  };

  const clickedCloseButton = () => {
    handlePlaylistModal();
  };

  const clickedCreateButton = () => {
    handlePlaylistModal();
  };

  return (
    <Box>
      <ModalPortal>
        {isPlaylistModal && (
          <Modal leftOnClick={clickedCloseButton} rightOnClick={clickedCreateButton} usedFor={'playlist'} />
        )}
      </ModalPortal>
      <Swiper {...swiperParams} ref={setSwiper}>
        {data &&
          data.map((cardData, index) => (
            <SwiperSlide key={cardData.id}>
              <LinkStyled to={`/playlist/${index}`}>
                <Card thumbnail={cardData.thumbnail} title={cardData.title} playlistNum={cardData.playlistNum} />
              </LinkStyled>
            </SwiperSlide>
          ))}
        <SwiperSlide>
          <CreatePlaylistCard onClick={handlePlaylistModal}>
            <div>
              <PlusIcon icon={faPlus} />
            </div>
          </CreatePlaylistCard>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}

export default CardSwipe;

const NAVY = ({ theme }) => theme.color.navy;
const WHITE = ({ theme }) => theme.color.white;
const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;

const Box = styled.div`
  overflow: hidden;

  .swiper-wrapper {
    width: 550px;
    padding: 20px 0;
    margin-bottom: 20px;
  }

  .swiper-slide {
    & > div {
      box-shadow: 14px 11px 10px rgba(0, 0, 0, 0.25);
    }
  }

  .swiper-slide.swiper-slide-next {
    & ~ .swiper-slide {
      visibility: hidden;
    }
    & + .swiper-slide {
      visibility: visible;
    }
  }

  .swiper-scrollbar {
    background: #d9d9d9;
    height: 13px;
    border-radius: 0px;

    .swiper-scrollbar-drag {
      background: #22577a;
      border-radius: 0px;
    }
  }
`;

const CreatePlaylistCard = styled.div`
  width: 224px;
  height: 322px;
  border-radius: 23px;
  background-color: ${NAVY};
  ${FLEX_CENTER_COLUMN};
  cursor: pointer;

  div {
    width: 70px;
    height: 70px;
    border-radius: 35px;
    background: rgba(255, 255, 255, 0.2);
    ${FLEX_CENTER_COLUMN};
  }
`;

const PlusIcon = styled(FontAwesomeIcon)`
  font-size: 40px;
  color: ${WHITE};
`;

const LinkStyled = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
