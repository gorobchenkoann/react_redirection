import React from 'react';
import { Redirect } from 'react-router-dom';

export class Profile extends React.Component {
    render() {
        if (localStorage.getItem('admin')) {
            return <h1>Профиль</h1>
        } else {
            return (
                <Redirect to='/login' />
            )
        }            
    }
}