import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as noLike } from '@fortawesome/free-regular-svg-icons';
import { faHeart as Like } from '@fortawesome/free-solid-svg-icons';

function TextIconBtn() {
  const [likedCount, setLikedCount] = useState(0);
  const [likedBtnActive, setLikedBtnActive] = useState(false);

  const onClickLikedBtn = () => {
    setLikedBtnActive(!likedBtnActive);
    likedBtnActive ? setLikedCount(likedCount - 1) : setLikedCount(likedCount + 1);
  };

  useEffect(() => {
    console.log(likedCount, likedBtnActive);
  }, [likedBtnActive]);

  return (
    <LikedBtn onClick={onClickLikedBtn}>
      <HeartIcon icon={likedBtnActive ? Like : noLike} />
      {likedCount}
    </LikedBtn>
  );
}

export default TextIconBtn;

const NAVY = ({ theme }) => theme.color.navy;
const WHITE = ({ theme }) => theme.color.white;

const LikedBtn = styled.button`
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
`;

const HeartIcon = styled(FontAwesomeIcon)`
  font-size: 14px;
  margin-right: 7px;
`;
