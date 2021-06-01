import React, { useState, useContext, useEffect } from 'react';
import { FirebaseContext } from '../../context/firebase';
import SelectProfileContainer from '../SelectProfile';
import { Loading } from '../../components';

const BrowseContainer = ({ slides }) => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  return profile.displayName ? (
    <>{loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}</>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
};
export default BrowseContainer;
