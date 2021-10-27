import React from 'react';
import {BrowserRouter as Router,Link} from "react-router-dom";

const LogRegBtn = () => {
    return (
        <div className="LogRegBtn__box" >
            <ul className="LogRegBtn__ul" >
                <Router>
                    <Link to="/logowanie">
                        <li className="LogRegBtn__li btn__login">Zaloguj</li>
                    </Link>

                    <Link to="/rejestracja">
                        <li className="LogRegBtn__li btn__register">Załóż konto</li>
                    </Link>
                </Router>
            </ul>

        </div>
    );
};

export default LogRegBtn;
