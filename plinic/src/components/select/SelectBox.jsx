import { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown as Down } from '@fortawesome/free-solid-svg-icons';

function SelectBox({ sortBy, q, type, setSearchParams, setCurrentSortType }) {
  const isMounted = useRef(false);
  const [currentSortTypeLabel, setCurrentSortTypeLabel] = useState('정확도순');
  const [toggleMenu, setToggleMenu] = useState(false);
  const sortLabel = sortBy === 'playlists' ? '플레이리스트수' : sortBy === 'likes' ? '좋아요' : '';
  const sortOptions = [
    { value: 'default', name: '정확도순' },
    { value: `${sortBy}Asc`, name: `${sortLabel} ↑` },
    { value: `${sortBy}Desc`, name: `${sortLabel} ↓` },
  ];

  const handleChange = e => {
    const { innerText } = e.target;
    const selectedOption = sortOptions.find(option => option.name === innerText);
    setCurrentSortTypeLabel(innerText);
    setCurrentSortType(selectedOption.value);
    setSearchParams({ q: q, type: type, sort: selectedOption.value });
    setToggleMenu(false);
  };

  useEffect(() => {
    isMounted.current = true;
    return () => (isMounted.current = false);
  }, []);

  return (
    <Container>
      <SortLabel onClick={() => setToggleMenu(current => !current)}>
        <div>{currentSortTypeLabel}</div>
        <IconStyled icon={Down} $isShow={toggleMenu} />
      </SortLabel>
      <SelectWrapper>
        <Select $isMounted={isMounted.current} $isShow={toggleMenu}>
          <OptionBox>
            {sortOptions.map(option => (
              <Option key={option.value} onClick={handleChange}>
                {option.name}
              </Option>
            ))}
          </OptionBox>
        </Select>
      </SelectWrapper>
    </Container>
  );
}

export default SelectBox;

const NAVY = ({ theme }) => theme.color.navy;
const WHITE = ({ theme }) => theme.color.white;
const GRAY = ({ theme }) => theme.color.gray;

const slideUpDown = isShow => keyframes`
  from {
    -webkit-transform: translateY(${isShow ? 0 : 140}px);
            transform: translateY(${isShow ? 0 : 140}px);
  }
  to {
    -webkit-transform: translateY(${isShow ? 140 : 0}px);
            transform: translateY(${isShow ? 140 : 0}px);
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
`;

const SortLabel = styled.div`
  padding: 8px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  color: ${NAVY};
  user-select: none;
  cursor: pointer;
`;

const IconStyled = styled(FontAwesomeIcon)`
  transform: rotate(${props => (props.$isShow ? '-180deg' : '0deg')});
  transition: ease transform 0.5s;
`;

const SelectWrapper = styled.div`
  position: absolute;
  padding: 10px;
  top: 30px;
  overflow: hidden;
`;

const Select = styled.ul`
  position: relative;
  top: -140px;
  padding: 0;
  margin: 0;
  border: 0;
  list-style: none;
  animation: ${props => props.$isMounted && slideUpDown(props.$isShow)} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

const OptionBox = styled.div`
  padding: 5px 0;
  background: ${WHITE};
  box-shadow: 0 0 10px 3px ${GRAY};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  z-index: 10;
`;

const Option = styled.li`
  padding: 5px 10px;
  margin: 0;
  color: ${NAVY};
  user-select: none;
  cursor: pointer;

  &:hover {
    background: ${NAVY};
    color: ${WHITE};
  }
`;
