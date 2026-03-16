export const formatBaseAlt = (brandName: string, modelName: string): string => {
  return `${brandName}-${modelName}`;
};

export const formatImages = (images: Array<string>, baseAlt: string) => {
  return images.map((image, index) => ({
    src: image,
    alt: `${baseAlt}-${index + 1}`,
  }));
};

export const formatImage = (image: string, baseAlt: string) => {
  return {
    src: image,
    alt: `${baseAlt}`,
  };
};

export const formatSearchTitle = (q: string) => {
  return `"${q}"의 검색 결과`;
};
