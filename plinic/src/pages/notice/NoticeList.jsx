import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Pagination from '../../components/pagination/Pagination';

function NoticeList() {
  const [activePage, setActivePage] = useState(1);
  const [notices, setNotices] = useState([]);
  const [noticeCount, setNoticeCount] = useState(0);

  const handlePageChange = pageNumber => {
    setActivePage(pageNumber);
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/notices/?page=${activePage}`).then(res => {
      setNotices(res.data.results);
      setNoticeCount(res.data.count);
    });
  }, [activePage]);

  return (
    <Container>
      <section>
        <HeaderLabel>공지사항</HeaderLabel>
      </section>

      <section>
        <section>
          <GridWrapper header>
            <GridItem>번호</GridItem>
            <GridItem>제목</GridItem>
            <GridItem>작성자</GridItem>
            <GridItem>날짜</GridItem>
          </GridWrapper>
          <Line navy />
        </section>

        {notices &&
          notices.map(notice => (
            <section key={notice.id}>
              <LinkStyled to={`/notices/${notice.id}`}>
                <GridWrapper link>
                  <GridItem>{notice.id}</GridItem>
                  <GridItem title>{notice.title}</GridItem>
                  <GridItem>{notice.author}</GridItem>
                  <GridItem>{notice.created_at}</GridItem>
                </GridWrapper>
              </LinkStyled>
              <Line />
            </section>
          ))}
      </section>

      <Pagination activePage={activePage} totalItemsCount={noticeCount} handlePageChange={handlePageChange} />
    </Container>
  );
}

export default NoticeList;

const NAVY = ({ theme }) => theme.color.navy;
const GRAY = ({ theme }) => theme.color.gray;
const BOLD_TEXT = [({ theme }) => theme.font.size['30'], ({ theme }) => theme.font.weight['bold']];

const Container = styled.section`
  width: 100%;
  height: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const HeaderLabel = styled.div`
  color: ${NAVY};
  ${BOLD_TEXT}
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: ${props => (props.navy ? NAVY : GRAY)};
  margin: 20px 0;

  /* App View */
  @media (max-width: 767px) {
    display: ${props => props.navy && 'none'};
  }
`;

const LinkStyled = styled(Link)`
  width: 100%;
  color: inherit;
  text-decoration: none;
`;

const GridWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 7fr 2fr 2fr;
  column-gap: 24px;
  user-select: none;
  cursor: ${props => props.link && 'pointer'};

  & > div {
    color: ${props => props.header && NAVY};
  }

  /* App View */
  @media (max-width: 767px) {
    display: ${props => props.header && 'none'};
    grid-template-columns: 1fr 1fr 15fr;
    column-gap: 5px;

    div:first-child {
      display: none;
    }
  }
`;

const GridItem = styled.div`
  text-align: ${props => (props.title ? 'left' : 'center')};

  /* App View */
  @media (max-width: 767px) {
    grid-column: ${props => props.title && '1 / span 4'};
    text-align: left;
    color: ${props => (props.title ? 'black' : 'gray')};
  }
`;
