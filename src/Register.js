import React,{ Component } from 'react';
import AccountFields from './AccountFields';
//import SurveyFields from './SurveyFields';
//import Confirmation from './Confirmation';
//import Success from './Success';

class Register extends Component {
	constructor(props){
		super(props);
		this.state = {step:1};
	}
	getInitialState(){
		return ({ 
			step : 1
		});
	}
	saveValues(fields){
		return function(){
			fieldValues = Object.assign({},fieldValues, fields);
		};
	}
	nextStep(){
		this.setState({
			step : this.state.step + 1
		});
	}
	previousStep(){
		this.setState({
			step : this.state.step -1
		});
	}
	render(){
		switch(this.state.step){
			case 1:
				return <AccountFields fieldValues={fieldValues}
															nextStep={this.nextStep}
															saveValues={this.saveValues}/>
			//case 2:
			//	return <SurveyFields fieldValues={fieldValues}
			//											 nextStep={this.nextStep}
			//											 previousStep={this.previousStep}
			//											 saveValues={this.saveValues}/>
			//case 3:
			//	return <Confirmation fieldValues={fieldValues}
			//											 previosStep={this.previosStep}
			//											 submitRegistration={this.submitRegistration}/>
			//case 4:
			//	return <Success fieldValues={fieldValues} />
		}
	}
}
var fieldValues = {
	name: null,
	email: null,
	password: null,
	age: null,
	colors: []
};

Register.defaultProps = {fieldValues};
export default Register;
