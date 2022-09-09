// sol 1.
/*function repeat(operation, num) {
    if (num === 0) return
    return (operation, --num)
}
module.exports = repeat*/
// sol 2.
const repeat = (operation, num) => {
    if (num === 0) return (operation.num--)
}
module.exports = repeat