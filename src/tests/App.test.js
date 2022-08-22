import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('funcionalidade do link "Home"', () => {
  const { history } = renderWithRouter(<App />);

  const homeLink = screen.getByRole('link', { name: 'Home' });
  expect(homeLink).toBeInTheDocument();
  userEvent.click(homeLink);

  const { pathname } = history.location;
  expect(pathname).toBe('/');
});

test('funcionalidade do link "About"', () => {
  const { history } = renderWithRouter(<App />);

  const aboutLink = screen.getByRole('link', { name: 'About' });
  expect(aboutLink).toBeInTheDocument();
  userEvent.click(aboutLink);

  const { pathname } = history.location;
  expect(pathname).toBe('/about');
});

test('funcionalidade do link "Favorite Pokémons"', () => {
  const { history } = renderWithRouter(<App />);

  const favoritesLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
  expect(favoritesLink).toBeInTheDocument();
  userEvent.click(favoritesLink);

  const { pathname } = history.location;
  expect(pathname).toBe('/favorites');
});

test('redireciona à "página Not Found" ao entrar em uma URL desconhecida', () => {
  const { history } = renderWithRouter(<App />);

  history.push('/urlquenaoexiste');
  // const notFoundTitle = screen.getByRole('heading',
  //  { level: 2 });

  const notFoundTitle = screen.getByText('Page requested not found');
  expect(notFoundTitle).toBeInTheDocument();
});
