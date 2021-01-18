const User = require('./user')
const Movie = require('./movie')

User.belongsToMany(Movie, {through: 'User_Movie'})
Movie.belongsToMany(User, {through: 'User_Movie'})

module.exports = {
  User,
  Movie
}
