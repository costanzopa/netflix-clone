import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import SignIn from '../../pages/SignIn';
import { FirebaseContext } from '../../context/firebase';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({}),
  Link: 'a',
}));

describe('<SignIn />', () => {
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
          <SignIn />
        </FirebaseContext.Provider>
      </Router>
    );

    await act(async () => {
      await fireEvent.change(getByPlaceholderText('Email Address'), {
        target: { value: 'karl@gmail.com' },
      });
      await fireEvent.change(getByPlaceholderText('Password'), {
        target: { value: 'password' },
      });
      fireEvent.click(getByTestId('sign-in'));

      expect(getByPlaceholderText('Email Address').value).toBe(
        'karl@gmail.com'
      );
      expect(getByPlaceholderText('Password').value).toBe('password');
      expect(queryByTestId('error')).toBeFalsy();
    });
  });

  it('renders the sign in page with a form submission on error', async () => {
    const firebase = {
      auth: jest.fn(() => ({
        signInWithEmailAndPassword: jest.fn(() =>
          Promise.reject('I am signed in!')
        ),
      })),
    };
    const { getByTestId, getByPlaceholderText, queryByTestId } = render(
      <Router>
        <FirebaseContext.Provider value={{ firebase }}>
          <SignIn />
        </FirebaseContext.Provider>
      </Router>
    );

    await act(async () => {
      await waitFor(() =>
        fireEvent.change(getByPlaceholderText('Email Address'), {
          target: { value: 'karl@gmail.com' },
        })
      );
      await waitFor(() =>
        fireEvent.change(getByPlaceholderText('Password'), {
          target: { value: 'password' },
        })
      );
      await waitFor(() => fireEvent.click(getByTestId('sign-in')));

      expect(await getByPlaceholderText('Email Address').value).toBe('');
      expect(getByPlaceholderText('Password').value).toBe('');
    });
  });
});
