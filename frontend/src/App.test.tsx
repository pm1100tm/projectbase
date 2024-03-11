import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import App from './App';

const context = describe;

describe('App', () => {
  context('when route /', () => {
    it('', () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>,
      );

      screen.getAllByText(/Home/);
    });
  });

  context('when route /home', () => {
    it('', () => {
      render(
        <MemoryRouter initialEntries={['/home']}>
          <App />
        </MemoryRouter>,
      );

      screen.getAllByText(/Home/);
    });
  });

  context('when route /about', () => {
    it('', () => {
      render(
        <MemoryRouter initialEntries={['/about']}>
          <App />
        </MemoryRouter>,
      );

      screen.getAllByText(/About/);
    });
  });

  context('when route /career', () => {
    it('', () => {
      render(
        <MemoryRouter initialEntries={['/career']}>
          <App />
        </MemoryRouter>,
      );

      screen.getAllByText(/Career/);
    });
  });
});
