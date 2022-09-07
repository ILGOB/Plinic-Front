import React, { useState } from 'react';
import Hamburger from './Hamburger';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function HeaderMenu() {
  const [hamBtnIsClicked, setHamBtnIsClicked] = useState(false);

  const onClickHamBtn = () => {
    setHamBtnIsClicked(!hamBtnIsClicked);
  };

  return <div>{hamBtnIsClicked ? <Hamburger /> : <HamburgerIcon icon={faBars} onClick={onClickHamBtn} />}</div>;
}

export default HeaderMenu;

const HamburgerIcon = styled(FontAwesomeIcon)``;
