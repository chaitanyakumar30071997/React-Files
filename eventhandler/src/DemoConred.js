import React, { useState } from 'react';

const ConRen = () => {
    const [isLogged, setLogin] = useState(false);

    function isLoggedFun() {
        setLogin(true);
    }

    return (
        <div>
            <h1>Login Function Demo</h1>
            <p>{isLogged ? 'Welcome, User' : 'Please, Log in'}</p>
            <button onClick={isLoggedFun}>Login</button>
        </div>
    );
};

export default ConRen;
