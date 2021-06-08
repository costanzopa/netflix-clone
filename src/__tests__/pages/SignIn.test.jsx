import React from 'react';
import { render, fireEvent, cleanup, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { SignInPage } from '../../pages';
import { FirebaseContext } from '../../context/firebase';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({}),
  Link: 'a',
}));

afterEach(cleanup);

describe('<SignInPage />', () => {
  it('renders the sign in page with a form submission', async () => {
    const firebase = {
      auth: jest.fn(() => ({
        signInWithEmailAndPassword: jest.fn(() =>
          Promise.resolve('I am signed in!')
        ),
      })),
    };
    const { getByTestId, getByPlaceholderText, queryByTestId } = render(
      <Router>
        <FirebaseContext.Provider value={{ firebase }}>
          <SignInPage />
        </FirebaseContext.Provider>
      </Router>
    );

    await act(async () => {
      fireEvent.change(getByPlaceholderText('Email Address'), {
        target: { value: 'costanzopa@gmail.com' },
      });
      fireEvent.change(getByPlaceholderText('Password'), {
        target: { value: 'password' },
      });
      await fireEvent.click(getByTestId('sign-in'));

      expect(await getByPlaceholderText('Email Address').value).toBe(
        'costanzopa@gmail.com'
      );
      expect(await getByPlaceholderText('Password').value).toBe('password');
      expect(queryByTestId('error')).toBeFalsy();
    });
  });

  it('renders the sign in page with a form submission on error', async () => {
    const firebase = {
      auth: jest.fn(() => ({
        signInWithEmailAndPassword: jest.fn(() => {
          const error = {
            message: 'I am signed in!',
          };
          return Promise.reject(error);
        }),
      })),
    };

    const { getByTestId } = render(
      <Router>
        <FirebaseContext.Provider value={{ firebase }}>
          <SignInPage />
        </FirebaseContext.Provider>
      </Router>
    );

    fireEvent.click(getByTestId('sign-in'));
    await waitFor(() => getByTestId('sign-in-error'));
    expect(getByTestId('sign-in-error')).toBeTruthy();
  });
});
