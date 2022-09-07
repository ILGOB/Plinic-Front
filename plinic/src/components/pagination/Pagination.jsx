import PaginationLib from 'react-js-pagination';
import styled from 'styled-components';

function Pagination({ activePage, totalItemsCount, handlePageChange }) {
  return (
    <PaginationBox>
      <PaginationLib
        activePage={activePage}
        itemsCountPerPage={10}
        totalItemsCount={totalItemsCount}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
        prevPageText="〈"
        nextPageText="〉 "
        hideFirstLastPages={true}
      />
    </PaginationBox>
  );
}

export default Pagination;

const theme = {
  NAVY: ({ theme }) => theme.color.navy,
  WHITE: ({ theme }) => theme.color.white,
  GRAY: ({ theme }) => theme.color.gray,
  FONT: [({ theme }) => theme.font.size['14'], ({ theme }) => theme.font.weight['normal']],
  BOLD: ({ theme }) => theme.font.weight['bold'],
  CENTER: ({ theme }) => theme.align.flexCenter,
  CENTER_COLUMN: ({ theme }) => theme.align.flexCenterColumn,
};

const PaginationBox = styled.div`
  ${theme.CENTER_COLUMN}

  ul {
    list-style: none;
    user-select: none;
    padding: 0;
    ${theme.CENTER}
    gap: 5px;

    li {
      display: inline-block;
      width: 25px;
      height: 25px;
      ${theme.CENTER}
      border-radius: 50%;
      cursor: pointer;
      transition: ease 0.3s;

      a {
        color: ${theme.NAVY};
        ${theme.FONT};
        text-decoration: none;
      }

      :last-child > a,
      :first-child > a {
        font-weight: 900;
      }

      :hover:not(.disabled, .active) > a {
        ${theme.BOLD};
      }

      + .active {
        background: ${theme.NAVY};

        a {
          color: ${theme.WHITE};
        }
      }

      &.disabled {
        cursor: default;

        a {
          color: ${theme.GRAY};
          cursor: default;
        }
      }
    }
  }
`;
