import React, {PropTypes, Component} from 'react';

import Radium from 'radium';

const modules = [

  {
    title: 'Camp Flog Gnaw',
    subtitle: 'October 28th, 2017',
    img:'images/flog-gnaw.png',
    datePosted: 'October 1st, 2017',
    bsCols: 3,
    id: 'flogGnaw'
  },
  {
    title: 'Quarterly Performance Tends',
    subtitle: "Business is looking UPPPP",
    img: 'images/horizontal-bar-chart.jpg',
    datePosted: 'October 2nd, 2017',
    bsCols: 8,
    id: 'chart'
  },
  {
    title: 'Sweat. Shirt.',
    subtitle: 'The proof is in the pudding and the pamphlets',
    img: 'images/earl-sweatshirt.jpg',
    datePosted: 'October 3rd, 2017',
    bsCols: 6,
    id: 'sweatshirt'
  }

];

class Dashboard extends Component {

  renderModules() {
    const styles = {
      moduleStyle: {
        padding: '10px',
        margin: '20px',
        border: '1px solid #E5E5E5',
        backgroundColor: 'white',
        borderRadius: '8px',
        height: '300px'
      },
      titleStyle: {
        fontSize: '14px',
        border: '1px solid white'
      },
      subtitleStyle: {
        fontSize: '12px',
        border: '1px solid white'
      },
      imgStyle: {
        width: '100%',
        overflow: 'hidden',
        height: 260,
        padding: '0 20px 20px 20px'
      },
      footerStyle: {
        borderTop: '1px solid gray',
        padding: '10px',
        marginTop: '5px'
      },
      dateStyle: {
        fontSize: '12px'
      },
      cardStyle: {
        ':hover': {
          boxShadow: '0 0 11px rgba(33,33,33,.2)'
        }
      },
      flogGnawStyle: {
        margin: '20px 0',
        minWidth: '300px',
        maxWidth: '300px'
      },
      chartStyle: {
        margin: '20px 0',
        minWidth: '300px'
      },
      sweatshirtStyle: {
        margin: '20px 0',
        minWidth: '300px',
        maxWidth: '500px'
      }

    }

    return modules.map( (module, index) => {
      let classes = `col-md-${module.bsCols} col-md-offset-1 ${module.id}`;
      let style =  styles[module.id + 'Style'];

      return (
        <div className={classes} style={style} key={index}>
          <div className='card' key={index} style={styles.cardStyle}>
            <div className='card-block' style={{padding: '20px'}}>
              <h4 className='card-title' style={{fontWeight: '300', fontSize: '22px'}} >{module.title}</h4>
              <h6 className='card-text text-muted'>{module.subtitle}</h6>
            </div>
            <div>
              <img className='card-img' style={styles.imgStyle} src={module.img} />
            </div>
            <div className='card-footer text-muted' style={{backgroundColor: 'white', borderColor: '#DDDDDD' }}>
              {module.datePosted}
            </div>
          </div>
        </div>
      )
    });
  }

  render() {

    return (
      <div className='container-fluid'>
      	<div className='row'>
          {this.renderModules()}
        </div>
      </div>
    );
  }
}

module.exports = {Dashboard: Radium(Dashboard)};

Dashboard.defaultProps = {
  text: 'My brand new component!'
};

Dashboard.propTypes = {
  text: PropTypes.string
};