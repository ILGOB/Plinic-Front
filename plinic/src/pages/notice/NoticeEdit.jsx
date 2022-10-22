import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TextBtn from '../../components/button/text/TextBtn';
import Editor from '../../components/editor/Editor';

function NoticeEdit() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { title, content } = state || '';
  const [editorParams] = useSearchParams();
  const editorOptions = {
    state: editorParams.get('state') || '',
    id: editorParams.get('id') || '',
  };

  const [titleInput, setTitleInput] = useState(title ? title : '');
  const [contentInput, setContentInput] = useState(content ? content : '');
  const label = editorOptions.state === 'new' ? '작성' : '수정';

  const handleUpload = () => {
    const notice = {
      title: titleInput,
      content: contentInput,
    };

    if (titleInput !== '' && contentInput !== '') {
      if (editorOptions.state === 'update') {
        axios.put(`${process.env.REACT_APP_BASE_URL}/notices/${editorOptions.id}/`, notice);
        navigate(`/notices/${editorOptions.id}`);
      } else if (editorOptions.state === 'new') {
        axios.post(`${process.env.REACT_APP_BASE_URL}/notices/`, notice).then(res => {
          console.log(res);
        });
      }
    } else {
      alert('내용을 입력해주세요.');
    }
  };

  return (
    <Wrapper>
      <Title>공지글 {label}하기</Title>
      <Editor
        type="notice"
        titleInput={titleInput}
        setTitleInput={setTitleInput}
        contentInput={contentInput}
        setContentInput={setContentInput}
      />
      <FlexRow>
        <TextBtn btnName={'취소하기'} onClick={() => navigate(-1)} />
        <TextBtn color={'lightGreen'} btnName={`${label}하기`} onClick={handleUpload} />
      </FlexRow>
    </Wrapper>
  );
}

export default NoticeEdit;

const NAVY = ({ theme }) => theme.color.navy;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.align.flexCenterColumn}
  gap: 25px;
`;

const Title = styled.div`
  margin-bottom: 20px;
  color: ${NAVY};
  ${({ theme }) => theme.font.size['30']};
  ${({ theme }) => theme.font.weight['bold']};
`;

const FlexRow = styled.div`
  width: 900px;
  ${({ theme }) => theme.align.flexCenter}
  justify-content: flex-end;
  gap: 25px;

  div:first-child {
    color: ${({ theme }) => theme.color.gray};
  }
`;
