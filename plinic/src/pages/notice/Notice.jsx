import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faChevronRight, faCalendar, faCircle } from '@fortawesome/free-solid-svg-icons';

function Notice() {
  const { noticeId } = useParams();
  const [isMounted, setIsMounted] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [notice, setNotice] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/notices/${noticeId}`).then(res => {
      setNotice(res.data);
    });
  }, [noticeId]);

  return (
    <Wrapper>
      <Header>
        <NoticeLink to={'/notices'}>
          공지사항 <FontAwesomeIcon icon={faChevronRight} />
        </NoticeLink>
        <Title>
          <TitleText>[공지] {notice.title}</TitleText>
          <Menu>
            <FontAwesomeIcon
              icon={faEllipsisVertical}
              onClick={() => {
                setIsShowMenu(current => !current);
                setIsMounted(true);
              }}
            />
            <FloatingMenuWrapper>
              <FloatingMenu $isMounted={isMounted} $isShow={isShowMenu}>
                <LinkStyled to={`/notice/edit?state=update&id=${noticeId}`}>수정하기</LinkStyled>
                <LinkStyled to={'/'}>삭제하기</LinkStyled>
              </FloatingMenu>
            </FloatingMenuWrapper>
          </Menu>
        </Title>
        <Date>
          <FontAwesomeIcon icon={faCalendar} />
          <div>{notice.created_at}</div>
          {notice.created_at === notice.updated_at || (
            <>
              <FontAwesomeIcon icon={faCircle} />
              <div>edited {notice.updated_at}</div>
            </>
          )}
        </Date>
      </Header>
      <Content>{notice.content}</Content>
    </Wrapper>
  );
}

export default Notice;

const TEXT_STYLE = {
  normal: [({ theme }) => theme.font.size['16'], ({ theme }) => theme.font.weight['normal']],
  medium: [({ theme }) => theme.font.size['20'], ({ theme }) => theme.font.weight['bold']],
  bold: [({ theme }) => theme.font.size['30'], ({ theme }) => theme.font.weight['bold']],
};
const NAVY = ({ theme }) => theme.color.navy;
const WHITE = ({ theme }) => theme.color.white;
const GRAY = ({ theme }) => theme.color.disabled;
const FLEX_CENTER = ({ theme }) => theme.align.flexCenter;
const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;

const slideUpDown = isShow => keyframes`
  from {
    -webkit-transform: translateY(${isShow ? 0 : 110}px);
            transform: translateY(${isShow ? 0 : 110}px);
  }
  to {
    -webkit-transform: translateY(${isShow ? 110 : 0}px);
            transform: translateY(${isShow ? 110 : 0}px);
  }
`;

const Base = styled.div`
  width: 100%;
  display: flex;
  ${TEXT_STYLE['normal']}
`;

const FlexRow = styled(Base)`
  ${FLEX_CENTER}
`;

const Wrapper = styled(Base)`
  height: 95%;
  ${FLEX_CENTER_COLUMN}
  justify-content: flex-start;
  gap: 20px;
  user-select: none;
`;

const Header = styled(Base)`
  height: fit-content;
  flex-direction: column;
  gap: 5px;
`;

const LinkStyled = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const NoticeLink = styled(LinkStyled)`
  color: ${NAVY};
  ${TEXT_STYLE['medium']}
`;

const Title = styled(FlexRow)`
  justify-content: space-between;
`;

const Date = styled(FlexRow)`
  justify-content: flex-start;
  gap: 8px;
  color: ${GRAY};

  & > .fa-circle {
    font-size: 5px;
  }
`;

const TitleText = styled.div`
  width: calc(100% - 25px);
  ${TEXT_STYLE['bold']}
`;

const Menu = styled.div`
  width: 25px;
  height: 25px;
  position: relative;

  & > .fa-ellipsis-vertical {
    width: 100%;
    ${TEXT_STYLE['medium']};
    color: ${GRAY};
    cursor: pointer;
  }
`;

const FloatingMenuWrapper = styled.div`
  position: absolute;
  right: 0px;
  top: 25px;
  width: 120px;
  height: 100px;
  overflow: hidden;
`;

const FloatingMenu = styled.div`
  background: ${WHITE};
  padding: 5px 0;
  position: absolute;
  top: -100px;
  right: 10px;
  width: 80px;
  border-radius: 5px;
  border: 1px solid ${GRAY};
  /* box-shadow: 0 0 8px 1px ${GRAY}; */
  animation: ${props => props.$isMounted && slideUpDown(props.$isShow)} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  ${FLEX_CENTER_COLUMN};

  & > a {
    width: 100%;
    padding: 5px;
    text-align: center;
    cursor: pointer;

    :hover {
      color: ${NAVY};
    }
  }
`;

const Content = styled(Base)`
  line-height: 30px;
`;
