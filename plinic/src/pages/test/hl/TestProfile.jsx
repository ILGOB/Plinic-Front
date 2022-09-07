import React from 'react';
import Profile from '../../../components/profile/Profile';

function TestProfile() {
  return (
    <>
      <Profile width={100} img={'https://i.pinimg.com/736x/81/3d/39/813d3997687c5b5d13a5e3421df8101b.jpg'} />
      <Profile width={140} editBtn />
      <Profile width={150} editBtn />
      <Profile width={200} img={'https://i.pinimg.com/originals/a1/ec/c2/a1ecc289bd9af7eec59f6f6ad43c1c14.jpg'} />
    </>
  );
}

export default TestProfile;
