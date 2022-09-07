// import React from 'react';
// import styled from 'styled-components';
// import Genre from '../../../components/button/genre/Genre';
// import HeaderMenu from '../../../components/header/HeaderMenu';
// import PostGenre from '../../../components/button/genre/PostGenre';
// import TextBtn from '../../../components/button/text/TextBtn';
// import TextIconBtn from '../../../components/button/textIcon/TextIconBtn';
// import Slider from '../../../components/slider/Slider';

// function CE() {
//   // const clicked = () => {
//   //   console.log('clicked');
//   // };
//   // const clicked2 = () => {
//   //   console.log('clicked22222222222');
//   // };
//   return (
//     <Wrapper>
//       {/* <TextBtn location={'/'} btnName={'가입하기'} color={'lightGreen'} onClick={clicked} />
//       <TextBtn color={'navy'} onClick={clicked2} btnName={'등록하기'} />
//       <TextBtn location={'/hl'} color={'navy'} btnName={'등록하기'} /> */}
//       <Slider />
//     </Wrapper>
//   );
// }

// export default CE;

// const WHITE = ({ theme }) => theme.color.white;
// const NAVY = ({ theme }) => theme.color.navy;
// const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;

// const Wrapper = styled.div`
//   width: 400px;
//   height: 300px;
//   ${FLEX_CENTER_COLUMN}
//   background-color: grey;
// `;

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function CE() {
  return (
    <Wrapper>
      <Link to="/ce/genre-button">GenreButton Component</Link>
      <Link to="/ce/text-button">TextBtn Component</Link>
      <Link to="/ce/text-icon-button">TextIconBtn Component</Link>
      <Link to="/ce/slider">Slider Component</Link>
    </Wrapper>
  );
}

export default CE;

const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;

const Wrapper = styled.div`
  ${FLEX_CENTER_COLUMN}
`;
