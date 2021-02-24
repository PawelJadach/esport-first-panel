import React from 'react';

const Dashboard = React.lazy(() => import('../views/dashboard'));
const Users = React.lazy(() => import('../views/users'));
const Persons = React.lazy(() => import('../views/persons'));
const Teams = React.lazy(() => import('../views/teams'));
const Organizations = React.lazy(() => import('../views/organizations'));
const Games = React.lazy(() => import('../views/games'));
const Races = React.lazy(() => import('../views/races'));
const Tracks = React.lazy(() => import('../views/tracks'));
const Leagues = React.lazy(() => import('../views/leagues'));
const News = React.lazy(() => import('../views/news'));
const Newsletter = React.lazy(() => import('../views/newsletter'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/users', name: 'Users', component: Users, roles: [0] },
  { path: '/persons', name: 'Persons', component: Persons },
  { path: '/newsletter', name: 'Newsletter', component: Newsletter },
  // { path: '/teams', name: 'Teams', component: Teams },
  // { path: '/organizations', name: 'Organizations', component: Organizations },
  // { path: '/games', name: 'Games', component: Games },
  // { path: '/races', name: 'Races', component: Races },
  // { path: '/tracks', name: 'Tracks', component: Tracks },
  // { path: '/leagues', name: 'Leagues', component: Leagues },
  // { path: '/news', name: 'News', component: News },
];

export default routes;
