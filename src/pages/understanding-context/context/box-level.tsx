import { createContext, useContext } from 'react';

export const BoxLevelContext = createContext(0);

export const useBoxLevel = () => {
  const boxLevel = useContext(BoxLevelContext);

  if (boxLevel === undefined) {
    throw new Error(
      'useBoxLevel 혹은 BoxLevelContext 안에서만 사용이 가능합니다.'
    );
  }

  return boxLevel;
};
