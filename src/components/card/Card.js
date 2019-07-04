import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";


const styles = theme => ({
  card: {
    minWidth: 400
  },
  media: {
    height: 0,
    paddingTop: "56.25%" 
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  cardHeader: {
    padding: "0.75rem 1.25rem",
    marginBottom: "0",
    backgroundColor: "rgba(0,0,0,.03)",
    borderBottom: "1px solid rgba(0,0,0,.125)",
    '&  span': {
     fontSize: '1.2rem',
    }
  }
});

class CustomCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes, title } = this.props;
    return (
      <React.Fragment>
        <Card className={classes.card}>
          <CardHeader title={title} className={classes.cardHeader} />
          <CardContent>{this.props.children}</CardContent>
        </Card>
      </React.Fragment>
    );
  }
}

CustomCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomCard);
