import { tm } from '@/utils/tw-merge';
import { ColorMoodItem } from '../types';
import Card from './card';

interface SearchedListProps {
  query: string;
  list: ColorMoodItem[];
  onUpdate: (item: ColorMoodItem, isFavorited: boolean) => void;
}

function SearchedList({ query, list, onUpdate }: SearchedListProps) {
  const word = query.toLowerCase();

  const filteredList = list.filter(
    (item) =>
      item.title.includes(word) ||
      item.description.includes(word) ||
      item.tags.includes(word)
  );

  return (
    <section>
      <h3 className="sr-only">검색된 리스트</h3>
      <ul className={tm('flex flex-col gap-12')}>
        {filteredList.map((item) => (
          <Card key={item.id} item={item} onUpdate={onUpdate} />
        ))}
      </ul>
    </section>
  );
}

export default SearchedList;
