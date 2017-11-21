import React, {PropTypes, Component} from 'react';

export default class TableList extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.text}</h2>
      </div>
    );
  }
}

TableList.defaultProps = {
  text: 'Table List!'
};

TableList.propTypes = {
  text: PropTypes.string
};
