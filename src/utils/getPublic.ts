const { BASE_URL } = import.meta.env;

export const getPublic = (filePath: string): string => BASE_URL + filePath;

export const getPublicAsset = (filePath: string, imagesDirName = 'images') =>
  getPublic(`${imagesDirName}/${filePath}`);
