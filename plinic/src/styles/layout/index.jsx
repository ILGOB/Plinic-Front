import styled from 'styled-components';

import Header from './Header';
import Main from './Main';

function Layout({ page }) {
  return (
    <Wrapper>
      <Header />
      <Main>{page}</Main>
    </Wrapper>
  );
}

export default Layout;

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
