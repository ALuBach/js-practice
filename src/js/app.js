//import hello from './hello';
import hello from './hello';
import React from 'react';
import ReactDom from 'react-dom';
import style from '../css/style';

hello();

ReactDom.render(
  <h1>Hello,Front!</h1>,
  document.getElementById('root')
);
