import React from "react";
// import './scss/main.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import LogRegBtn from "./components/LogRegButtons";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Logout from "./components/user/Logout";

function App() {
	return (
		<>
        <Router>
			<LogRegBtn />
			<Navigation />
			

			
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/logowanie" component={Login} />
					<Route path="/rejestracja" component={Register} />
					<Route path='/wylogowano' component={Logout}/>
				</Switch>
			</Router>
		</>
	);
}

export default App;
