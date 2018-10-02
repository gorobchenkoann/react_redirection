import React from 'react';
import { Route, Switch, } from 'react-router-dom';

import { Home, Header, Login, Profile, NewsContainer } from 'Components';

import styles from './App.scss';

export class App extends React.Component { 
    render() {
        return (
            // <React.Fragment>
            <div className={styles.container}>
            <Header />
            
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/news' component={NewsContainer}/>
                    <Route render={() => 404}/>
                </Switch>  
            </div> 
            // </React.Fragment>    
        )      
    }
}
