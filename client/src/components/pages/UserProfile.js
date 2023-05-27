import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/auth/AuthState';

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [state] = useAuth();
  const id = state.user && state.user._id;

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        if (id) {
          const response = await axios.get(`/api/users/${id}`);
          setUserProfile(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserProfile();
  }, [id]);

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>ID: {userProfile.user._id}</p>
      <p>User Name: {userProfile.user.name}</p>
      <p>User Department: {userProfile.user.department}</p>
      {/* 顯示其他使用者資料 */}
    </div>
  );
};

export default UserProfile;
