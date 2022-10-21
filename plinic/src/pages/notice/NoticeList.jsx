import React, { useState, useEffect } from 'react';
import axios from 'axios';
import loginAtom from '../../recoil/dummy-login/loginAtom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Pagination from '../../components/pagination/Pagination';

function NoticeList() {
  const [isLogin, setIsLogin] = useRecoilState(loginAtom);
  const [activePage, setActivePage] = useState(1);
  const [notices, setNotices] = useState([]);
  const noticePerPage = 8;

  const handlePageChange = pageNumber => {
    setActivePage(pageNumber);
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/notices/`).then(res => {
      setNotices(res.data.results);
    });
  }, []);

  return (
    <Wrapper>
      <HeaderLabel>
        <div>공지사항</div>
        {isLogin && (
          <NewNoticeButton>
            <LinkStyled to="/post/edit?state=new">새로운 공지 작성하기 〉</LinkStyled>
          </NewNoticeButton>
        )}
      </HeaderLabel>

      <NoticeContainer>
        <GridContainer header>
          <GridItem>번호</GridItem>
          <GridItem>제목</GridItem>
          <GridItem>작성자</GridItem>
          <GridItem>날짜</GridItem>
        </GridContainer>
        <Line navy />
        {notices &&
          notices
            .slice(noticePerPage * (activePage - 1), noticePerPage * (activePage - 1) + noticePerPage)
            .map(notice => (
              <Notice key={notice.id}>
                <LinkStyled to={`/notices/${notice.id}`}>
                  <GridContainer link>
                    <GridItem>{notice.id}</GridItem>
                    <GridItem isTitle={true}>{notice.title}</GridItem>
                    <GridItem>{notice.author}</GridItem>
                    <GridItem>{notice.created_at}</GridItem>
                  </GridContainer>
                </LinkStyled>
                <Line />
              </Notice>
            ))}
      </NoticeContainer>

      <PaginationContainer>
        <Pagination activePage={activePage} totalItemsCount={notices.length - 1} handlePageChange={handlePageChange} />
      </PaginationContainer>
    </Wrapper>
  );
}

export default NoticeList;

const NAVY = ({ theme }) => theme.color.navy;
const GRAY = ({ theme }) => theme.color.gray;
const BOLD_TEXT = [({ theme }) => theme.font.size['30'], ({ theme }) => theme.font.weight['bold']];
const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;

const Wrapper = styled.div`
  ${FLEX_CENTER_COLUMN};
  width: 100%;
  padding-top: calc((100vh - 795px) / 2);
  display: flex;
  gap: 30px;
`;

const HeaderLabel = styled.div`
  width: 100%;
  color: ${NAVY};

  div {
    ${BOLD_TEXT};
  }
`;

const NewNoticeButton = styled.span`
  color: ${NAVY};
  font-weight: 500;
  ${({ theme }) => theme.font.size['16']}

  :hover {
    ${({ theme }) => theme.font.weight['bold']};
  }
`;

const NoticeContainer = styled.div`
  position: relative;
  width: 100%;
  ${FLEX_CENTER_COLUMN}
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  margin: 20px;
  background: ${props => (props.navy ? NAVY : GRAY)};
`;

const Notice = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  ${FLEX_CENTER_COLUMN}
`;

const LinkStyled = styled(Link)`
  width: 100%;
  color: inherit;
  text-decoration: none;
`;

const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 7fr 2fr 2fr;
  column-gap: 24px;
  user-select: none;
  cursor: ${props => props.link && 'pointer'};
  & > div {
    color: ${props => props.header && NAVY};
  }
`;

const GridItem = styled.div`
  text-align: ${props => (props.isTitle ? 'left' : 'center')};
`;

const PaginationContainer = styled.div`
  position: relative;
  width: 100%;
`;
