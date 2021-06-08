import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowseContainer } from '../../containers';
import { selectionFilter } from '../../utils';
import { FirebaseContext } from '../../context/firebase';

jest.mock('react-router-dom', () => ({
  Link: 'a',
}));

jest.mock('../../utils', () => ({
  selectionFilter: () => ({
    series: [
      {
        title: 'Documentaries',
        data: [
          {
            id: 'series-1x',
            title: 'Tiger King',
            description:
              'An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.',
            genre: 'documentaries',
            maturity: '18',
            slug: 'tiger-king',
            docId: 'random143',
          },
        ],
      },
    ],
    films: [
      {
        title: 'Suspense',
        data: [
          {
            id: 'film-1x',
            title: 'Amanda Knox',
            description:
              'Amanda Marie Knox is an American woman who spent almost four years in an Italian prison.',
            genre: 'documentaries',
            maturity: '12',
            slug: 'amanda-knox',
            docId: 'random123',
          },
        ],
      },
    ],
  }),
}));

describe('<BrowseContainer />', () => {
  it('renders the <BrowseContainer />', () => {
    const films = {};
    const series = {};
    const slides = selectionFilter({ series, films });
    const firebase = {
      auth: jest.fn(() => ({
        currentUser: {
          displayName: 'Pablo',
          photoURL: 1,
          email: 'costanzopa@gmail.com',
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
    const { getByTestId } = render(
      <FirebaseContext.Provider value={{ firebase }}>
        <BrowseContainer slides={slides} />
      </FirebaseContext.Provider>
    );

    jest.useFakeTimers();
    fireEvent.click(getByTestId('user-profile'));
  });

  it('renders the <BrowseContainer /> click profile', () => {
    const films = {};
    const series = {};
    const slides = selectionFilter({ series, films });
    const firebase = {
      auth: jest.fn(() => ({
        currentUser: {
          displayName: 'Pablo',
          photoURL: 1,
          email: 'costanzopa@gmail.com',
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
    const { getByTestId, getByText } = render(
      <FirebaseContext.Provider value={{ firebase }}>
        <BrowseContainer slides={slides} />
      </FirebaseContext.Provider>
    );

    fireEvent.click(getByTestId('user-profile'));
    fireEvent.click(getByText('Films'));
    fireEvent.click(getByText('Series'));

    fireEvent.click(getByTestId('header-profile-picture'));

    fireEvent.click(getByText('Sign out'));
  });

  it('renders the <BrowseContainer /> searching', async () => {
    const films = {};
    const series = {};
    const slides = selectionFilter({ series, films });
    const firebase = {
      auth: jest.fn(() => ({
        currentUser: null,
        signOut: jest.fn(() => Promise.resolve('I am signed out!')),
      })),
      firestore: jest.fn(() => ({
        collection: jest.fn(() => ({
          get: jest.fn(() => Promise.resolve('I get content!')),
          add: jest.fn(() => Promise.resolve('I add content!')),
        })),
      })),
    };
    const { getByTestId, queryByText } = render(
      <FirebaseContext.Provider value={{ firebase }}>
        <BrowseContainer slides={slides} />
      </FirebaseContext.Provider>
    );

    fireEvent.click(getByTestId('user-profile'));
  });
});
