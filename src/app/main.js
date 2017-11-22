import React, {Component} from 'react';
import {Route, NavLink, HashRouter, Redirect} from 'react-router-dom';
import {Header} from './header';
import {Title} from './title';
import {Footer} from './footer';
import {Dashboard} from './sections/dashboard/dashboard.js';
import Sidebar from 'react-sidebar';
import {UserProfile} from './sections/user-profile/user-profile.js';
import TableList from './sections/table-list/table-list.js';


import Radium from 'radium';

const mql = window.matchMedia(`(min-width: 990px)`);

const styles = {
  navSect: {
    position: 'absolute',
    top: '185px',
    bottom: '0',
    right: '0',
    left: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  loButton: {
    padding: '30px 20px',
    marginTop: 'auto',
    width: '100%'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    minHeight: '100%',
    backgroundColor: '#F7F7F8'
  },
  profileSect: {
    height: '185px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
    borderBottom: '1px solid #f6eaff',
    padding: '18px 30px 10px 30px',
    color: 'white',
    fontFamily: 'Roboto, Helvetica Neue, Arial, sans-serif',
    fontWeight: '400',
    lineHeight: '30px'
  },
  sbContentMain: {
    backgroundColor: 'rgba(255,255,255,0.01)',
    position: 'absolute',
    left: 0,
    right: 0, 
    top: 0,
    bottom: 0
  },
  sbContent: {
    padding: '30px 20px',
    width: '100%'
  },
  sbItemStyle: {
    padding: '10px 20px',
    textTransform: 'uppercase',
    margin: '5px',
    fontWeight: '400',
    ':hover': {
      backgroundColor: 'rgba(255,255,255,0.56)'
    },
    color: 'white'
  }
}

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: true,
      mql: mql,
      docked: true,
      route: 'Dashboard'
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.setActive = this.setActive.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
    this.setState({mql: mql, sidebarDocked: mql.matches});
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  mediaQueryChanged() {
    this.setState({sidebarDocked: this.state.mql.matches});
  }

  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
  }

  setActive(e) {
    $('.divActive').removeClass('divActive');
    $(e.target).addClass('divActive');
    console.log(e.target.innerHTML);
    this.setState({route: e.target.innerHTML});
  }

  componentDidMount() {

  }

  render() {

    let sidebarContent =(
      <div style={styles.sbContentMain}>
        <div style={styles.profileSect} className='profile-sect'>
          <img src='images/myPicture.jpg' style={{width: '100px', height: '100px', borderRadius: 90}} />
          <p style={{marginTop: '10px'}}>Mark Orozco</p>
        </div>
        <div style={styles.navSect}>
          <div key='db' style={styles.sbContent}>
            <NavLink to='/dashboard'>
              <div key='db-d' onClick={this.setActive} style={styles.sbItemStyle}>
                Dashboard
              </div>
            </NavLink>
          </div>
          <div key='up' style={styles.sbContent}>
            <NavLink to='/user-profile'>
              <div key='up-d' onClick={this.setActive} style={styles.sbItemStyle}>
                User Profile
              </div>
            </NavLink>
          </div>
          <div key='tl' style={styles.sbContent}>
            <NavLink to='/table-list'>
              <div key='tl-d' onClick={this.setActive} style={styles.sbItemStyle}>
                Table List
              </div>
            </NavLink>
          </div>
          <div key='lo' style={styles.loButton}>
            <div key='lo-d' onClick={this.setActive} style={styles.sbItemStyle}>
              Logout
            </div>
          </div>
        </div>
      </div>
    );

    let sidebarProps = {
      sidebar: this.state.sidebarOpen,
      docked: this.state.sidebarDocked,
      onSetOpen: this.onSetSidebarOpen
    };

    let sidebarStyle = {
      root: {
      },
      sidebar: {
        maxWidth: '250px',
        minWidth: '200px',
        width: '300px',
        backgroundImage: 'url(images/sidebar-1.jpg)',
        backgroundPosition: 'center top'
      },
      content: {
      },
      overlay: {
      },
      dragHandle: {}
    };

    return (
      <HashRouter>
        <div>
          <Sidebar styles={sidebarStyle} sidebar={sidebarContent} open={this.state.sidebarOpen} docked={this.state.sidebarDocked} onSetOpen={this.onSetSidebarOpen}>
            <Header route={this.state.route} />
            <main style={styles.main}>
              <Route path='/dashboard' component={Dashboard}/>
              <Route path='/user-profile' component={UserProfile}/>
              <Route path='/table-list' component={TableList}/>
            </main>
          </Sidebar>
        </div>
      </HashRouter>
    );
  }
}

module.exports =  {Main: Radium(Main)};
