import React from 'react'
import Issue from './Components/Issue'
import Department from './Components/Department'
import Company from './Components/Company'
import Profile from './Components/Profile'
import Inputs from './Components/Inputs'

import { TitleProvider } from './Components/TitleContext'


function Home() {
  
  return (
    <TitleProvider >
   
      <Issue/>
      <Department/>
      <Company/>
      <Profile/>
      <Inputs/>
    
    

    </TitleProvider>
  )
}

export default Home
