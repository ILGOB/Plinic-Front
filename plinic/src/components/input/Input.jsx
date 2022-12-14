import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Input({ usedFor, userInput, setUserInput, userSubmit, setUserSubmit, maxLength }, ref) {
  const placeholder = {
    nickname: '닉네임',
    search: '검색어',
    title: '제목',
    content: '내용',
  };
  const navigate = useNavigate();

  const handleInput = e => {
    setUserInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  const navigateToResult = () => {
    navigate(`/search?q=${userInput}`);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter' && (usedFor === 'nickname' || usedFor === 'search')) {
      setUserSubmit(e.target.value);
      navigateToResult();
    }
  };

  return (
    <div>
      <FormStyled onSubmit={handleSubmit}>
        <InputStyled
          ref={ref}
          usedFor={usedFor}
          value={userInput}
          placeholder={`${placeholder[usedFor]}을 입력하세요.`}
          maxLength={maxLength}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
        />
        {maxLength && (
          <LengthLabel isLong={userInput.length === maxLength} usedFor={usedFor}>
            ({userInput.length}/{maxLength})
          </LengthLabel>
        )}
        {usedFor === 'nickname' ? (
          <Line></Line>
        ) : (
          usedFor === 'search' && <FontAwesomeIcon icon={faMagnifyingGlass} onClick={() => navigateToResult()} />
        )}
      </FormStyled>
    </div>
  );
}

export default forwardRef(Input);

const NAVY = ({ theme }) => theme.color.navy;

const FormStyled = styled.form`
  position: relative;
  width: fit-content;
  & > .fa-magnifying-glass {
    width: 18px;
    height: 18px;
    position: absolute;
    right: 20px;
    top: 15px;
    color: ${NAVY};
    user-select: none;
    cursor: pointer;
  }
`;

const Line = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: ${NAVY};
  transform: scaleX(0);
  transform-origin: center;
  transition: all 0.3s;
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
  width: 900px;
  border: 1px solid;
  border-radius: 10px;
  `,
  content: `
  padding: 10px 12px;
  width: 900px;
  border: 1px solid;
  border-radius: 10px;
  height: 300px;
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

const LengthLabel = styled.span`
  position: absolute;
  right: 12px;
  ${props =>
    props.usedFor === 'title' &&
    `top: 50%;
    transform: translateY(-50%);`};
  ${props => props.usedFor === 'content' && `bottom: 15px;`};
  ${({ theme }) => theme.font.size['16']};
  color: ${props => (props.isLong ? ({ theme }) => theme.color.warning : ({ theme }) => theme.color.darkGray)};
`;
