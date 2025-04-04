export const handleFileContent=(content)=>{
    const resultPart = content.split("Result:")[1]?.trim();
    const cleaned = resultPart.replace(/,\s*$/, "");
    const resultArray = cleaned.split(",").map(item => item.trim());
    return resultArray;
}