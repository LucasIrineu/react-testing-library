import React from 'react';
import { screen } from '@testing-library/react';
import { NotFound } from '../pages';
import renderWithRouter from '../renderWithRouter';

test('É exibido na tela um h2 com o texto Page requested not found', () => {
  renderWithRouter(<NotFound />);
  const notFoundTextFirst = screen.getByRole('heading', { level: 2 });
  const notFoundTextSecond = screen.getByText('Page requested not found');
  expect(notFoundTextFirst).toBeInTheDocument();
  expect(notFoundTextSecond).toBeInTheDocument();

  const areTheyTheSame = notFoundTextFirst === notFoundTextSecond;
  expect(areTheyTheSame).toBe(true);
});

test('Existe uma imagem com o src https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
  renderWithRouter(<NotFound />);

  const notFoundImg = screen
    .getByAltText('Pikachu crying because the page requested was not found');

  expect(notFoundImg).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
