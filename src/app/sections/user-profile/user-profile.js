import React, {PropTypes, Component} from 'react';
import Profile from './profile.js';

import data from '../../data/userProfileData.js';

import Radium from 'radium';

class UserProfile extends Component {

	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.submitData = this.submitData.bind(this);
		this.validateData = this.validateData.bind(this);
		this.renderDataSect = this.renderDataSect.bind(this);

		let fieldValues = {}, profileData = {}, errorObject = {}
		data.fields.forEach( field => fieldValues[field.class] = field.value);
		Object.assign(profileData, fieldValues);

		this.state = {fieldValues, profileData, errorObject, error: false};
	}

	submitData() {
		this.setState({profileData: this.state.fieldValues});
	}

	handleChange(event) {
		let field = event.target.dataset.field;
		console.log(field);
		let val = event.target.value;
		let error;

		error = this.validateData(field, val);

		if (error) {
			$(event.target).removeClass("valid");
			$(event.target).addClass("error");
			this.setState({error: true});
		} else {
			$(event.target).removeClass("error");
			$(event.target).addClass("valid");

			let enable = true;
			for (let fieldName in this.state.errorObject) {
				if (this.state.errorObject[fieldName]) {
					enable = false;
				}
			}
			if (enable) {
				this.setState({error: false});
			}
		}

		let fieldValues = Object.assign({}, this.state.fieldValues);
		fieldValues[field] = val;
		this.setState({fieldValues});
	}

	validateData(field, val) {
		let errObject = this.state.errorObject;
		let error = false;
		if (val < 1) {
			error = true;
			errObject[field] = true;
		}
		if (!error) {
			errObject[field] = false;
		}
		return error;
	}

	renderDataSect() {
		const styles = {
			dataSectStyle: {
				backgroundColor: 'white',
				border: '1px solid #E4E3E5',
				borderRadius: '5px',
				padding: '10px 10px',
				minWidth: '468px'
			},
			definitionStyle: {
				display: 'flex',
				flexDirection: 'column',
				padding: '20px'
			},
			inputStyle: {
				borderTop: 'none',
				borderLeft: 'none',
				borderRight: 'none',
				borderBottom: '1px solid #E4E3E5',
				':focus': {
					outline: 'none'
				}
			},
			textAreaStyle: {
				resize: 'none',
				border: '1px solid #E4E3E5',
				padding: '5px'
			},
			submitButtonStyle: {
				position: 'absolute',
				bottom: 20
			}
		}

		let sects = (
			<div className="row">
				<div className="col-md-4" style={styles.definitionStyle}>
					<label htmlFor="" className="text-muted">Username</label>
					<input data-field="username" type="text" value={this.state.fieldValues["username"]} onChange={this.handleChange} style={styles.inputStyle} key="1" className="valid"/>
				</div>
				<div className="col-md-4" style={styles.definitionStyle}>
					<label htmlFor="" className="text-muted">Email</label>
					<input data-field="email" type="text" value={this.state.fieldValues["email"]} onChange={this.handleChange} style={styles.inputStyle} key="2" className="valid"/>
				</div>
				<div className="col-md-4" style={styles.definitionStyle}>
					<label htmlFor="" className="text-muted">Company</label>
					<input data-field="company" type="text" value={this.state.fieldValues["company"]} onChange={this.handleChange} style={styles.inputStyle} key="3" className="valid"/>
				</div>
				<div className="col-md-6" style={styles.definitionStyle}>
					<label htmlFor="" className="text-muted">First Name</label>
					<input data-field="firstName" type="text" value={this.state.fieldValues["firstName"]} onChange={this.handleChange} style={styles.inputStyle} key="4" className="valid"/>
				</div>
				<div className="col-md-6" style={styles.definitionStyle}>
					<label htmlFor="" className="text-muted">Last Name</label>
					<input data-field="lastName" type="text" value={this.state.fieldValues["lastName"]} onChange={this.handleChange} style={styles.inputStyle} key="5" className="valid"/>
				</div>
				<div className="col-md-12" style={styles.definitionStyle}>
					<label htmlFor="" className="text-muted">About Me</label>
					<textarea data-field="aboutMe" maxLength='100' type="text" key="6" value={this.state.fieldValues["aboutMe"]} onChange={this.handleChange} style={styles.textAreaStyle} className="valid ta" />
				</div>
			</div>
		);

		return (
			<div className="col-md-8 pull-md-4" style={styles.dataSectStyle}>
				<form onSubmit={this.submitData}>
					{sects}
					<input className="submitButton btn btn-primary" type="submit" value="submit" style={styles.submitButtonStyle} />
				</form>
			</div>
		);
	}

  	componentDidUpdate() {
  		if (this.state.error) {
  			$(".submitButton").attr("disabled", "disabled");
  		} else {
  			$(".submitButton").removeAttr("disabled");
  		}
  
  		$(".valid").css({borderTop: 'none',
				borderLeft: 'none',
				borderRight: 'none',
				borderBottom: '1px solid #E4E3E5'});
  		$(".ta.valid").css({border: '1px solid #E4E3E5'});
  		$(".error").css("border", "1px solid red");
  	}

    render() {
      return (
    	<div style={{padding: '20px'}}>
	      <div className="container">
		    <div className="row">
		      <Profile profileData={this.state.profileData} />
		      {this.renderDataSect()}
		    </div>
		  </div>
		</div>
      );
    }
}

module.exports = {UserProfile: Radium(UserProfile)};

UserProfile.valueProps = {
  text: 'User Profile!'
};

UserProfile.propTypes = {
  text: PropTypes.string
};