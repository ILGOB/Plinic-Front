import React from 'react';
import CardCarousel from '../../../components/carousel/CardCarousel';
import { genres } from '../../../components/carousel/genres';

function TestCardCarousel() {
  const data = genres;
  return <CardCarousel label={'게시글'} data={data} loop={false} detailLink={'/'} />;
}

export default TestCardCarousel;
