import React from 'react';
import JumbotronContainer from '../../containers/Jumbotron';
import FooterContainer from '../../containers/Footer';
import FaqsContainer from '../../containers/Faqs';

const HomePage = (props) => {
  return (
    <>
      <FaqsContainer />
      <JumbotronContainer />
      <FooterContainer />
    </>
  );
};
export default HomePage;
