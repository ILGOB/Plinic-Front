import React, { useState } from 'react';
import styled from 'styled-components';
import Thumbnail from '../thumbnail/Thumbnail';

function CardCarousel({ label, data }) {
  const items = data;
  const itemSize = items.length;
  const addedItems = 10;
  let slides = setSlides();
  const [currentIndex, setCurrentIndex] = useState(10);
  const [slideTransition, setTransition] = useState('');
  const [isTransition, setIsTransition] = useState(false);
  const transitionTime = 300;
  const transitionStyle = `transform ${transitionTime}ms ease 0s`;

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
    setIsTransition(true);
    handleSwipe(direction);
  }

  function handleTransitionEnd() {
    setIsTransition(false);
  }

  console.log(currentIndex);

  return (
    <SlideBox>
      <SlideHeader>
        <div>{label} 둘러보기</div>
        <ButtonContainer>
          <Button onClick={isTransition ? null : () => handleOnClick(-1)}>〈</Button>
          <Button onClick={isTransition ? null : () => handleOnClick(1)}>〉</Button>
        </ButtonContainer>
      </SlideHeader>
      <SlideList>
        <SlideTrack
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(${-247 * (currentIndex + 1)}px)`,
            transition: slideTransition,
          }}
        >
          {slides.map((slide, slideIndex) => {
            const itemIndex = getItemIndex(slideIndex);
            const [genre, img] = getSlideItem(itemIndex);
            return (
              <SlideItem key={slideIndex}>
                <Thumbnail img={img} />
                <DimThumbnail />
                <Label>{genre}</Label>
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
  ${BOLD_TEXT};
`;

const Button = styled.button`
  width: 40px;
  height: 40px;
  margin-left: 20px;
  background: transparent;
  border: 1px solid ${NAVY};
  border-radius: 20px;
  text-align: center;
  line-height: 40px;
  text-decoration: none;
  color: ${NAVY};
  ${MEDIUM_TEXT};
  ${BOLD};
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  ${CENTER}
`;

const SlideList = styled.div`
  width: calc(222px * 5 + 100px);
  overflow: hidden;
`;

const SlideTrack = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  width: fit-content;
`;

const SlideItem = styled.div`
  position: relative;
  ${CENTER_COLUMN}
  cursor: pointer;
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
