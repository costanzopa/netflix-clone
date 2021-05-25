import React from 'react';
import JumbotronContainer from '../../containers/Jumbotron';
import FooterContainer from '../../containers/Footer';
import FaqsContainer from '../../containers/Faqs';

const HomePage = (props) => {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
};
export default HomePage;
