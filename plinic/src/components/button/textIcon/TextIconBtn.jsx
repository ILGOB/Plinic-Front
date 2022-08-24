import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

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
    <LikedBtn>
      <HeartIcon fontSize="40px" onClick={onClickLikedBtn} />
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
  ${({ theme }) => theme.font.size[10]};
  cursor: pointer;
`;

const HeartIcon = styled(FavoriteBorderIcon)`
  size: 11px;
  background-color: ${NAVY};
  color: ${({ likedBtnActive }) => (likedBtnActive ? NAVY : WHITE)};
`;
