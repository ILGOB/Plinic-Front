import React from 'react';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faGear } from '@fortawesome/free-solid-svg-icons';

function Profile({ width, img, editBtn }) {
  console.log(img);

  const clickedEditBtn = () => {
    console.log('click');
  };

  return (
    <Wrapper width={width} img={img}>
      {img === undefined && <ProfileImg icon={faCircleUser} width={width} />}
      {width == 150 && editBtn && (
        <EditBtnWrapper onClick={clickedEditBtn}>
          <EditBtn icon={faGear} />
        </EditBtnWrapper>
      )}
    </Wrapper>
  );
}

export default Profile;

const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;
const WHITE = ({ theme }) => theme.color.white;

const Wrapper = styled.div`
  width: ${({ width }) => (width ? width : 107)}px;
  height: ${({ width }) => (width ? width : 107)}px;
  border-radius: 50%;
  background: url(${props => props.img}) no-repeat center/cover;
  position: relative;
`;

const ProfileImg = styled(FontAwesomeIcon)`
  font-size: ${({ width }) => (width ? width : 107)}px;
`;

const EditBtnWrapper = styled.div`
  width: 33px;
  height: 33px;
  border-radius: 50%;
  background-color: ${WHITE};
  ${FLEX_CENTER_COLUMN}
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;
`;

const EditBtn = styled(FontAwesomeIcon)`
  font-size: 24px;
`;
