import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt,faUsers, faUserCircle, faEnvelope,faBell,faUserTie } from '@fortawesome/free-solid-svg-icons'

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  grow: {
    flexGrow: 1
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    background: "#fff",
    color: "#333"
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: "#f9f9f9"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  listItem: {
    "& a": {
      textDecoration: "none",
      color: "#666"
    }
  },
  logoPlaceholder: {
    margin: "5px 32px",
    position: "absolute",
    fontWeight: 300,
    color: 'hsla(109, 70%, 50%,0.50)',
    fontSize:"33px"
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  }
});

class AppSidebar extends React.Component {
  state = {
    mobileOpen: false,
    anchorEl: null,
    selectedIndex: 1
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const { classes, theme } = this.props;
    const { anchorEl, selectedIndex } = this.state;
    const path = window.location.pathname.split("/");
    const drawer = (
      <div>
        <div className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.logoPlaceholder}
          >
            Eureka AI
          </Typography>
        </div>
        <Divider />
        <List className={classes.listItem}>
          <Link to="/single">
            <ListItem
              button
              key={1}
              selected={path[1] === "" || path[1] === "single" ? true : false}
              onClick={event => this.handleListItemClick(event, 1)}
            >
              <ListItemIcon>
              <FontAwesomeIcon icon={faUserAlt}  />
              </ListItemIcon>
              <ListItemText primary="Individual Request" />
            </ListItem>
          </Link>

          <Link to="/batch">
            <ListItem
              button
              key={2}
              selected={path[1] === "batch" ? true : false}
              onClick={event => this.handleListItemClick(event, 2)}
            >
              <ListItemIcon>
              <FontAwesomeIcon icon={faUsers}  />
              </ListItemIcon>
              <ListItemText primary="Batch Request" />
            </ListItem>
          </Link>
        </List>
      </div>
    );
    const isMenuOpen = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                <FontAwesomeIcon icon={faEnvelope}  />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={17} color="secondary">
                <FontAwesomeIcon icon={faBell}  />
                </Badge>
              </IconButton>
              <IconButton
                aria-owns={isMenuOpen ? "material-appbar" : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <FontAwesomeIcon icon={faUserCircle}  />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      </div>
    );
  }
}

AppSidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(AppSidebar);
