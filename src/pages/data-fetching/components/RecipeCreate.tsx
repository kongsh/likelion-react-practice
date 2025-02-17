// POST

import { useEffect, useState } from 'react';
import { Recipe, Recipes } from '../types';
import { addRecipe, getRecipes } from '../lib/recipes';
import { Spinner } from '@mynaui/icons-react';
import SubmitButton from './SubmitButton';
import delay from '@/utils/delay';

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
    await delay();

    const newRecipe = await addRecipe({
      name: formData.get('name') as string,
    });

    if (data) {
      const nextData: Recipes = {
        ...data,
        recipes: [...data.recipes, newRecipe],
      };

      setData(nextData);
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
