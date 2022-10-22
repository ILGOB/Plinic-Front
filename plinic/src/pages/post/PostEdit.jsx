import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Editor from '../../components/editor/Editor';
import TextBtn from '../../components/button/text/TextBtn';
import data from '../../components/post/dummyData';

function PostEdit() {
  const navigate = useNavigate();
  const [editorParams] = useSearchParams();
  const editorOptions = {
    state: editorParams.get('state') || '',
    id: editorParams.get('id') || '',
  };

  const [titleInput, setTitleInput] = useState('');
  const [contentInput, setContentInput] = useState('');
  const [playlistInput, setPlaylistInput] = useState(data[0].title);
  const newPostId = data.length + 1;
  const tagRegEx = /(#[a-zA-Z가-힣][^\s#][a-zA-Z가-힣0-9]{0,28})/g;

  const makeTagList = content => {
    const tags = content.match(tagRegEx);
    return tags;
  };

  const handleUpload = () => {
    const post = {
      title: titleInput,
      content: contentInput,
      playlist_id: playlistInput,
      tag_set: makeTagList(contentInput),
    };

    if (titleInput !== '' && contentInput !== '') {
      if (editorOptions.state === 'update') {
        alert(`기존 게시물을 수정합니다.\n${JSON.stringify(post)}}`);
      } else if (editorOptions.state === 'new') {
        alert(`새로운 게시물을 생성합니다.\n${JSON.stringify(post)}`);
      }
    } else {
      alert('내용을 입력하세요.');
    }
  };

  return (
    <Wrapper>
      <Editor
        type={'post'}
        titleInput={titleInput}
        setTitleInput={setTitleInput}
        contentInput={contentInput}
        setContentInput={setContentInput}
        data={data}
        setPlaylistInput={setPlaylistInput}
      />
      <BtnWrapper>
        <TextBtn btnName={'취소하기'} onClick={() => navigate(-1)} />
        <TextBtn
          btnName={'작성하기'}
          location={titleInput && contentInput && `/posts/${newPostId}`}
          color={'lightGreen'}
          onClick={handleUpload}
        />
      </BtnWrapper>
    </Wrapper>
  );
}

export default PostEdit;

const FLEX_CENTER = ({ theme }) => theme.align.flexCenter;
const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: calc((100vh - 737px) / 2);
  ${FLEX_CENTER_COLUMN};
  justify-content: flex-start;
  gap: 50px;
`;

const BtnWrapper = styled.div`
  width: 900px;
  ${FLEX_CENTER};
  justify-content: flex-end;
  gap: 25px;

  div:first-child {
    color: ${({ theme }) => theme.color.gray};
  }
`;
