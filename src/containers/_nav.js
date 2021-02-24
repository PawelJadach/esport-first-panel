import React from 'react';
import CIcon from '@coreui/icons-react';

const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Users',
    to: '/users',
    icon: <CIcon name="cil-user-follow" customClasses="c-sidebar-nav-icon" />,
    roles: [0],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Persons',
    to: '/persons',
    icon: <CIcon name="cil-user" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Newsletter',
    to: '/newsletter',
    icon: <CIcon name="cil-newspaper" customClasses="c-sidebar-nav-icon" />,
    roles: [0],
  },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Teams',
  //   to: '/teams',
  //   icon: <CIcon name="cilGroup" customClasses="c-sidebar-nav-icon" />,
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Organizations',
  //   to: '/organizations',
  //   icon: <CIcon name="cilBuilding" customClasses="c-sidebar-nav-icon" />,
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Games',
  //   to: '/games',
  //   icon: <CIcon name="cilGamepad" customClasses="c-sidebar-nav-icon" />,
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Races',
  //   to: '/races',
  //   icon: <CIcon name="cilCarAlt" customClasses="c-sidebar-nav-icon" />,
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Tracks',
  //   to: '/tracks',
  //   icon: <CIcon name="cibGumroad" customClasses="c-sidebar-nav-icon" />,
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Leagues',
  //   to: '/leagues',
  //   icon: <CIcon name="cilLan" customClasses="c-sidebar-nav-icon" />,
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'News',
  //   to: '/news',
  //   icon: <CIcon name="cilNewspaper" customClasses="c-sidebar-nav-icon" />,
  // },
];

export default _nav;
