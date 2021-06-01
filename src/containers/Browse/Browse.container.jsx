import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../../context/firebase';
import SelectProfileContainer from '../SelectProfile';

const BrowseContainer = ({ slides }) => {
  const [profile, setProfile] = useState({});

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  return <SelectProfileContainer user={user} setProfile={setProfile} />;
};
export default BrowseContainer;
