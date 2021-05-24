import React from 'react';
import {
  Container,
  Column,
  Row,
  Link,
  Title,
  Text,
  Break,
} from './Footer.style';

const Footer = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Footer.Column = ({ children, ...restProps }) => {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Row = ({ children, ...restProps }) => {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Link = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Footer.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

Footer.Break = ({ children, ...restProps }) => {
  return <Break {...restProps}>{children}</Break>;
};

export default Footer;
