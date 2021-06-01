import React from 'react';
import { Header } from '../../components';
import * as ROUTES from '../../constants/Routes';
import logo from '../../logo.svg';

const SelectProfileContainer = (props) => {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        </Header.Frame>
      </Header>
    </>
  );
};
export default SelectProfileContainer;
