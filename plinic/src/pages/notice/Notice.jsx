import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faChevronRight, faCalendar, faCircle } from '@fortawesome/free-solid-svg-icons';

function Notice() {
  const isMounted = useRef(false);
  const { noticeId } = useParams();
  const [isEdited, setIsEdited] = useState(true);
  const [isShowMenu, setIsShowMenu] = useState(false);

  useEffect(() => {
    isMounted.current = true;
    return () => (isMounted.current = false);
  }, []);

  return (
    <Wrapper>
      <Header>
        <NoticeLink to={'/notice'}>
          공지사항 <FontAwesomeIcon icon={faChevronRight} />
        </NoticeLink>
        <Title>
          <TitleText>[공지] {noticeId}번째 공지</TitleText>
          <Menu>
            <FontAwesomeIcon icon={faEllipsisVertical} onClick={() => setIsShowMenu(current => !current)} />
            <FloatingMenuWrapper>
              <FloatingMenu $isMounted={isMounted.current} $isShow={isShowMenu}>
                <LinkStyled to={'/'}>수정하기</LinkStyled>
                <LinkStyled to={'/'}>삭제하기</LinkStyled>
              </FloatingMenu>
            </FloatingMenuWrapper>
          </Menu>
        </Title>
        <Date>
          <FontAwesomeIcon icon={faCalendar} />
          <div>2022.09.15</div>
          {isEdited === true && (
            <>
              <FontAwesomeIcon icon={faCircle} />
              <div>edited 2022.09.28</div>
            </>
          )}
        </Date>
      </Header>
      <Content>
        타오르고 설레는 돋고, 쓸쓸한 이 작고 맺어, 위하여 같이, 운다. 살 싹이 무엇을 석가는 것은 봄날의 대중을 것이다.
        충분히 피에 모래뿐일 위하여서, 듣기만 돋고, 듣는다. 이상이 힘차게 천자만홍이 것이다. 그것은 그들은 튼튼하며,
        끓는 찾아 못할 있을 것이다. 이상의 사라지지 무엇이 실로 끓는 가진 바이며, 풍부하게 그들의 사막이다. 천자만홍이
        피가 거친 아름답고 이것을 것은 굳세게 맺어, 아름다우냐? 인간은 피어나기 뛰노는 품으며, 인간의 미인을 것이다.
        어디 인간의 같이, 위하여서, 무엇을 내려온 끝에 듣는다. 보는 새 얼음 든 칼이다. 무엇이 품었기 타오르고 위하여,
        소담스러운 뜨고, 위하여 만물은 석가는 사막이다. 모래뿐일 뜨거운지라, 있음으로써 그러므로 때문이다. 창공에 가치를
        보이는 긴지라 보라. 피에 긴지라 주는 심장의 끝에 방황하여도, 그들의 귀는 말이다. 품고 끓는 아니한 청춘에서만
        광야에서 얼음 과실이 소리다.이것은 없으면 힘있다. 없는 청춘을 뼈 같지 못하다 사막이다. 발휘하기 그들에게
        모래뿐일 품고 그들에게 뿐이다. 작고 때에, 천자만홍이 열매를 원질이 힘있다. 그들의 위하여 얼마나 끓는 생명을
        노래하며 이것이다. 가는 사는가 없으면, 가는 피다. 오직 수 기쁘며, 남는 때문이다. 방황하였으며, 피어나는 같은
        고동을 설산에서 그들은 할지니, 커다란 두손을 것이다. 얼음에 얼마나 날카로우나 위하여 별과 남는 것이다. 천고에
        풍부하게 천자만홍이 피다. 어디 힘차게 청춘은 구하지 철환하였는가? 인류의 심장의 같지 온갖 찬미를 이상은 꽃
        이것이다. 대한 얼음과 별과 그와 있다. 봄날의 너의 곧 힘있다. 할지라도 같은 할지니, 붙잡아 있다. 끓는 예가
        같으며, 있는 갑 황금시대다. 그것은 가슴에 이 꽃이 커다란 영원히 것이 풀이 것이다. 인간이 오아이스도 어디 이는
        약동하다. 청춘은 사는가 들어 이상을 따뜻한 꽃이 싹이 피다. 청춘에서만 그들의 충분히 피에 그들에게 뿐이다.
        황금시대의 없으면 꽃이 노래하며 영원히 칼이다. 작고 낙원을 보배를 꽃이 구하지 같은 듣는다. 동산에는 오아이스도
        그와 유소년에게서 이 얼음과 든 곳으로 그리하였는가? 길지 것이 하였으며, 아니다. 돋고, 못할 있는 시들어 있는가?
        끝까지 불러 간에 피어나는 같은 풍부하게 청춘의 때문이다. 속잎나고, 옷을 많이 그들의 위하여서, 이것이다. 인생에
        온갖 고행을 설레는 칼이다. 이상을 용기가 힘차게 거선의 평화스러운 것이다. 곧 같은 품고 전인 운다. 보내는 얼음과
        불어 할지라도 날카로우나 남는 인생의 피는 보라. 물방아 자신과 피어나기 사랑의 예가 끝에 얼음 그러므로 심장은
        듣는다. 굳세게 예수는 그들의 보배를 것이다. 얼음과 있으며, 풀밭에 온갖 때까지 심장의 같이, 때에, 속에 있다. 싹이
        있는 광야에서 할지라도 품었기 새가 이것이다. 생의 곳이 있는 없으면, 운다. 할지라도 원대하고, 없는 못할 얼음이
        있는 영락과 지혜는 보이는 부패뿐이다. 만물은 들어 같지 따뜻한 대중을 꽃이 찾아다녀도, 봄바람이다. 트고, 장식하는
        바이며, 청춘의 물방아 남는 싶이 노년에게서 이것이다. 그들의 열락의 그것을 뜨고, 얼음에 안고, 말이다. 만천하의
        끝에 구하지 충분히 유소년에게서 별과 석가는 힘있다. 얼음 인생을 같이, 실현에 가슴에 우리의 사랑의 그들의 것이다.
        노년에게서 대한 꾸며 두손을 미묘한 용감하고 인간이 주는 쓸쓸하랴? 심장의 갑 물방아 이것이야말로 이것이다.
        되려니와, 커다란 같이, 품고 힘있다. 가슴에 군영과 같은 이 전인 하여도 위하여서. 이상은 별과 위하여서 것이
        발휘하기 것이다. 어디 방황하여도, 같으며, 인간은 이상 황금시대를 피가 되려니와, 아니다.
      </Content>
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
  border-radius: 10px;
  box-shadow: 0 0 8px 1px ${GRAY};
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
