import React, {PropTypes, Component} from 'react';

export default class Info extends Component {




  render() {
  	const styles = {
  		infoContentStyle: {}

  	};


  	let modalContent;

  	switch(this.props.route) {
  		case "Dashboard":
  			modalContent = (
  				<p >Welcome to my React dashboard. This project is basically a place to put various React
  				components that I've implemented. This may be useful in future projects when I want to use
  				one of these components without coding from scratch. Here is a very simple responsive dashboard
  				made with bootstrap. The sidebar is also responsive - if the viewport's width is made too small,
  				it will undock.<br /><br />
  				Later I'd like to add transition animations when the posts are rearranged, but for a more detailed
  				dashboard view, checkout www.morhm-blog.surge.sh.
  				</p>
  			);
  			break;
  		case "User Profile":
  			modalContent = (
  				<div>
	  				<p>
	  					I wanted to make a react controlled component with form validation. In the component's state, 
	  					I am storing an array of errors so that the submit button is only available to press when there
	  					are no more errors. I also learned the usefulness of push and pull in bootstrap - although the
	  					form appears to be placed before the profile sect, the components are pushed and pulled into their 
	  					respective positions until the screen is reduced to a certain width at which point they snap back to
	  					their expected positions.
	  				</p>
	  				<br/><br/>
	  				<strong>Todo</strong><br/>
	  				<ul style={{paddingLeft: "15px"}}>
							<li> Add more robust error checking and error messages.</li>
							<li> Add more fields (change the profile photo)</li>
						</ul>
					</div>
  			)
  			break;
  		case "Stepper":
  			modalContent = (
  				<p>
  					My favorite way of displaying content that is best read step-by-step is through Stepper components 
  					as popularized by Google Material Design. By preserving the context of the forms you've completed 
  					or are currently not on, Steppers can reduce the disorientation that can happen to users on longer 
  					forms, or simply keep them more engaged and aware of how much progress they've made in a 
  					clear and concise manner.
  					<br/><br/>
  					<strong>Todo</strong><br/>
  					A lot at this point. This is just a very basic skeleton. Tune in later for more.
  				</p>
  			)
  		default:
  			modalContent = (
  				<p>Yo I am default content</p>
  			);
  	}

    return (
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{this.props.route} Info</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {modalContent}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Info.defaultProps = {
  text: 'Table List!'
};

Info.propTypes = {
  text: PropTypes.string
};
