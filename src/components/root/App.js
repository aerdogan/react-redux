import React from 'react'
import {Container} from 'reactstrap'
import Navi from '../navi/Navi'
import DashBoard from './DashBoard'
import CartDetail from '../cart/CartDetail'
import {Route, Switch} from "react-router-dom"
import AddOrUpdateProduct from '../products/AddOrUpdateProduct'
import NotFound from '../common/NotFound'

function App() {
  return (
    <div>
      <Container>
        <Navi />
        <Switch>
          <Route path="/" exact component={DashBoard} />
          <Route path="/product" component={DashBoard} />
          <Route path="/cart" exact component={CartDetail} />
          <Route path="/saveproduct/:productId" component={AddOrUpdateProduct} />        
          <Route path="/saveproduct/" component={AddOrUpdateProduct} />            
          <Route component={NotFound} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
