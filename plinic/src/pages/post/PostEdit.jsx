import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Editor from '../../components/editor/Editor';
import TextBtn from '../../components/button/text/TextBtn';
import data from '../../components/post/dummyData';

function PostCreate() {
  const navigate = useNavigate();
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
      id: newPostId,
      title: titleInput,
      content: contentInput,
      tagList: makeTagList(contentInput),
      playlist: playlistInput,
    };

    if (titleInput === '') {
      return alert('제목을 입력해주세요.');
    } else if (contentInput === '') {
      return alert('내용을 입력해주세요.');
    }

    alert(
      `Id: ${post.id}\n제목: ${post.title}\n내용: ${post.content}\n태그: ${post.tagList}\n플레이리스트: ${post.playlist}`
    );
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
          location={titleInput && contentInput && `/post/${newPostId}`}
          color={'lightGreen'}
          onClick={handleUpload}
        />
      </BtnWrapper>
    </Wrapper>
  );
}

export default PostCreate;

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
