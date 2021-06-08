import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { BrowsePage } from '../../pages';
import { FirebaseContext } from '../../context/firebase';
import { useContent } from '../../hooks';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({}),
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
          },
        ],
      },
    ],
  }),
}));

jest.mock('../../hooks');

describe('<BrowsePage />', () => {
  it('renders the browse page with <SelectProfileContainer />', async () => {
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
    useContent.mockReturnValue({});
    const { getByTestId, getByPlaceholderText, queryByTestId, debug } = render(
      <Router>
        <FirebaseContext.Provider value={{ firebase }}>
          <BrowsePage />
        </FirebaseContext.Provider>
      </Router>
    );
  });
});
