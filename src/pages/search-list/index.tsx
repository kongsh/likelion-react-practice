import SearchForm from './components/search-form';
import SearchedList from './components/searched-list';

function SearchListPage() {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-react">카드 검색 리스트</h2>
      <SearchForm />
      <SearchedList />
    </section>
  );
}

export default SearchListPage;
