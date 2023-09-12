import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Routes/Home'
import Favs from '../../Routes/Favs'
import Detail from '../../Routes/Detail'
import Contact from '../../Routes/Contact'
import NotFound from '../../Routes/NotFound'


export const routes = {
    home: '/home',
    favs: '/favs',
    detail: '/detail/:id',
    contact: '/contact',
    notFound: '*',
    default: '/'
}

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path={routes.default} element={<Home/>}/>
            <Route path={routes.home} element={<Home/>}/>
            <Route path={routes.favs} element={<Favs/>}/>
            <Route path={routes.detail} element={<Detail/>}/>
            <Route path={routes.contact} element={<Contact/>}/>
            <Route path={routes.notFound} element={<NotFound/>}/>
        </Routes>
    )
}

export default AppRoutes;