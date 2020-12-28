import React from 'react';
import { Redirect } from 'react-router-dom';

const home = React.lazy(() => import('../pages/home/home'))
const routes = [
  { path: '/', exact: true, render: () => <Redirect to="/home" /> },
  {
    path: '/home',
    component: home
  },
  /* {
    path: '/search',
    component: JMSearch,
    routes: [
      {
        path: '/search',
        exact: true,
        render: () => <Redirect to="/search/single?song=&type=1" />,
      },
      { path: '/search/single', component: JMSingle },
      { path: '/search/singer', component: JMSinger },
      { path: '/search/album/', component: JMSearchAlbum }
    ]
  }, */
]

export default routes

