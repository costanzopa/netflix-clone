import React from 'react';
import { render } from '@testing-library/react';
import { NotFoundPage } from '../../pages';

jest.mock('react-router-dom', () => ({
  Link: 'a',
}));

test('renders the NotFound Page', () => {
  const { getByText } = render(<NotFoundPage />);
  expect(getByText('Lost Your Way')).toBeTruthy();
});
