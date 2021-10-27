import React from 'react';
import './App.scss';
import Home from "./components/home";
import Navigation from "./components/navigation"
import UserButtons from "./components/user/user";


function App() {
    return (
        <>
            <UserButtons/>
            <Navigation/>
            <Home/>
            <h2>lol</h2>
        </>
    );
}


export default App;

//
// <div>
//
//     <header>
//
//         <p className="bla__bla-bla">bla blad blas</p>
//         <a>siema mordouuu</a>
//
//     </header>
// </div>