import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Exam from './Components/Exam';
import QuestionEntry from './Components/QuestionEntry';
import "bootstrap/dist/css/bootstrap.min.css";


/*
ReactDOM.render(
  <Exam start="25" end="30"/>,
  document.getElementById('root')
);
*/

ReactDOM.render(
  <QuestionEntry start="25" end="30"/>,
  document.getElementById('root')
);

