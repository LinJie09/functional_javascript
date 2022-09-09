const checkUserValid = (goodUser) => {
    return function allUserValid (submittedUsers){
        return submittedUsers.every(goodUser.id === submittedUsers.id)
    }
}
module.exports = checkUserValid