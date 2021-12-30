const express = require('express');
const userRoute = require('./user.route');
const devRoute = require('./dev.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/dev',
    route: devRoute,
  },
  {
    path: '/user',
    route: userRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
