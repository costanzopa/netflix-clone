import React from 'react';
import { render, fireEvent, cleanup, act } from '@testing-library/react';
import { BrowseContainer } from '../../containers';
import { selectionFilter } from '../../utils';
import { FirebaseContext } from '../../context/firebase';

afterEach(cleanup);

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
    const slides = selectionFilter();
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
    render(
      <FirebaseContext.Provider value={{ firebase }}>
        <BrowseContainer slides={slides} />
      </FirebaseContext.Provider>
    );
  });

  it('renders the <BrowseContainer /> click profile', async () => {
    const slides = selectionFilter();
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

    fireEvent.click(getByTestId('user-profile'));
  });

  it('renders the <BrowseContainer /> signout', () => {
    const slides = selectionFilter();
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
    fireEvent.click(getByTestId('header-profile-picture'));
    fireEvent.click(getByText('Sign out'));
  });

  it('renders the <BrowseContainer /> toggle films series', () => {
    const slides = selectionFilter();
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
    fireEvent.click(getByTestId('random143'));
  });

  it('renders the <BrowseContainer /> searching', async () => {
    const slides = selectionFilter();
    const firebase = {
      auth: jest.fn(() => ({
        currentUser: {
          displayName: 'Pablo assss',
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

    fireEvent.click(getByTestId('user-profile'));
    fireEvent.click(getByTestId('search-click'));
    await act(async () => {
      fireEvent.change(getByTestId('search-input'), {
        target: { value: 'tiger' },
      });
      await new Promise((res) =>
        setTimeout(() => {
          expect(true).toBe(true);
          res();
        }, 1500)
      );
    });
  });

  it('renders the <BrowseContainer /> without user', async () => {
    const slides = selectionFilter();
    const firebase = {
      auth: jest.fn(() => ({
        currentUser: null,
      })),
    };
    const { getByTestId, getByAltText } = render(
      <FirebaseContext.Provider value={{ firebase }}>
        <BrowseContainer slides={slides} />
      </FirebaseContext.Provider>
    );

    fireEvent.click(getByTestId('user-profile'));
    fireEvent.click(getByAltText('Netflix'));
    fireEvent.click(getByTestId('user-profile'));
  });
});
