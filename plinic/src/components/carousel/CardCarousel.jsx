import React, { useState } from 'react';
import styled from 'styled-components';

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
    return slideItemTitle;
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
            transform: `translateX(${-185 * currentIndex}px)`,
            transition: slideTransition,
          }}
        >
          {slides.map((slide, slideIndex) => {
            const itemIndex = getItemIndex(slideIndex);
            const genre = getSlideItem(itemIndex);
            return <SlideItem key={slideIndex}>{genre}</SlideItem>;
          })}
        </SlideTrack>
      </SlideList>
    </SlideBox>
  );
}

export default CardCarousel;

const NAVY = ({ theme }) => theme.color.navy;
const BOLD = ({ theme }) => theme.font.weight['bold'];
const BOLD_TEXT = [({ theme }) => theme.font.size['30'], BOLD];
const CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;

const SlideBox = styled.div`
  ${CENTER_COLUMN}
  gap: 25px;
  width: 960px;
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
  color: ${NAVY};
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  width: 960px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const SlideList = styled.div`
  width: calc(160px * 5 + 100px);
  overflow: hidden;
`;

const SlideTrack = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  width: fit-content;
`;

const SlideItem = styled.div`
  min-width: 160px;
  height: 160px;
  border: 1px solid #000;
`;
