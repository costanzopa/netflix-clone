import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import {
  Background,
  Container,
  Logo,
  RightSideGroup,
  ButtonLink,
  Feature,
  Text,
  FeatureCallOut,
  Group,
  Link,
  Picture,
  Dropdown,
  Profile,
  Search,
  SearchIcon,
  SearchInput,
  PlayButton,
} from './Header.style';

const Header = ({ bg = true, children, ...restProps }) => {
  return bg ? (
    <Background {...restProps} data-testid="header-bg">
      {children}
    </Background>
  ) : (
    children
  );
};

Header.Group = ({ children, ...restProps }) => {
  return <Group {...restProps}>{children}</Group>;
};

Header.Logo = ({ to, ...restProps }) => {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

Header.Feature = ({ children, ...restProps }) => {
  return <Feature {...restProps}>{children}</Feature>;
};

Header.Profile = ({ children, ...restProps }) => {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

Header.Frame = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Header.RightSideGroup = ({ children, ...restProps }) => {
  return <RightSideGroup {...restProps}> {children}</RightSideGroup>;
};

Header.ButtonLink = ({ children, ...restProps }) => {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.FeatureCallOut = ({ children, ...restProps }) => {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.TextLink = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>;
};

Header.Picture = ({ src, ...restProps }) => {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Dropdown = ({ children, ...restProps }) => {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restProps}>
      <SearchIcon
        onClick={() => setSearchActive((searchActive) => !searchActive)}
        data-testid="search-click"
      >
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search films and series"
        active={searchActive}
        data-testid="search-input"
      />
    </Search>
  );
};

Header.PlayButton = ({ children, ...restProps }) => {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};

export default Header;
