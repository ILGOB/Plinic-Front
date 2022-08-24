import React from 'react';
import TextBtn from '../../../components/button/text/TextBtn';

function TestTextBtn() {
  const clicked = () => {
    console.log('clicked');
  };
  const clicked2 = () => {
    console.log('clicked22222222222');
  };

  return (
    <>
      <TextBtn location={'/'} btnName={'가입하기'} color={'lightGreen'} onClick={clicked} />
      <TextBtn color={'navy'} onClick={clicked2} btnName={'등록하기'} />
      <TextBtn location={'/hl'} color={'lightGreen'} btnName={'등록하기'} />
    </>
  );
}

export default TestTextBtn;
