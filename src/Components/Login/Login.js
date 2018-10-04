import React from 'react';

import styles from './Login.scss';

export class Login extends React.Component {
    logIn(login, password) {   
        localStorage.setItem('currentUser', JSON.stringify({name: login, password: password}));
        this.props.history.push('/profile');
    }
    logOut() {
        localStorage.removeItem('currentUser')
        this.props.history.push('/');
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const login = e.target.querySelector('[name="login"]').value;
        const password = e.target.querySelector('[name="password"]').value;
        

        if (login === 'admin' && password === '12345') {
            this.logIn(login, password);
        } else {
            e.target.reset();
        }
    }
      
    render() {
        const isUserLoggedIn = localStorage.getItem('currentUser');
        console.log(isUserLoggedIn);
        console.log(localStorage);
        if (!isUserLoggedIn) {
            return (
                <form className={styles.form} onSubmit={(e) => this.handleSubmit(e)}>
                    <label htmlFor='login'>Login:</label>                        
                    <input type='text' name='login' id='login'/>
                    
                    <label htmlFor='password'>Password: </label>
                    <input type='password' name='password' id='password'/>

                    <input type='submit' className={styles.button} value='Войти' />
                </form>

            )
        } else {
            return (
                <React.Fragment>
                    {this.logOut()}
                </React.Fragment>            
            )  
        }
                    
    }
}