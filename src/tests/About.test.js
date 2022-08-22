import React from 'react';
import { screen } from '@testing-library/react';
import { About } from '../pages';
import renderWithRouter from '../renderWithRouter';

test('contém informações sobre a Pokédex', () => {
  renderWithRouter(<About />);
  const aboutH2 = screen.getByText('About Pokédex');
  expect(aboutH2).toBeInTheDocument();
});

test('contém 2 paragrafos com texto sobre a Pokedéx', () => {
  renderWithRouter(<About />);
  const img = screen.getByRole('img');
  expect(img).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
