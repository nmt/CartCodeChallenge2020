import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders profile selector', () => {
  render(<App />);
  const linkElement = screen.getByText(/Select a profile/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders order summary table', () => {
  render(<App />);
  const linkElement = screen.getByRole(/table/);
  expect(linkElement).toBeInTheDocument();
});

test('renders grand total', () => {
  render(<App />);
  const linkElement = screen.getByText(/Grand total/i);
  expect(linkElement).toBeInTheDocument();
});
