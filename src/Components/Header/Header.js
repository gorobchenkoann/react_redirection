import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.scss';

export class Header extends React.Component {
    logout() {
        localStorage.removeItem('currentUser');
    }

    renderLink() {
        const isLoggedIn = localStorage.getItem('currentUser');

        if (!isLoggedIn) {
            return <Link to='/login' className={styles.loginLink}>Войти</Link>
        } else {
            return <a href='#' className={styles.loginLink} onClick={this.logout}>Выйти</a>
        }        
    }

    render() {
        return (
            <div className={styles.header}>
                <ul className={styles.menu}>
                    <li className={styles.item}>
                        <Link to="/" className={styles.link}>На главную</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/news" className={styles.link}>Новости</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/profile" className={styles.link}>Профиль</Link>
                    </li>              
                </ul>
                <div className={styles.login}>
                    {this.renderLink()}
                </div>                
            </div>
        )
    }
}