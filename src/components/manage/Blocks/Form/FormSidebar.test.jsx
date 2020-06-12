import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';

import FormSidebar from './FormSidebar';

const mockStore = configureStore();

test('renders an Form Block Sidebar component', () => {
  const store = mockStore({
    content: {
      create: {},
      data: {},
    },
    intl: {
      locale: 'en',
      messages: {},
    },
  });
  const component = renderer.create(
    <Provider store={store}>
      <FormSidebar
        data={{ url: 'image', alt: 'alternate text' }}
        block="1234"
        pathname="/news"
        onChangeBlock={() => {}}
        openObjectBrowser={() => {}}
        resetSubmitUrl={() => {}}
      />
    </Provider>,
  );
  const json = component.toJSON();
  expect(json).toMatchSnapshot();
});
