import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import FamilyTree from './pages/FamilyTree'
import MemberProfile from './components/MemberProfile'


const Display = () => {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/family-tree' element={<FamilyTree/>}/>
      <Route path='/member/:id' element={<MemberProfile/>} />
     </Routes>
    </div>
  )
}

export default Display
