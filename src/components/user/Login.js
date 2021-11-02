import React from 'react';
import {NavLink} from "react-router-dom";

const Login = () => {
    return (
        <>
            <h1>Zaloguj się</h1>


            <form>
                <label>E-mail
                    <input type="email"  name="email"  />
                </label>
            </form>

            <form>
                <label>Hasło
                    <input type="password" />
                </label>
            </form>

            <div>
                <div>
                    <NavLink to="/rejestracja">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <button className="register_button">Załóż konto</button>
                    </NavLink>
                </div>

                <div>
                    <NavLink to="/logowanie">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="login_button">Zaloguj</a>
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default Login;
 