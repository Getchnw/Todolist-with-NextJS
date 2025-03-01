'use client';
import Profile from "../component/Profile";
import { useEffect } from "react"; 
import { useState } from "react";
import { typeprofile } from "../type";

const ProfilePage = () => {
  const [profile, setProfile] = useState<typeprofile>();

  useEffect(() => {
    const storedData = localStorage.getItem("ProfileData");
    if (storedData) {
      const data_profile = JSON.parse(storedData);
      setProfile(data_profile);
    }
  }, []);
  return (
    <Profile profile={profile}/>
  )
}
export default ProfilePage
