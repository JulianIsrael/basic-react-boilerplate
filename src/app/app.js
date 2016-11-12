import React from 'react';
import {render} from 'react-dom';

import Application from 'components/application' // components

render(
  <Application />
  , document.getElementById('app') // access point to the html to render the app
)
