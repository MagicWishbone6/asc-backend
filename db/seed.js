const User = require('./models/User')
const seedData = require('./seeds.json')

User.deleteMany({})
  .then( () => {
    return User.insertMany(seedData)
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => {process.exit()})