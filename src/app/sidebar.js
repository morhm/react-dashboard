import React, {PropTypes, Component} from 'react';

export default class Sidebar extends Component {
	

  render() {

	  const styles = {
			sidebarStyle: {
				position: 'fixed',
				display: 'block',
				left: 0,
				height: "100%",
				backgroundColor: 'blue',
				width: '200px'
			}
		}

    return (
      <div style={styles.sidebarStyle}>
        <h2>{this.props.text}</h2>
      </div>
    );
  }
}

Sidebar.defaultProps = {
  text: 'My brand new component!'
};

Sidebar.propTypes = {
  text: PropTypes.string
};
