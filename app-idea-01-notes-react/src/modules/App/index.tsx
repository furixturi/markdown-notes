import CssBaseline from '@material-ui/core/CssBaseline';
import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import styles from './App.module.scss';

import Typography from '@material-ui/core/Typography';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <CssBaseline />
        <header className={styles.AppHeader}>
          <Typography component="h1" variant="h2" gutterBottom>
            Markdown Notes - React
            <img
              src={logo}
              className={styles.AppLogo}
              alt="logo"
            />
          </Typography>
        </header>
        <div className={styles.NoteContainer}>
        </div>
      </div>
    );
  }
}

export default App;
