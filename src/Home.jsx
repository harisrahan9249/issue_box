import React from 'react'
import Issue from './Components/Issue'
import Department from './Components/Department'
import Company from './Components/Company'
import Profile from './Components/Profile'
import Inputs from './Components/Inputs'
import Action from './Components/Action'
import Datepicke from './Components/Datepicke'
import Dummy from './Components/Dummy'
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
