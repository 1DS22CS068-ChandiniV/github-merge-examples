import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Exam from './Components/Exam';
import "bootstrap/dist/css/bootstrap.min.css";
import QuestionEntry from './QuestionEntry';

ReactDOM.render(
  <QuestionEntry start="25" end="30"/>,
  document.getElementById('root')
);

