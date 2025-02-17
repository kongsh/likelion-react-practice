import { Recipe, Recipes } from '../types';

const ENDPOINT = 'https://dummyjson.com/recipes';

interface Options {
  q?: string;
  limit?: number;
  startIndex?: number;
  fields?: string;
  sortBy?: string;
  order?: 'asc' | 'desc';
}

export const getRecipes = async ({
  q = '',
  limit = 10,
  startIndex = 0,
  fields = '',
  sortBy = 'id',
  order = 'asc',
}: Options = {}) => {
  let requestQuery = `${ENDPOINT}/`;

  if (q.trim().length > 0) {
    requestQuery += `search/?q=${q}`;
  }

  if (limit) {
    requestQuery += requestQuery.includes('?')
      ? `&limit=${limit}`
      : `?limit=${limit}`;
  }

  if (startIndex) {
    requestQuery += `&skip=${startIndex - 1}`;
  }

  if (fields.trim().length > 0) {
    requestQuery += `&select=${fields}`;
  }

  if (sortBy) {
    requestQuery += `&sortBy=${sortBy}`;
  }

  if (order) {
    requestQuery += `&order=${order}`;
  }

  console.log(requestQuery);

  return (await fetch(requestQuery).then((response) =>
    response.json()
  )) as Recipes;
};

export const getRecipeById = async (id: string | number) => {
  return (await fetch(`${ENDPOINT}/${id}`).then((response) =>
    response.json()
  )) as Recipe;
};
