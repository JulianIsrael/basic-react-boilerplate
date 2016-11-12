import React from 'react';

import Logo from 'components/logo';
import Divider from 'components/divider';
import { Header } from 'semantic-ui-react'

const HeaderCustom =() => {
  return (
     <Header as='h3'>
      <Divider/>
      <Logo/>
    </Header>
  );
}

export default HeaderCustom;
