import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { Pokedex } from '../pages';
import renderWithRouter from '../renderWithRouter';
import pokemons from '../data';

const pokemonTypes = ['Electric', 'Fire',
  'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];

const isPokemonFavoriteById = {
  10: false,
  23: true,
  25: false,
  65: false,
  78: false,
  143: false,
  148: false,
  151: false,
};

test('página contém um heading h2 com o texto "Encountered pokémons"', () => {
  renderWithRouter(<App />);

  const encouteredTextFirstSearch = screen.getByRole('heading', { level: 2 });
  const encouteredTextSecondSearch = screen.getByText('Encountered pokémons');

  const areTheyTheSame = encouteredTextFirstSearch === encouteredTextSecondSearch;
  expect(areTheyTheSame).toBe(true);
});

test('botões de tipo possuem os textos e data-testid corretos', () => {
  renderWithRouter(<Pokedex
    pokemons={ pokemons }
    isPokemonFavoriteById={ isPokemonFavoriteById }
  />);

  const typeButtonsText = screen.getAllByTestId('pokemon-type-button');
  const isTheNumberOfTypeButtonsCorrect = typeButtonsText.length === pokemonTypes.length;
  expect(isTheNumberOfTypeButtonsCorrect).toBe(true);

  typeButtonsText.forEach(
    (button, index) => {
      expect(button).toHaveAttribute('data-testid', 'pokemon-type-button');
      expect(button).toHaveTextContent(pokemonTypes[index]);
    },
  );
});

test('é possível clicar no botão de filtragem All', () => {
  renderWithRouter(<Pokedex
    pokemons={ pokemons }
    isPokemonFavoriteById={ isPokemonFavoriteById }
  />);

  const allButton = screen.getByRole('button', { name: 'All' });
  expect(allButton).toBeInTheDocument();

  userEvent.click(allButton);
});
