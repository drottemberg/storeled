// src/components/main.tsx
import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import { Header } from './header'
import { Footer } from './footer'
import { Home } from '../home'
import { Lambrequin } from '../lambrequin'
import { Store } from '../store'
import {StoreDetail } from '../store_detail'
import { Pergola } from '../pergola';

import './index.scss'
export const Main = () => {
 return (
    <Router>
      <Header />
      <div className="page">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/lambrequin-lumineux" component={Lambrequin}/>
          <Route exact path="/store" component={Store}/>
          <Route exact path="/store/:name" component={StoreDetail}/>
          <Route exact path="/pergola" component={Pergola}/>
        </Switch>
      </div>
      <Footer />
  </Router>
 );
};