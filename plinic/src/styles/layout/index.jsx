import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import Main from './Main';

function Layout({ page, fullScreen, noMenu }) {
  if (fullScreen) {
    return <FullWrapper>{page}</FullWrapper>;
  } else {
    return (
      <Wrapper>
        <Header noMenu={noMenu} />
        <Main>{page}</Main>
        <BetaWrapper>
          <Icon icon={faInfo} />
          <BetaLabel>현재 베타 서비스를 이용 중입니다.</BetaLabel>
        </BetaWrapper>
      </Wrapper>
    );
  }
}

export default Layout;

const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;

const FullWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  ${FLEX_CENTER_COLUMN}
`;

const Wrapper = styled.div`
  height: 100vh;
  @media (max-width: 1300px) {
    width: 1200px;
    padding: 0 calc((1300px - 1200px) / 2);
  }
  @media (min-width: 1300px) {
    width: 100vw;
    padding: 0 calc((100vw - 1200px) / 2);
    overflow-x: hidden;
  }
`;

const BetaWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.gray};
  position: fixed;
  left: 50px;
  bottom: 40px;

  padding: 10px;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.navy};
  font-weight: 700;
`;

const Icon = styled(FontAwesomeIcon)`
  display: inline-block;
  margin: 0 10px;
  opacity: 0.5;
`;

const BetaLabel = styled.div`
  display: inline-block;
  font-size: 18px;
`;
