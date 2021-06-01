import React from 'react';
import { Header, Profiles } from '../../components';
import * as ROUTES from '../../constants/Routes';
import logo from '../../logo.svg';

const SelectProfileContainer = ({ user, setProfile }) => {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        </Header.Frame>
        <Profiles>
          <Profiles.Title>Who's watching?</Profiles.Title>
          <Profiles.List>
            <Profiles.User
              onClick={() =>
                setProfile({
                  displayName: user.displayName,
                  photoURL: user.photoURL,
                })
              }
              data-testid="user-profile"
            >
              <Profiles.Picture src={user.photoURL} />
              <Profiles.Name>{user.displayName}</Profiles.Name>
            </Profiles.User>
          </Profiles.List>
        </Profiles>
      </Header>
    </>
  );
};
export default SelectProfileContainer;
