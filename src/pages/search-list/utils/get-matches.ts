interface RequiredMatches {
  title: string;
  description: string;
  tags: string[];
}

function getMatches<T extends RequiredMatches[]>(list: T, search: string): T {
  const words = search.split(' ').map((word) => word.toLowerCase().trim());

  const result = list.filter((color) =>
    words.every(
      (word) =>
        color.tags.some((tag) => tag.toLowerCase() === word) ||
        color.title.toLowerCase().includes(word) ||
        color.description.toLowerCase().includes(word)
    )
  );

  return result as T;
}

export default getMatches;
