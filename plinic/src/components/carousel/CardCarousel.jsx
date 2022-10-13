import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faMusic } from '@fortawesome/free-solid-svg-icons';
import Thumbnail from '../thumbnail/Thumbnail';
import Post from '../post/Post';

function CardCarousel({ label, data, loop, detailLink }) {
  const items = data;
  const itemSize = items.length;
  const addedItems = 10;
  let slides = loop ? setSlides() : items;
  const [currentIndex, setCurrentIndex] = useState(loop ? 10 : 1);
  const [slideTransition, setTransition] = useState('');
  const [isTransition, setIsTransition] = useState(false);
  const transitionTime = 300;
  const transitionStyle = `transform ${transitionTime}ms ease 0s`;

  const explore = (genre, img) => {
    return (
      <Link to={`/explore/${genre}`}>
        <Thumbnail img={img} />
        <DimThumbnail />
        <Label>{genre}</Label>
      </Link>
    );
  };

  const searchResult = (label, slide) => {
    let type = label === '유저' ? 'user' : 'post';

    return (
      <Link to={`/${type}/${slide.id}`}>
        {type === 'user' ? (
          <User>
            <UserProfile image={slide.profile_pic} />
            <div>
              <UserNickname>{slide.nickname}</UserNickname>
              <div>
                <FontAwesomeIcon icon={faMusic} /> {slide.playlists}
              </div>
            </div>
          </User>
        ) : (
          <Post
            thumbnail={slide.thumbnail}
            title={slide.title}
            writer={slide.writer}
            likes={slide.like}
            likeState={slide.likeState}
          />
        )}
      </Link>
    );
  };

  function setSlides() {
    let addedFront = [];
    let addedLast = [];
    var index = 0;

    while (index < addedItems) {
      addedLast.push(items[index % items.length]);
      addedFront.unshift(items[items.length - 1 - (index % items.length)]);
      index++;
    }
    return [...addedFront, ...items, ...addedLast];
  }

  function getItemIndex(index) {
    index -= addedItems;
    if (index < 1) {
      index += itemSize;
    } else if (index > itemSize) {
      index -= itemSize;
    }
    return index;
  }

  function getSlideItem(itemIndex) {
    const slideItem = items.filter(item => itemIndex === item.id);
    const slideItemTitle = slideItem.map(item => item.title).join();
    const slideItemImage = slideItem.map(item => item.thumbnail);
    return [slideItemTitle, slideItemImage];
  }

  function replaceSlide(index) {
    setTimeout(() => {
      setTransition('');
      setCurrentIndex(index);
      setIsTransition(false);
    }, transitionTime);
  }

  function handleSwipe(direction) {
    let index = currentIndex + direction;
    setCurrentIndex(index);
    if (index < addedItems) {
      index += itemSize;
      replaceSlide(index);
    } else if (index >= itemSize + addedItems) {
      index -= itemSize;
      replaceSlide(index);
    }
    setTransition(transitionStyle);
  }

  function handleOnClick(direction) {
    if (loop) {
      setIsTransition(true);
      handleSwipe(direction);
    } else {
      let index = currentIndex + direction;
      if (index === itemSize - 3 || index === 0 || itemSize <= 5) {
        return;
      } else {
        setIsTransition(true);
        setCurrentIndex(index);
        setTransition(transitionStyle);
      }
    }
  }

  function handleTransitionEnd() {
    setIsTransition(false);
  }

  return (
    <SlideBox>
      <SlideHeader>
        <div>
          <div>
            {label}
            {(label === '장르' || label === '분위기') && ' 둘러보기'}
          </div>
          {!(label === '장르' || label === '분위기') && (
            <Link to={detailLink}>
              더보기 <FontAwesomeIcon icon={faArrowRightLong} />
            </Link>
          )}
        </div>
        <ButtonContainer>
          <Button
            onClick={isTransition ? null : () => handleOnClick(-1)}
            disabled={!loop && (currentIndex === 1 || itemSize <= 5)}
          >
            〈
          </Button>
          <Button
            onClick={isTransition ? null : () => handleOnClick(1)}
            disabled={!loop && (currentIndex === itemSize - 4 || itemSize <= 5)}
          >
            〉
          </Button>
        </ButtonContainer>
      </SlideHeader>
      <SlideList>
        <SlideTrack
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(${-242 * (currentIndex - 1)}px)`,
            transition: slideTransition,
          }}
        >
          {slides.map((slide, slideIndex) => {
            const itemIndex = getItemIndex(slideIndex);
            const [genre, img] = getSlideItem(itemIndex);
            return (
              <SlideItem key={slideIndex}>
                {label === '장르' || label === '분위기' ? explore(genre, img) : searchResult(label, slide)}
              </SlideItem>
            );
          })}
        </SlideTrack>
      </SlideList>
    </SlideBox>
  );
}

export default CardCarousel;

const NAVY = ({ theme }) => theme.color.navy;
const DISABLED = ({ theme }) => theme.color.disabled;
const BOLD = ({ theme }) => theme.font.weight['bold'];
const MEDIUM_TEXT = ({ theme }) => theme.font.size['16'];
const BOLD_TEXT = [({ theme }) => theme.font.size['30'], BOLD];
const CENTER = ({ theme }) => theme.align.flexCenter;
const CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;

const SlideBox = styled.div`
  ${CENTER_COLUMN}
  gap: 25px;
  width: 100%;
  height: fit-content;
`;

const SlideHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: ${NAVY};

  & > div {
    ${CENTER};
    justify-content: flex-start;
    gap: 20px;

    & > div:first-child {
      ${BOLD_TEXT};
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  }
`;

const Button = styled.button`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  background: transparent;
  border: 1px solid ${props => (props.disabled ? DISABLED : NAVY)};
  border-radius: 20px;
  text-align: center;
  line-height: 40px;
  text-decoration: none;
  color: ${props => (props.disabled ? DISABLED : NAVY)};
  ${MEDIUM_TEXT};
  ${BOLD};
  cursor: ${props => props.disabled || 'pointer'};
`;

const ButtonContainer = styled.div`
  ${CENTER}
`;

const SlideList = styled.div`
  width: calc(222px * 5 + 85px);
  overflow: hidden;
`;

const SlideTrack = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: fit-content;
`;

const SlideItem = styled.div`
  position: relative;
  ${CENTER_COLUMN}
  cursor: pointer;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const DimThumbnail = styled.div`
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  width: 222px;
  height: 222px;
  border-radius: 10px;
`;

const Label = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  ${({ theme }) => theme.font.size['20']};
  color: ${({ theme }) => theme.color.white};
  z-index: 10;
`;

const User = styled.div`
  width: 222px;
  height: fit-content;
  ${CENTER_COLUMN};
  gap: 20px;

  & > div:last-child {
    ${CENTER_COLUMN};
    gap: 10px;

    & > div:last-child {
      ${CENTER};
      align-items: flex-start;
      ${({ theme }) => theme.font.size['16']};
      line-height: 18px;
      color: #555;
      gap: 8px;
    }
  }
`;

const UserProfile = styled.div`
  background-color: gray;
  /* background: url(${props => props.image}) no-repeat center/cover; */
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const UserNickname = styled.div`
  ${({ theme }) => theme.font.size['20']};
`;
