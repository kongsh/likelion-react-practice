import useDocumentTitle from '@/hooks/use-document-title';

function CustomHookPage() {
  useDocumentTitle('사용자 정의 훅 함수');

  return (
    <section className="flex flex-col gap-2">
      <h2 className="font-medium text-2xl">사용자 정의 훅 함수(Custom Hook)</h2>
    </section>
  );
}

export default CustomHookPage;
