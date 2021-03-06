import React, {PropTypes, Component} from 'react';
import Sidebar from 'react-sidebar';

const mql = window.matchMedia(`(min-width: 990px)`);

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F7F7F8'
  },
  profileSect: {
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
  },
  sbItemStyle: {
    padding: '10px 20px',
    textTransform: 'uppercase',
    margin: '5px',
    fontWeight: '400',
    ':hover': {
      backgroundColor: 'rgba(255,255,255,0.2)'
    },
    color: 'white'
  },
  upgradeButton: {
    margin: '5px',
    marginTop: 'auto',
    padding: '16px 20px',
    textTransform: 'uppercase',
    fontWeight: '400',
    ':hover': {
      backgroundColor: 'rgba(255,255,255,0.2)'
    },
    color: 'white',
    position: 'absolute',
    bottom: 0
  }
};

export default class MainSidebar extends Component {
	constructor(props) {
		super(props);

		this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);

    this.state = {
      open: true,
      mql: mql,
      docked: true,
    };
	}

	renderItems() {

    let sidebarItems = {
      items: [
        {
          title: 'dashboard',
          img: 'url_here'
        },
        {
          title: 'user-profile',
          img: 'url_here'
        },
        {
          title: 'table-list',
          img: 'url_here'
        },
        {
          title: 'typography',
          img: 'url_here'
        },
        {
          title: 'icons',
          img: 'url_here'
        },
        {
          title: 'maps',
          img: 'url_here'
        },
        {
          title: 'notifications',
          img: 'url_here'
        }
      ],
      finalButton: {
        title: 'login',
        img: 'url_here'
      }
    };

    let topItems = sidebarItems.items.map( (item, index) => {
      return (
          <NavLink key={index} to={'/' + item.title}>
            <div onClick={this.setActive} style={styles.sbItemStyle} key={index}>
              {item.title}
            </div>
          </NavLink>
      );
    })

    let bottomItem = (
      <div key='-1' style={styles.upgradeButton}>
        {sidebarItems.finalButton.title}
      </div>
    );

    return topItems.concat(bottomItem);
  }

  setActive(e) {
    $('.divActive').removeClass('divActive');
    $(e.target).addClass('divActive');
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

	renderItems() {
		return <h1>hellooooo</h1>
	}

  render() {

  	let sidebarProps = {
      sidebar: this.state.sidebarOpen,
      docked: this.state.sidebarDocked,
      onSetOpen: this.onSetSidebarOpen
    };

		let sidebarContent =(
      <div style={styles.sbContentMain}>
        <div style={styles.profileSect} className='profile-sect'>
          <img src='images/myPicture.jpg' style={{width: '100px', height: '100px', borderRadius: 90}} />
          <p style={{marginTop: '10px'}}>Mark Orozco</p>
          <p style={{fontSize: '14px', lineHeight: '18px', fontWeight: '220', textAlign: 'center'}}> Messing around with React </p>
        </div>
        <div style={styles.sbContent}>
          {this.renderItems()}
        </div>
      </div>
    );

		let sidebarStyle = {
			root: {},
			sidebar: {
			  maxWidth: '250px',
			  minWidth: '200px',
			  width: '300px',
			  backgroundImage: 'url(images/sidebar-1.jpg)',
			  backgroundPosition: 'center top'
			},
			content: {},
			overlay: {},
			dragHandle: {}
		};

	    return (
	    	<Sidebar styles={sidebarStyle} sidebar={sidebarContent} open={this.state.sidebarOpen} docked={this.state.sidebarDocked} onSetOpen={this.onSetSidebarOpen}/>
	    );
  	}
}

MainSidebar.defaultProps = {
  text: 'My brand new component!'
};

MainSidebar.propTypes = {
  text: PropTypes.string
};
