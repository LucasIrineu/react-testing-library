import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import { Pokedex } from '../pages';
import pokemons from '../data';

const isPokemonFavoriteById = {
  10: true,
  23: true,
  25: true,
  65: true,
  78: true,
  143: true,
  148: true,
  151: true,
};

test('A imagem do pokemon possui o "src" e "alt" correto', () => {
  renderWithRouter(<Pokedex
    pokemons={ pokemons }
    isPokemonFavoriteById={ isPokemonFavoriteById }
  />);

  const { name, image } = pokemons[0];

  const pokemonImage = screen.getByAltText(`${name} sprite`);
  const pokemonName = screen.getByTestId('pokemon-name');

  expect(pokemonImage).toBeInTheDocument();
  expect(pokemonName).toBeInTheDocument();

  expect(pokemonImage).toHaveAttribute('src', image);
  expect(pokemonName).toHaveTextContent(name);
});

test('A imagem de favorito star possui o "src" e "alt" correto', () => {
  renderWithRouter(<Pokedex
    pokemons={ pokemons }
    isPokemonFavoriteById={ isPokemonFavoriteById }
  />);

  const { name } = pokemons[0];

  const favSrc = screen.getByAltText(`${name} is marked as favorite`);

  expect(favSrc).toHaveAttribute('src', '/star-icon.svg');
});

test('É exibido na tela um texto com o tipo do pokemon', () => {
  renderWithRouter(<Pokedex
    pokemons={ pokemons }
    isPokemonFavoriteById={ isPokemonFavoriteById }
  />);

  const { type } = pokemons[0];

  const pokemonTypeText = screen.getByTestId('pokemon-type');
  expect(pokemonTypeText).toBeInTheDocument();

  expect(pokemonTypeText).toHaveTextContent(type);
});

test('É exibido na tela um link com o href /pokemons/<id>', () => {
  const { history } = renderWithRouter(<Pokedex
    pokemons={ pokemons }
    isPokemonFavoriteById={ isPokemonFavoriteById }
  />);

  const { id } = pokemons[0];

  const moreDetailsLink = screen.getByText('More details');

  expect(moreDetailsLink).toBeInTheDocument();
  userEvent.click(moreDetailsLink);

  const { pathname } = history.location;
  expect(pathname).toBe(`/pokemons/${id}`);
});
