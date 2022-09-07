import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';

function Thumbnail() {
  const initialRandomUrl = 'https://source.unsplash.com/random';
  const [randomUrl, setRandomUrl] = useState(initialRandomUrl);

  const getRandomImg = () => {
    axios
      .get('https://api.unsplash.com/photos/random', {
        params: {
          client_id: '2GsZ5WLwLDfys_DkVrPUmcn335xVm20Pk40yzMU2Eso',
        },
      })
      .then(res => {
        setRandomUrl(res.data.links.download);
        console.log(res.data.links.download);
      })
      .catch(error => {
        console.log(error);
        // getRandomImg();
      });
  };

  return (
    <Wrapper>
      <Img url={randomUrl} />
      <Button onClick={getRandomImg}>
        <Icon icon={faArrowRotateLeft} />
      </Button>
    </Wrapper>
  );
}

export default Thumbnail;

const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;
const WHITE = ({ theme }) => theme.color.white;
const DISABLED = ({ theme }) => theme.color.disabled;

const Wrapper = styled.div`
  width: fit-content;
  height: 175px;
  position: relative;
`;

const Img = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 10px;
  background: ${DISABLED} url(${props => props.url}) center/cover;
`;

const Button = styled.div`
  width: 33px;
  height: 33px;
  cursor: pointer;
  background-color: ${WHITE};
  border-radius: 50%;
  position: absolute;
  left: 135px;
  bottom: 2px;
  ${FLEX_CENTER_COLUMN}
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 18px;
`;
