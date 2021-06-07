import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../pages/Home';

jest.mock('react-router-dom', () => ({
  Link: 'a',
}));

test('renders the homepage', () => {
  const { getAllByText, getAllByPlaceholderText } = render(<Home />);
  expect(getAllByText('Watch anywhere. Cancel at any time.')).toBeTruthy();
  expect(getAllByPlaceholderText('Email address')).toBeTruthy();
  expect(
    getAllByText(
      'Ready to watch? Enter your email to create or restart your membership.'
    )
  ).toBeTruthy();
});
