//Dependencias
import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

//Componentes
import Layout from './Layout';
import Home from '../pages/Home';

//Assets
import {GlobalStyle} from '../styled';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </Layout>  
    </BrowserRouter>
  );
}

export default App;
