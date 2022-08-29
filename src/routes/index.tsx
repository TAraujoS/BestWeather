import {Route, Routes, Navigate} from 'react-router-dom'

import Register from '../pages/Register'
import Login from '../pages/Login'
import Dashboard from '../Pages/Dashboard'


const MainRoutes = () =>{
    return (
        <Routes>
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='*' element={<Navigate replace to='/Register'/>} />
        </Routes>
    )
}

export default MainRoutes