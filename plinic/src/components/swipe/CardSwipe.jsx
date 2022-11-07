import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  // const [isClicked, setIsClicked] = useState(false);
  let isClicked = false;
  const [swiper, setSwiper] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaylistModal, setIsPlaylistModal] = useState(false);
  const [playlistData, setPlaylistData] = useState({});

  SwiperCore.use([EffectCoverflow, Scrollbar]);

  const swiperParams = {
    onBeforeInit: swiper => {
      setCurrentIndex(swiper.activeIndex);
    },
    slidesPerView: 3,
    slideToClickedSlide: true,
    centeredSlides: true,
    speed: 400,
    effect: 'coverflow',
    coverflowEffect: {
      scale: 1,
      rotate: 0,
      depth: 110,
      stretch: 0,
      modifier: 2,
      slideShadows: false,
    },
    scrollbar: { dragsize: 'auto', draggable: true },
    onSwiper: swiper => setSwiper(swiper),
    onSlideChange: e => {
      setCurrentIndex(e.activeIndex);
      isClicked = false;
    },
    onTap: () => {
      isClicked = true;
    },
    onSliderMove: () => {
      isClicked = false;
    },
  };

  const handlePlaylistModal = () => {
    if (isClicked) {
      setIsPlaylistModal(!isPlaylistModal);
    } else {
      isClicked = true;
    }
  };

  const clickedCloseButton = () => {
    handlePlaylistModal();
    console.log('clicked close button');
  };

  const clickedCreateButton = () => {
    if (playlistData.choice === '' || playlistData.playlistNum === 0) {
      alert('모든 항목을 선택해주세요');
    } else {
      console.log('clicked create button');
      console.log('playlistData :>> ', playlistData);
      handlePlaylistModal();
      navigate(`/playlist/${1}`, { state: { playlistData: playlistData } });
    }
  };

  const linkTo = link => {
    if (isClicked) {
      navigate(link);
    } else {
      isClicked = true;
    }
  };

  return (
    <Box>
      <ModalPortal>
        {isPlaylistModal && (
          <Modal
            leftOnClick={clickedCloseButton}
            rightOnClick={clickedCreateButton}
            usedFor={'playlist'}
            setPlaylistData={setPlaylistData}
          />
        )}
      </ModalPortal>
      <Swiper {...swiperParams} ref={setSwiper}>
        {data &&
          data.map((cardData, index) => (
            <SwiperSlide key={cardData.id} onClick={() => linkTo(`/playlist/${index}`)}>
              <Card thumbnail={cardData.thumbnail} title={cardData.title} playlistNum={cardData.playlistNum} />
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

  .swiper-container {
    position: relative;
    width: 550px;
    height: 400px;
  }

  .swiper-wrapper {
    position: absolute;
    top: 0;
    left: -30%;
    padding: 20px 0;
    margin-bottom: 20px;
  }

  .swiper-slide {
    cursor: pointer;

    & > a > div,
    & > div {
      box-shadow: 14px 11px 10px rgba(0, 0, 0, 0.25);
    }
  }

  .swiper-slide.swiper-slide-prev {
    visibility: hidden;
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
    width: 550px;
    height: 13px;
    border-radius: 0px;
    bottom: 0;

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
  width: fit-content;
  height: fit-content;
`;
