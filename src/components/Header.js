/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './Header.css';

export default ({ black }) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png" alt="Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://pbs.twimg.com/profile_images/1165907170178695168/JLkRF8ZY_400x400.png" alt="Usuário" />
                </a>
            </div>
        </header>
    );
}