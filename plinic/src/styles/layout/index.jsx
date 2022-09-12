import styled from 'styled-components';

import Header from './Header';
import Main from './Main';

function Layout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
    </Wrapper>
  );
}

export default Layout;

const Wrapper = styled.div`
  height: 100vh;
  @media (max-width: 1100px) {
    width: 1024px;
    padding: 0 calc((1100px - 1024px) / 2);
  }
  @media (min-width: 1100px) {
    width: 100vw;
    padding: 0 calc((100vw - 1024px) / 2);
    overflow-x: hidden;
  }
`;
