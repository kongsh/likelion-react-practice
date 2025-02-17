import RecipeCreate from './components/RecipeCreate';
import RecipeDelete from './components/RecipeDelete';
import RecipeEdit from './components/RecipeEdit';
import RecipeList from './components/RecipeList';
import RecipeSingle from './components/RecipeSingle';

function DataFetchingPage() {
  return (
    <section className="flex flex-col gap-5 my-5">
      <h2 className="text-2xl font-medium">데이터 가져오기</h2>
      <h3 className="text-xl font-medium">레시피 변형(Data Mutation)</h3>
      <RecipeDelete />
      <RecipeCreate />
      <RecipeEdit />
      <hr />
      <h3 className="text-xl font-medium">레시피 리스트</h3>
      <RecipeList />

      <hr />
      <h3 className="text-xl font-medium">레시피 싱글</h3>
      <RecipeSingle />
    </section>
  );
}

export default DataFetchingPage;
