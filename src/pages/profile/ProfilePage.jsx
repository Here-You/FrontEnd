import React from 'react';
import { useParams } from 'react-router-dom';

import { useMateProfileSearch } from '@/hooks/mate/useMateProfileSearch';

const ProfilePage = () => {
  const { userId } = useParams();
  const { data, loading, error } = useMateProfileSearch(userId);
  console.log(data);
  return <div>ProfilePage</div>;
};

export default ProfilePage;
