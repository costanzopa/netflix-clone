import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { SignUpPage } from '../../pages';
import { FirebaseContext } from '../../context/firebase';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({}),
  Link: 'a',
}));

describe('<SignUpPage />', () => {
  it('renders the sign up page with a form submission', async () => {
    const firebase = {
      auth: jest.fn(() => ({
        createUserWithEmailAndPassword: jest.fn(() =>
          Promise.resolve({
            user: {
              updateProfile: jest.fn(() => Promise.resolve('I am signed up!')),
            },
          })
        ),
      })),
    };
    const { getByTestId, getByPlaceholderText, queryByTestId } = render(
      <Router>
        <FirebaseContext.Provider value={{ firebase }}>
          <SignUpPage />
        </FirebaseContext.Provider>
      </Router>
    );

    await act(async () => {
      fireEvent.change(getByPlaceholderText('First Name'), {
        target: { value: 'Pablo' },
      });
      fireEvent.change(getByPlaceholderText('Email Address'), {
        target: { value: 'costanzpa@gmail.com' },
      });
      fireEvent.change(getByPlaceholderText('Password'), {
        target: { value: 'password' },
      });
      await fireEvent.click(getByTestId('sign-up'));

      expect(await getByPlaceholderText('Email Address').value).toBe(
        'costanzpa@gmail.com'
      );
      expect(await getByPlaceholderText('Password').value).toBe('password');
      expect(queryByTestId('error')).toBeFalsy();
    });
  });

  it('renders the sign up page with a form submission on error', async () => {
    const firebase = {
      auth: jest.fn(() => ({
        createUserWithEmailAndPassword: jest.fn(() => {
          const error = {
            message: 'I am signed in!',
          };
          return Promise.reject(error);
        }),
      })),
    };

    const { getByTestId, getByPlaceholderText } = render(
      <Router>
        <FirebaseContext.Provider value={{ firebase }}>
          <SignUpPage />
        </FirebaseContext.Provider>
      </Router>
    );

    await act(async () => {
      fireEvent.change(getByPlaceholderText('First Name'), {
        target: { value: 'Pablo' },
      });
      fireEvent.change(getByPlaceholderText('Email Address'), {
        target: { value: 'costanzpa@gmail.com' },
      });
      fireEvent.change(getByPlaceholderText('Password'), {
        target: { value: 'password' },
      });
    });

    fireEvent.click(getByTestId('sign-up'));
    await waitFor(() => getByTestId('error'));
    expect(getByTestId('error')).toBeTruthy();
  });
});
