import React, {Component} from 'react';

export default class Profile extends Component {

	constructor(props) {
		super(props);

		this.renderProfileData = this.renderProfileData.bind(this);
	};

	renderProfileData() {
		const styles = {
			profilePicStyle: {
				width: 150,
				borderRadius: "90px"
			},
			profileDataStyle: {
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				marginTop: "20px",
				lineHeight: "14px",
				wordWrap: "break-word"
			}
		}

		let profileData = this.props.profileData;

		return (
			<div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
				<img style={styles.profilePicStyle} src="images/myPicture.jpg" className="card-img-top"/>
				<div className="card-block" style={styles.profileDataStyle}>
					<h5 className="profile-name">{this.props.profileData.firstName + " " + this.props.profileData.lastName}</h5>
					<p className="profile-username">{this.props.profileData.username}</p>
					<p className="profile-email">{this.props.profileData.email}</p>
					<p className="profile-company">{this.props.profileData.company}</p>
					<p className="profile-about" style={{lineHeight: '18px'}}>{this.props.profileData.aboutMe}</p>
				</div>
			</div>
		)
	}

	render() {
		const styles = {
	  		profileSectStyle: {
	  			border: '1px solid #E4E3E5',
	  			padding: '10px 30px',
	  			minWidth: "234px"
	  		}
	  	}

		return (
	  		<div className="col-md-4 push-md-8 profile-sect" style={{padding: '0 30px', marginBottom: '20px'}}>
	    		<div className="card col-md-12" style={styles.profileSectStyle}>
	    			{this.renderProfileData()}
	    		</div>
	    	</div>
		);
	}
}