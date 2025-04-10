export const handleFileContent = (content) => {
    const resultPart = content.split("[Result]:")[1].trim();
    return resultPart
      .split(",")
      .map(item => item.trim()) 
      .filter(item => item); 
};
  