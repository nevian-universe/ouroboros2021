import React from 'react'
import {Route} from 'wouter'
import Inicio from './components/home/body';


const Routes = () => {
    return( 
      <Route exact path="/" component={Inicio} />
    )
}

export default Routes