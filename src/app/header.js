import React, {Component} from 'react';

export class Header extends Component {

  constructor(props) {
    super(props);

    this.showInfo = this.showInfo.bind(this);
  }

  showInfo() {
    console.log('showing info');
    $('#exampleModal').modal();
  }

  render() {

    const styles = {
      infoStyle: {
        marginLeft: '15px'
      },
      header: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        color: 'gray',
        border: '1px solid #E5E5E5',
        height: '60px',
        padding: '0 40px'
      },
      title: {
        flex: 1,
        fontSize: '1.5rem',
        margin: '1rem'
      },
      date: {
        flex: 1,
        textAlign: 'right',
        margin: '1rem',
        color: 'white'
      }
    };

    return (
      <header style={styles.header}>
        <div style={styles.title}>
          <a style={{color: 'gray', fontSize: "20px"}}>
            {this.props.route}
          </a>
          <a className='modalButton' onClick={this.showInfo}>
            <img width='26' height='26' alt='info icon' src='images/info-icon.png' style={styles.infoStyle} />
          </a>
        </div>
      </header>
    );
  }
}
