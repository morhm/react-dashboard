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

		let fieldValues = {}, profileData = {};
		data.fields.forEach( field => fieldValues[field.class] = field.value);
		Object.assign(profileData, fieldValues);

		this.state = {fieldValues, profileData, error: false};
	}

	submitData() {
		this.setState({profileData: this.state.fieldValues});
	}

	handleChange(event) {
		let error = this.validateData(event.target);
		if (error) {
			$(event.target).removeClass("enabled");
			$(event.target).addClass("error");
			//$(event.target).css("border", "1px solid red");
			$(".submitButton").attr("disabled", "disabled");
			this.setState({error: true});
		} else {
			$(".submitButton").removeAttr("disabled");
			$(event.target).removeClass("error");
			$(event.target).addClass("enabled");
			this.setState({error: false});
		}

		let fieldValues = Object.assign({}, this.state.fieldValues);
		fieldValues[event.target.dataset.field] = event.target.value;
		this.setState({fieldValues});
	}

	validateData(field) {
		if (field.value < 1) {
			return true;
		}
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
			}
		}

		let sects = data.fields.map( (field, index) => {
			return (
				<div key={index} className={"col-md-" + field.width} style={styles.definitionStyle}>
					<label className="text-muted" htmlFor="">{field.label}</label>
					<input key={index} data-field={field.class} type="text" className="enabled" style={styles.inputStyle}
					 value={this.state.fieldValues[field.class]} onChange={this.handleChange} />
				</div>
			);
		});

		return (
			<div className="col-md-8" style={styles.dataSectStyle}>
				<form onSubmit={this.submitData}>
					<div className="row">
						{sects}
					</div>
					<input className="submitButton btn btn-primary" type="submit" value="submit"/>
				</form>
			</div>
		);
	}

	componentDidMount() {
    	$(window).resize(function() {
    		if ($(window).width() < 768) {
    			$(".profile-sect").addClass("order-first");
    		} else {
    			$(".profile-sect").removeClass("order-first");
    		}
    	});
  	}

  	componentDidUpdate() {
  		$(".error").css("border", "1px solid red");
  		$(".enabled").css({"borderLeft": "none", "borderRight": "none", "borderTop": "none", "borderBottom": "1px solid #E4E3E5"});
  	}

    render() {
      return (
    	<div style={{padding: '20px'}}>
	      <div className="container">
		    <div className="row">
		      {this.renderDataSect()}
		      <Profile profileData={this.state.profileData} />
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
