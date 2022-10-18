import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as noLike, faBookmark as noBookmark } from '@fortawesome/free-regular-svg-icons';
import { faHeart as Like, faBookmark as Bookmark } from '@fortawesome/free-solid-svg-icons';

function TextIconBtn({ state, count, name }) {
  const [likedState, setLikedState] = useState({
    state: state,
    count: count,
  });
  const [scrapedState, setScrapedState] = useState({
    state: state,
    count: count,
  });

  const [isMouseEnter, setIsMouseEnter] = useState(false);

  const LikedButton = (state, count, name) => {
    const onClickLikedBtn = e => {
      setLikedState({
        ...likedState,
        state: !likedState.state,
        count: likedState.state === true ? likedState.count - 1 : likedState.count + 1,
      });
    };

    return (
      <Wrapper onClick={onClickLikedBtn} name={name} value={likedState.count}>
        <Icon icon={likedState.state ? Like : noLike} />
        {likedState.count}
      </Wrapper>
    );
  };

  const ScrapedButton = (state, count, name) => {
    const onClickScrapedBtn = e => {
      setScrapedState({
        ...scrapedState,
        state: !scrapedState.state,
        count: scrapedState.state === true ? scrapedState.count - 1 : scrapedState.count + 1,
      });
    };

    const onMouseEnter = () => {
      setIsMouseEnter(true);
    };

    const onMouseLeave = () => {
      setIsMouseEnter(false);
    };

    return (
      <Wrapper
        onClick={onClickScrapedBtn}
        name={name}
        value={scrapedState.count}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        isMouseEnter={isMouseEnter}
      >
        {isMouseEnter && <Tooltip>내 보관함에 플레이리스트 담기</Tooltip>}
        <Icon icon={scrapedState.state ? Bookmark : noBookmark} />
        {scrapedState.count}
      </Wrapper>
    );
  };

  {
    return name === 'like' ? LikedButton(state, count, name) : ScrapedButton(state, count, name);
  }
}

export default TextIconBtn;

const NAVY = ({ theme }) => theme.color.navy;
const WHITE = ({ theme }) => theme.color.white;
const MINT = ({ theme }) => theme.color.mint;

const Wrapper = styled.button`
  width: 70px;
  height: 30px;
  border: solid 1.5px ${NAVY};
  border-radius: 15px;
  background-color: ${WHITE};
  ${({ theme }) => theme.align.flexCenter};
  color: ${NAVY};
  ${({ theme }) => theme.font.weight.thick};
  ${({ theme }) => theme.font.size[14]};
  cursor: pointer;
  ${({ isMouseEnter }) =>
    isMouseEnter &&
    `
    position: relative;
    `}
`;

const Tooltip = styled.div`
  width: 204px;
  height: 40px;
  border-radius: 10px;
  position: absolute;
  top: -60px;
  background-color: ${MINT};
  ${({ theme }) => theme.align.flexCenterColumn};
  color: ${WHITE};
  ${({ theme }) => theme.font.size[14]};
  &:after {
    border-top: 0px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid ${MINT};
    content: '';
    position: absolute;
    top: 38px;
    transform: rotate(180deg);
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 14px;
  margin-right: 7px;
`;
