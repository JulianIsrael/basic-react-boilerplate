import React from 'react';

import Header from 'components/header';
import Footer from 'components/footer';
import Dragger from 'components/dragger';
import Table from 'components/table';

import style from './style.css';

const Application = (props) => {

  return (
    <div className= {style.application}>
      <Header/>
        <Dragger/>
        <Table/>
      <Footer/>
     </div>
  );
}

export default Application;
