import React from 'react';
import CardCarousel from '../../../components/carousel/CardCarousel';
import { genres } from '../../../components/carousel/genres';

function TestCardCarousel() {
  const data = genres;
  return <CardCarousel label={'장르'} data={data} />;
}

export default TestCardCarousel;
