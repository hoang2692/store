import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFound from './pages/NotFound/NotFound';
import PageListItem from './pages/pageListItem/PageListItem';
import PageAction from './pages/pageAction/pageAction';

const routs = [
    {
        path: "/",
        exact: true,
        main: () => <HomePage />
    },
    {
        path: "/product-items",
        exact: false,
        main: () => <PageListItem />
    },
    {
        path: "/product/add",
        exact: false,
        main: ({history}) => <PageAction history={history}/>
    },
    {
        path: "/product/:id/edit",
        exact: false,
        main: ({match,history}) => <PageAction history={history} match={match}/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    },
  
    
]

export default routs;