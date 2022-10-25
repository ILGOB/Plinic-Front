import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './styles/layout';
import styled from 'styled-components';
import {
  Home,
  Login,
  Search,
  SearchResult,
  Post,
  PostList,
  PostEdit,
  Notice,
  NoticeList,
  NoticeEdit,
  SignUp,
  MyPage,
  ProfileEdit,
  Playlist,
  CE,
  Resign,
  TestGenreBtn,
  TestTextBtn,
  TestTextIconBtn,
  TestSlider,
  TY,
  TestPagination,
  TestInput,
  TestSelectBox,
  TestCardCarousel,
  TestPlaylistSwipe,
  TestCardSwipe,
  HL,
  TestProfile,
  TestThumbnail,
  TestScroll,
  TestSwitch,
  TestModal,
  TestCard,
  TestPost,
  Pages,
} from './pages';

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout page={<Home />} fullScreen />} />
          <Route path="/login" element={<Layout noMenu page={<Login />} />} />
          <Route path="/search" element={<Layout page={<Search />} />} />
          <Route path="/searchresult" element={<Layout page={<SearchResult />} />} />
          <Route path="/posts/:postId" element={<Layout page={<Post />} />} />
          <Route path="/posts" element={<Layout page={<PostList />} />} />
          <Route path="/post/edit" element={<Layout page={<PostEdit />} />} />
          <Route path="/notices" element={<Layout page={<NoticeList />} />} />
          <Route path="/notices/:noticeId" element={<Layout page={<Notice />} />} />
          <Route path="/notice/edit" element={<Layout page={<NoticeEdit />} />} />
          <Route path="/sign-up" element={<Layout noMenu page={<SignUp />} />} />
          <Route path="/beta" element={<Layout page={<MyPage />} />} />
          <Route path="/profile/edit" element={<Layout page={<ProfileEdit />} />} />
          <Route path="/playlist/:playlistId" element={<Layout page={<Playlist />} />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
`;
