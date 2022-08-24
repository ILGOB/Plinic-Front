import React, { useState } from 'react';
import styled from 'styled-components';

function CardCarousel() {
  const items = ['#33a', '#8c9', '#f3e074', '#44a', '#8a0', '#e3f093', '#33a', '#8c9', '#f3e074', '#44a'];
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
    if (index < 0) {
      index += itemSize;
    } else if (index >= itemSize) {
      index -= itemSize;
    }
    return index;
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
    <div>
      <SlideBox>
        <ButtonContainer>
          <Button onClick={isTransition ? null : () => handleOnClick(-1)}>〈</Button>
          <Button onClick={isTransition ? null : () => handleOnClick(1)}>〉</Button>
        </ButtonContainer>
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
              return <SlideItem key={slideIndex} style={{ background: items[itemIndex] }}></SlideItem>;
            })}
          </SlideTrack>
        </SlideList>
      </SlideBox>
    </div>
  );
}

export default CardCarousel;

const NAVY = ({ theme }) => theme.color.navy;
const CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;

const SlideBox = styled.div`
  ${CENTER_COLUMN}
  gap: 25px;
  width: 960px;
  height: fit-content;
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
`;
