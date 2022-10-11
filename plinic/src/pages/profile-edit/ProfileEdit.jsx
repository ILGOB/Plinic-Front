import React from 'react';
import RegisterUserInfo from '../../components/register-user-info/RegisterUserInfo';

function ProfileEdit() {
  const dummyData = {
    nickname: 'Lami',
    genre: ['pop', 'acoustic', 'movies'],
    profileUrl: '',
  };

  return <RegisterUserInfo isEdit={true} originData={dummyData} />;
}

export default ProfileEdit;
