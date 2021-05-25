import React from 'react';

import { Container, Select, Option } from './Language.style';

const Language = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Language.Select = ({ children, ...restProps }) => {
  return <Select {...restProps}>{children}</Select>;
};

Language.Option = ({ children, ...restProps }) => {
  return <Option {...restProps}>{children}</Option>;
};

export default Language;
