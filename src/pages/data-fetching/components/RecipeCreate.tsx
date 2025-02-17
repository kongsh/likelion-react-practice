// POST

import { useEffect, useState } from 'react';
import { Recipe, Recipes } from '../types';
import { getRecipes } from '../lib/recipes';
import { Spinner } from '@mynaui/icons-react';
import SubmitButton from './SubmitButton';

function RecipeCreate() {
  const [data, setData] = useState<null | Recipes>(null);

  useEffect(() => {
    let ignore = false;

    getRecipes({ startIndex: 1, limit: 3 }).then((data) => {
      if (!ignore) {
        setData(data);
      }
    });

    return () => {
      ignore = true;
    };
  }, []);

  const handleAdd = async (formData: FormData) => {
    try {
      const response = await fetch('https://dummyjson.com/recipes/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('recipe'),
        }),
      });

      if (!response.ok) {
        throw new Error('레시피 추가 실패');
      }

      const addedRecipe = await response.json();

      if (data) {
        const nextData = {
          ...data,
          recipes: [...data.recipes, addedRecipe],
        };
        setData(nextData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <article>
      <h4>레시피 리스트</h4>
      <form action={handleAdd} className="flex items-center">
        <input
          type="text"
          name="recipe"
          aria-label="레시피"
          className="bg-white"
        />
        <SubmitButton />
      </form>
      {!data && (
        <div role="alert" aria-label="로딩 중...">
          <Spinner size={24} className="animate-spin opacity-50" />
        </div>
      )}
      <ul>
        {data?.recipes?.map((item: Recipe) => (
          <li key={item.id} className="p-1 border rounded">
            {item.name}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default RecipeCreate;
