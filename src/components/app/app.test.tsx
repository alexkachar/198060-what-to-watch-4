
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import App from './app';
import store from '../../test-data/mock-store';
import {INITIAL_MOVIES_LIMIT} from '../../constants';

const SELECTED_GENRE = `Action`;

it(`App renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <App
              selectedGenre={SELECTED_GENRE}
              moviesLimit={INITIAL_MOVIES_LIMIT}
              loading={false}
              isAuth={false}
              onGenreSelect={jest.fn()}
              onShowMoreClick={jest.fn()}
              onLogin={jest.fn()}
            />
          </BrowserRouter>
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
