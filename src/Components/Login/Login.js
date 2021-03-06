import React from 'react';

import styles from './Login.scss';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    logIn(login, password) {   
        localStorage.setItem('currentUser', JSON.stringify({name: login, password: password}));
        this.props.history.push('/profile');
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
        return (
            <LoginForm onSubmit={this.handleSubmit} />
        )                    
    }
}

function LoginForm(props) {
    return (
        <form className={styles.form} onSubmit={props.onSubmit}>
            <label htmlFor='login'>Login:</label>                        
            <input type='text' name='login' id='login'/>
            
            <label htmlFor='password'>Password: </label>
            <input type='password' name='password' id='password'/>

            <input type='submit' className={styles.button} value='Войти' />
        </form>
    )
}