// importing Bluebird promises so we can Promise.map
const Promise = require('bluebird');
const db = require('./db');
//modelos
const Profile = require('./app/models/profile');
const User = require('./app/models/user');
/*const Park = require('./models/Park');
const Food = require('./models/Food');
const Location = require('./models/Location');*/

// each of the following array will be iterated and Created
const profileData = [
  {
    name: 'admin',
    status: true
  },
  {
    name: 'teacher',
    status: false
  },
  {
    name: 'student',
    status: true
  }
]

const userData = [
  {
    email: 'chrisdelcaos@devchile.cl',
    firstName: 'Christopher',
    lastName: 'Vicuña',
    password: 'password',
    profileId: 1
  },
  {
    email: 'profesor@devchile.cl',
    firstName: 'Profesor',
    lastName: 'Jirafales',
    password: 'qwerty',
    profileId: 2
  },
  {
    email: 'alumno@devchile.cl',
    firstName: 'Alumno',
    lastName: 'Destacado',
    password: 'cthulhu',
    profileId: 3
  },
]

// Sync and restart db before seeding
db.sequelize.sync({ force: true })
.then(() => {
  console.log('DB Sync & Data Dropped');
})
.then(() => {
  return Promise.map(profileData, function(profile) {
    return Profile.create(profile);
  })
})
.then(createdProfiles => {
  console.log(`${createdProfiles.length} Profiles created`);
})
.then(() => {
  return Promise.map(userData, function(user) {
    return User.create(user);
  })
})
.then(createdUsers => {
  console.log(`${createdUsers.length} Users created`);
})
// here, we go through all the models one by one, create each
// element from the seed arrays above, and log how many are created
/*.then(() => {
  return Promise.map(profileData, function(profiles) {
    return Profile.create(profiles);
  })
})
.then(createdProfiles => {
  console.log(`${createdProfiles.length} profiles created`);
})*/
/*
.then(() => {
  return Promise.map(puppyData, puppy => Puppy.create(puppy))
})
.then(createdPuppies => {
  console.log(`${createdPuppies.length} puppies created`);
})
.then(() => {
  return Promise.map(foodData, food => Food.create(food))
})
.then(createdFoods => {
  console.log(`${createdFoods.length} foods created`);
})
.then(() => {
  return Promise.map(parkData, park => Park.create(park))
})
.then(createdParks => {
  console.log(`${createdParks.length} parks created`);
})
.then(() => {
  console.log('Seeded successfully');
})
*/
.catch(err => {
  console.error('Error!', err, err.stack);
})
.finally(() => {
  db.sequelize.close();
  console.log('Finished!');
  return null;
});