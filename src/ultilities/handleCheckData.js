export const isAllDataFilled=(viralData)=> {
    return Object.values(viralData).every(item => item.data !== undefined);
}