const user = require('./models/User.js')
const Post = require('./models/Post.js')
const seedData = require('./seeds.json')

user.remove({}).then(() => {
  return user.collection.insert(seedData)
}).then(() => {
  process.exit()
})
