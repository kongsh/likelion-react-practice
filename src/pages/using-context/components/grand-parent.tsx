import Parent from './parent';

function GrandParent() {
  return (
    <div className="flex-1 p-5 border-4 rounded-full flex justify-center">
      <Parent />
    </div>
  );
}

export default GrandParent;
