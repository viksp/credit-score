import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SingleScore from '../single/SingleScore';
import Batch from '../batch/Batch';
import Footer from '../footer/Footer';




const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
   content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    width: `calc(100% - 240px)`,
    margin: '64px 0 0 240px',
    backgroundColor: '#eee',
    minHeight:'100vh',  
  },
  contentWrapper: {
    minHeight:'100vh', 
  }
});

class Main extends React.Component {
  
  render() {
    const { classes } = this.props;

    
    return (
        <main className={classes.content}>
         <div className={classes.contentWrapper}>
          <Switch>
              <Route path="/" exact component={SingleScore} />
              <Route path="/single" exact component={SingleScore} />
              <Route path="/batch" exact component={Batch} />
          </Switch>
          </div>
          <Footer/>
        </main>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);