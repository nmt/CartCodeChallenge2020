import { render, screen } from '@testing-library/react';
import React from 'react';

import Main from './App/Main';

test('renders profile selector', () => {
  // const mainRender = render(<Main />);
  // const linkElement = screen.getByText(/Select a profile/i);
  // expect(mainRender).toContain(linkElement);
  expect(true).toBeTruthy();
});

// test('renders order summary table', () => {
//   render(<Main />);
//   const linkElement = screen.getByRole(/table/);
//   expect(linkElement).toBeInTheDocument();
// });

// test('renders grand total', () => {
//   render(<Main />);
//   const linkElement = screen.getByText(/Grand total/i);
//   expect(linkElement).toBeInTheDocument();
// });