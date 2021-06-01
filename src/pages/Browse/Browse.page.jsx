import React from 'react';
import { BrowseContainer } from '../../containers';
import { useContent } from '../../hooks';
import { selectionFilter } from '../../utils';

const BrowsePage = (props) => {
  const { series } = useContent('series');
  const { films } = useContent('films');

  const slides = selectionFilter({ series, films });

  return <BrowseContainer slides={slides}></BrowseContainer>;
};
export default BrowsePage;
