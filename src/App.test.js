import { render, screen } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

test('renders learn react link', () => {
  const div = document.createElement("div")
  ReactDOM.render(<App></App>, div)
});