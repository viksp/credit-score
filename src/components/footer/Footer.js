import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    footer:{
        position: 'absolute',
        width:'80vw',
        height: '2.5rem',
        padding: "20px 0",
    }
});

class Footer extends React.Component {
  
  render() {
    const { classes } = this.props;
    return (
        <div className={classes.footer}>
          <Divider/>
            &copy; 2019 Eureka AI. All rights reserved
        </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);