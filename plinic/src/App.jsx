import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './styles/layout';
import styled from 'styled-components';
import {
  Home,
  Login,
  Search,
  SearchResult,
  PostList,
  NoticeList,
  SignUp,
  CE,
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
          <Route path="/post-list" element={<Layout page={<PostList />} />} />
          <Route path="/notice" element={<Layout page={<NoticeList />} />} />
          <Route path="/sign-up" element={<Layout noMenu page={<SignUp />} />} />
          <Route path="/CE" element={<Layout page={<CE />} />} />
          <Route path="/CE/genre-button" element={<Layout page={<TestGenreBtn />} />} />
          <Route path="/CE/text-button" element={<Layout page={<TestTextBtn />} />} />
          <Route path="/CE/text-icon-button" element={<Layout page={<TestTextIconBtn />} />} />
          <Route path="/CE/slider" element={<Layout page={<TestSlider />} />} />
          <Route path="/TY" element={<Layout page={<TY />} />} />
          <Route path="/TY/pagination" element={<Layout page={<TestPagination />} />} />
          <Route path="/TY/input" element={<Layout page={<TestInput />} />} />
          <Route path="/TY/select" element={<Layout page={<TestSelectBox />} />} />
          <Route path="/TY/card-carousel" element={<Layout page={<TestCardCarousel />} />} />
          <Route path="/TY/playlist-swipe" element={<Layout page={<TestPlaylistSwipe />} />} />
          <Route path="/TY/card-swipe" element={<Layout page={<TestCardSwipe />} />} />
          <Route path="/HL" element={<Layout page={<HL />} />} />
          <Route path="/HL/profile" element={<Layout page={<TestProfile />} />} />
          <Route path="/HL/thumbnail" element={<Layout page={<TestThumbnail />} />} />
          <Route path="/HL/scroll" element={<Layout page={<TestScroll />} />} />
          <Route path="/HL/switch" element={<Layout page={<TestSwitch />} />} />
          <Route path="/HL/modal" element={<Layout page={<TestModal />} />} />
          <Route path="/HL/card" element={<Layout page={<TestCard />} />} />
          <Route path="/HL/post" element={<Layout page={<TestPost />} />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
`;
