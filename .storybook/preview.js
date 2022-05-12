import theme from '../src/styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/styles/GlobalStyle';
import { MemoryRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../src/reducers';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const store = createStore(
  rootReducer,
  applyMiddleware(promiseMiddleware, ReduxThunk)
);

export const decorators = [
  (Story) => (
    <MemoryRouter initialEntries={['/']}>
      <Provider store={store}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      </Provider>
    </MemoryRouter>
  ),
];
