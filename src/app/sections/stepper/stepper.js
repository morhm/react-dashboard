import React, {PropTypes, Component} from 'react';

export default class Stepper extends Component {

	constructor(props) {
		super(props);


		this.updateState = this.updateState.bind(this);

		this.state = {update: false};
	}

	updateState(sect) {
		$(".visible").addClass("hidden");
		$(".visible").removeClass("visible");

		$("." + sect).removeClass("hidden");
		$("." + sect).addClass("visible");

		this.setState({update: true});

	}

	shouldComponentUpdate() {
		return true;
	}

	componentDidUpdate() {
		$(".visible").show(1000);
		$(".hidden").hide(1000);
		if (this.state.update) {
			this.setState({update: false});
		}
	}

	componentDidMount() {
		$(".visible").show(1000);
		$(".hidden").hide(1000);
	}


  render() {
  	const styles = {
  		stepperStyle: {
  			WebkitTransition: 'all 150ms ease-in',
  			backgroundColor: "#DFDFDF",
  			border: "1px solid #F1F1F1",
  			margin: "10px",
  			padding: "10px"
  		}
  	}

  	let active = (
  		<div className="activeStep">

  		</div>
  	)

    return (
      <div style={{padding: '20px'}}>
      	<div className="stepper-sect active" onClick={() => this.updateState("wuno")} style={styles.stepperStyle}>
      		<p className="stepper-title">Wuno</p>
      		<div className="wuno stepper-content visible">
      			<p>Hewwo I'm wunno</p>
      		</div>
      	</div>
      	<div className="stepper-sect" onClick={() => this.updateState("deux")} style={styles.stepperStyle}>
      		<p className="stepper-title">Deux</p>
      		<div className="deux stepper-content hidden">
      			<p>HEWOOOOO IM MR DEUX</p>
      		</div>
      	</div>
      	<div className="stepper-sect" onClick={() => this.updateState("trois")} style={styles.stepperStyle}>
      		<p className="stepper-title">Trois</p>
      		<div className="trois stepper-content hidden">
      			<p>YO YOU YO IM TROIXS</p>
      		</div>
      	</div>
      </div>
    );
  }
}

Stepper.defaultProps = {
  text: 'Stepper!'
};

Stepper.propTypes = {
  text: PropTypes.string
};
