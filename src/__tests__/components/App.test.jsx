import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { App } from '../../components';
import { FirebaseContext } from '../../context/firebase';
import { useAuthListener } from '../../hooks';

jest.mock('../../hooks');

const mockFirebase = {
  auth: jest.fn(() => ({
    currentUser: {
      displayName: 'Karl',
      photoURL: 1,
      email: 'karlhadwen@gmail.com',
    },
    signOut: jest.fn(() => Promise.resolve('I am signed out!')),
  })),
  firestore: jest.fn(() => ({
    collection: jest.fn(() => ({
      get: jest.fn(() => Promise.resolve('I get content!')),
      add: jest.fn(() => Promise.resolve('I add content!')),
    })),
  })),
};

describe('<App />', () => {
  it('renders the <App /> Home Page', () => {
    const firebase = mockFirebase;
    const { container } = render(
      <FirebaseContext.Provider value={{ firebase }}>
        <App />
      </FirebaseContext.Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the <App /> Sign in Page', () => {
    const firebase = mockFirebase;
    const { container, getByText } = render(
      <FirebaseContext.Provider value={{ firebase }}>
        <App />
      </FirebaseContext.Provider>
    );

    fireEvent.click(getByText('Sign In'));
    expect(getByText('Loading...')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the <App /> Sign Up Page', async () => {
    const firebase = mockFirebase;
    const { container, getByText } = render(
      <FirebaseContext.Provider value={{ firebase }}>
        <App />
      </FirebaseContext.Provider>
    );
    fireEvent.click(getByText('Sign up now.'));
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the <App /> Browse Page', async () => {
    const firebase = mockFirebase;
    useAuthListener.mockReturnValue({});
    const { container } = render(
      <FirebaseContext.Provider value={{ firebase }}>
        <App />
      </FirebaseContext.Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
