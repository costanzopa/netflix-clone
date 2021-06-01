import React from 'react';
import { useContent } from '../../hooks/use-content';

const BrowsePage = (props) => {
  const { series } = useContent('series');
  const { films } = useContent('films');

  return <div>Browse Paage</div>;
};
export default BrowsePage;
