import React, {Component} from 'react';

const styles = {
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

export class Header extends Component {
  render() {

    return (
      <header style={styles.header}>
        <p style={styles.title}>
          <a style={{color: 'gray', fontSize: "20px"}} href="https://github.com/FountainJS/generator-fountain-webapp" target="_blank" rel="noopener noreferrer">
            Dashboard
          </a>
        </p>
      </header>
    );
  }
}
