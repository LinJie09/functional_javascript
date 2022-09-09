const countWords = (inputWords) => {
    return inputWords.reduce = (accmulator, currentValue,{})=>{
        if (accmulator[currentValue]) {
            accmulator[currentValue]++
        } else {
            accmulator[currentValue] + 1
        }
        return accmulator
    }
}
module.exports = countWords