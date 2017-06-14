let checkUsersValid = (goodUsers) => {
    return allUsersValid = (submittedUsers) => {
        return submittedUsers.every( user => goodUsers.map( user => user.id ).indexOf(user.id) > -1 )
    };
}

module.exports = checkUsersValid
