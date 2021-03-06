import React, {Component} from 'react';
import {Home} from './components/Home'
import {NewTask} from './components/NewTask';
import {UserProfile} from './components/UserProfile';
import {Login} from './components/Login';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import  { Redirect } from 'react-router-dom'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {isLoggedIn: false};
		console.log('por qqqqqqqqqqqqqqqqqqqqq'+this.state.isLoggedIn);
		this.handleState = this.handleState.bind(this);
		if(!localStorage.getItem("user") && !localStorage.getItem("name"), !localStorage.getItem("password")){
			localStorage.setItem("user", "admin@hotmail.com");
			localStorage.setItem("name", "Administrator");
			localStorage.setItem("password", "admin");
		}
		
	}
	render(){
		const home = () => <Home />;
		const newtask = () => <NewTask />;
		const userprofile = () => <UserProfile />;
		const login = () => < Login logged={this.handleState} />;
		console.log('entro a render');
		console.log(this.state.isLoggedIn);
		if (this.state.isLoggedIn) {
			console.log('llllllllllleego aqui zzzzzzzzzzzzzzzzzzzzzzzzz33333333333333333333');
			return(			
				<Router>
				  <div className="App">     
					<Redirect to="/home" />					
				  </div>
				</Router>

			);	
		}
		else{
			console.log('llllllllllleego aqui zzzzzzzzzzzzzzzzzzzzzzzzz2222222222222222');
			return(
				<Router>
				  <div className="App">   
					<Route exact path="/" component={login} /> 
					<Route exact path="/newtask" component={newtask} />  
					<Route exact path="/home" component={home} />
					<Route exact path="/userprofile" component={userprofile} />						
					
				  </div>
				</Router>
			);			
		} 
    }
	handleState(){
		setTimeout(() => {
		  this.setState({isLoggedIn: true});
		}, 100);
		
	}
	
}
export default App;	
