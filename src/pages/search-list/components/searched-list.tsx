import { tm } from '@/utils/tw-merge';
import { ColorMoodItem } from '../types';
import Card from './card';

interface SearchedListProps {
  list: ColorMoodItem[];
  onUpdate: (item: ColorMoodItem, isFavorited: boolean) => void;
}

function SearchedList({ list, onUpdate }: SearchedListProps) {
  return (
    <section>
      <h3 className="sr-only">검색된 리스트</h3>
      <ul className={tm('flex flex-col gap-12')}>
        {list.map((item) => (
          <Card key={item.id} item={item} onUpdate={onUpdate} />
        ))}
      </ul>
    </section>
  );
}

export default SearchedList;
