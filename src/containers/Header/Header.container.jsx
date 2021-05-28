import React from 'react';
import { Header, Language } from '../../components';
import * as ROUTES from '../../constants/Routes';
import logo from '../../logo.svg';

const HeaderContainer = ({ children }) => {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        <Header.RightSideGroup>
          <Language>
            <Language.Select>
              <Language.Option>English</Language.Option>
              <Language.Option>Español</Language.Option>
            </Language.Select>
          </Language>
          <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
        </Header.RightSideGroup>
      </Header.Frame>
      {children}
    </Header>
  );
};
export default HeaderContainer;
