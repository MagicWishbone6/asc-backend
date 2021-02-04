const user = require('./models/User.js')
const post = require('./models/Post.js')
const seedData = require('./seeds.json')

user.remove({}).then(() => {
  return user.collection.insert(seedData)
}).then(() => {
  process.exit()
})

post.remove({}).then(() => {
    return post.collection.insert(seedData)
  }).then(() => {
    process.exit()
  })