import React from 'react';
import { screen } from '@testing-library/react';
import { FavoritePokemons } from '../pages';
import renderWithRouter from '../renderWithRouter';

test('É exibido na tela a mensagem No favorite pokemon found', () => {
  renderWithRouter(<FavoritePokemons />);
  const favoriteNotFound = screen.getByText('No favorite pokemon found');
  expect(favoriteNotFound).toBeInTheDocument();
});
