import React from 'react';
import styled from 'styled-components';

function Input({ usedFor, userInput, setUserInput, userSubmit, setUserSubmit }) {
  const placeholder = {
    nickname: '닉네임',
    search: '검색어',
    title: '제목',
    content: '내용',
  };

  const handleInput = e => {
    setUserInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter' && (usedFor === 'nickname' || usedFor === 'search')) {
      setUserSubmit(e.target.value);
    }
  };

  return (
    <div>
      <FormStyled onSubmit={handleSubmit}>
        <InputStyled
          usedFor={usedFor}
          value={userInput}
          placeholder={`${placeholder[usedFor]}을 입력하세요.`}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
        />
        {usedFor === 'nickname' ? <span></span> : usedFor === 'search' && <div>🔍</div>}
      </FormStyled>
    </div>
  );
}

export default Input;

const NAVY = ({ theme }) => theme.color.navy;

const FormStyled = styled.form`
  position: relative;
  width: fit-content;
  & > span {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: ${NAVY};
    transform: scaleX(0);
    transform-origin: center;
    transition: all 0.3s;
  }
  & > div {
    width: 25px;
    height: 25px;
    position: absolute;
    right: 20px;
    top: 12.5px;
  }
`;

const inputStyles = {
  nickname: `
  padding: 7px;
  max-width: 173px;
  border: 0;
  text-align: center;
  &:focus {
    + span {
      transform: scaleX(1);
    }
  }
  `,
  search: `
  padding: 12px 20px;
  min-width: 632px;
  min-height: 50px;
  border: 2px solid;
  border-radius: 25px;
  `,
  title: `
  padding: 10px 12px;
  width: 520px;
  border: 1px solid;
  border-radius: 10px;
  `,
  content: `
  padding: 10px 12px;
  width: 520px;
  border: 1px solid;
  border-radius: 10px;
  height: 150px;
  resize: none;
  `,
};

const InputStyled = styled.input.attrs(props => ({
  type: 'text',
  as: props.usedFor === 'content' ? 'textarea' : '',
  required: true,
}))`
  ${({ theme }) => theme.font.size['16']}
  ${props => inputStyles[props.usedFor]}
  border-color: ${NAVY};
  caret-color: ${NAVY};
  &:focus {
    outline: none;
  }
`;
