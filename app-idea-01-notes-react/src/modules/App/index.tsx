import {
  Fab,
  MuiThemeProvider,
  WithStyles,
  withStyles
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import theme from '../../styles-theme/theme';
import styles from './styles';
import Note from '../Note';

interface Props extends WithStyles<typeof styles> {}
class App extends Component<Props> {
  generateNotes(notes: Array<string>): Array<JSX.Element> {
    return notes.map(note => <Note sourceText={note} />);
  }

  render() {
    const { classes } = this.props;

    const dummyTexts = [
      '# text 1 \n- bullet \n- gun 1',
      '# text 2 \n- bullet 2 \n- gun 2'
    ];

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.App}>
          <CssBaseline />
          <header className={classes.AppHeader}>
            <Typography
              component="h1"
              variant="h3"
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
          <div>{this.generateNotes(dummyTexts)}</div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
