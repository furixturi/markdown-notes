import CssBaseline from '@material-ui/core/CssBaseline';
import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import styles from './styles';
import theme from '../../styles-theme/theme';
import Typography from '@material-ui/core/Typography';
import {
  MuiThemeProvider,
  WithStyles,
  withStyles,
  Fab
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

interface Props extends WithStyles<typeof styles> {}
class App extends Component<Props> {
  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.App}>
          <CssBaseline />
          <header className={classes.AppHeader}>
            <Typography
              className={classes.h1}
              component="h1"
              variant="h2"
              gutterBottom
            >
              Markdown Notes - React
              <img
                src={logo}
                className={classes.AppLogo}
                alt="logo"
              />
            </Typography>
          </header>
          <div>
            <Fab
              color="primary"
              aria-label="Add"
              className={classes.fab}
            >
              <AddIcon />
            </Fab>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}


export default withStyles(styles)(App);
