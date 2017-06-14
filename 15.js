let loadUsers = (userIds, load, done) => {
  let users = [];
  let count = 0;
  userIds.forEach( (userId, i) => {
  	load(userId, function(data) {
  		users[ i ] = data;
  		++count;
  		if(count === userIds.length) return done(users);
  	})
  })

}

module.exports = loadUsers
