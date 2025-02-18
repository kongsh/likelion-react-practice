import { useEffect } from 'react';

function useDocumentTitle(title: string, base?: string, divider = '|') {
  useEffect(() => {
    if (base) {
      document.title = `${title} ${divider} ${base}`;
    } else {
      document.title = title;
    }
  }, [title, divider, base]);
}

export default useDocumentTitle;
