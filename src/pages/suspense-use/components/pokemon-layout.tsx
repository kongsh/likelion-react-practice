import { tm } from '@/utils/tw-merge';

function PokemonLayout({ children }: { children: React.ReactNode }) {
  return (
    <figure
      className={tm(
        'flex gap-5 justify-center items-center',
        'border-4 border-black/10 rounded-full',
        'h-42 transition-colors duration-250 ease-in-out ',
        'hover:border-black'
      )}
    >
      {children}
    </figure>
  );
}

export default PokemonLayout;
