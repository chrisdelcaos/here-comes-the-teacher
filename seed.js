// importing Bluebird promises so we can Promise.map
const Promise = require('bluebird');
const db = require('./db');
//models
const Profile = require('./app/models/profile');
const User = require('./app/models/user');
const Page = require('./app/models/page');
const PageProfile = require('./app/models/pageProfile');
//data
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

const pageData = [
  {
    name: 'DASHBOARD',
    urlName: '/dashboard',
    icon: 'fa fa-home',
    menuName: 'Dashboard',
    depends: 0,
    pageOrder: 1
  },
  {
    name: 'CONFIG',
    urlName: '/configuracion',
    icon: 'fa fa-cog',
    menuName: 'Configuración',
    depends: 0,
    pageOrder: 2
  },
  {
    name: 'INFO',
    urlName: '/informes',
    icon: 'fa fa-bar-chart',
    menuName: 'Informes',
    depends: 0,
    pageOrder: 3
  },
  {
    name: 'MENSAJES',
    urlName: '/mensajes',
    icon: 'fa fa-envelope',
    menuName: 'Mensajes',
    depends: 0,
    pageOrder: 4
  },
  {
    name: 'ANOTACIONES',
    urlName: '/anotaciones',
    icon: 'fa fa-pencil-square-o',
    menuName: 'Anotaciones',
    depends: 0,
    pageOrder: 5
  },
  {
    name: 'CALIFICA',
    urlName: '/calificaciones',
    icon: 'fa fa-exclamation-triangle',
    menuName: 'Calificaciones',
    depends: 0,
    pageOrder: 6
  },
  {
    name: 'ASISTENCIA',
    urlName: '/asistencia',
    icon: 'fa fa-check-square-o',
    menuName: 'Asistencia',
    depends: 0,
    pageOrder: 7
  },
  {
    name: 'BIBLIO',
    urlName: '/biblioteca',
    icon: 'fa fa-book',
    menuName: 'Asistencia',
    depends: 0,
    pageOrder: 7
  }
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
.catch(err => {
  console.error('Error!', err, err.stack);
})
.finally(() => {
  db.sequelize.close();
  console.log('Finished!');
  return null;
});