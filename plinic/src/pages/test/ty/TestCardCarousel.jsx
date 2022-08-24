import React from 'react';
import CardCarousel from '../../../components/carousel/CardCarousel';
import { genres } from '../../../components/carousel/genres';

function TestCardCarousel() {
  const data = genres;
  return (
    <div>
      <CardCarousel data={data} />
    </div>
  );
}

export default TestCardCarousel;
