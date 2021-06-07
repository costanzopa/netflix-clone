import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { App } from '../../components';
import { FirebaseContext } from '../../context/firebase';
import { firebase } from '../../lib/firabase.prod';
import { useAuthListener } from '../../hooks';

jest.mock('../../hooks');

describe('<App />', () => {
  it('renders the <App /> Home Page', () => {
    const { container } = render(
      <FirebaseContext.Provider value={{ firebase }}>
        <App />
      </FirebaseContext.Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the <App /> Sign in Page', () => {
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
    const { container, getByText } = render(
      <FirebaseContext.Provider value={{ firebase }}>
        <App />
      </FirebaseContext.Provider>
    );
    fireEvent.click(getByText('Sign up now.'));
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the <App /> Browse Page', async () => {
    useAuthListener.mockReturnValue({});
    const { container } = render(
      <FirebaseContext.Provider value={{ firebase }}>
        <App />
      </FirebaseContext.Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
