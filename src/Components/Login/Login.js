import React from 'react';

import styles from './Login.scss';

export class Login extends React.Component {
    logIn() {        
        localStorage.setItem('admin', 'password');
        this.props.history.push('/profile');
    }
    logOut() {
        localStorage.removeItem('admin')
        this.props.history.push('/');
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const login = e.target.querySelector('[name="login"]').value;
        const password = e.target.querySelector('[name="password"]').value;

        if (login === 'admin' && password === '12345') {
            this.logIn();
        } else {
            e.target.reset();
        }
    }
      
    render() {
        const isUserLoggedIn = localStorage.getItem('admin');
        if (!isUserLoggedIn) {
            return (
                <form className={styles.form} onSubmit={(e) => this.handleSubmit(e)}>
                    <label>
                        Login:
                        <input type="text" name='login'/>
                    </label>
                    <label>
                        Password:
                        <input type="text" name='password'/>
                    </label>
                    <input type="submit" value="Войти" />
                </form>
            )
        } else {
            return (
                <React.Fragment>
                    {this.logOut()}
                </React.Fragment>  
                // <button onClick={() => this.logOut()}>Выйти</button>                
            )  
        }
                    
    }
}