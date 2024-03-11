import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import routes from './routes';

const context = describe;

describe('App', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [`${path}`] });
    render(<RouterProvider router={router} />);
  }

  context('when route /', () => {
    it('', () => {
      renderRouter('/');
      screen.getByText('This is Home');
    });
  });

  context('when route /home', () => {
    it('', () => {
      renderRouter('/home');
      screen.getByText('This is Home');
    });
  });

  context('when route /about', () => {
    it('', () => {
      renderRouter('/about');
      screen.getByText('This is About');
    });
  });

  context('when route /career', () => {
    it('', () => {
      renderRouter('/career');
      screen.getByText('This is Career');
    });
  });

  context('when route /logout', () => {
    it('redirects to the home page', () => {
      renderRouter('/logout');
      screen.getByText('This is Home');
    });
  });
});
