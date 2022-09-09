//map先把obj轉成字串
const getShortMessages = (messages) => {
    //注意key值
    return messages.map(mes => mes.message).filter(item => item.length < 50)
}
module.exports = getShortMessages