import { Fab, MuiThemeProvider, WithStyles, withStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg';
import theme from '../../styles-theme/theme';
import Note from '../Note';
import styles from './styles';

interface Props extends WithStyles<typeof styles> {}

function App(props: Props) {
  const { classes } = props;
  const LS_KEY = 'MARKDOWN_NOTES.notes';

  const [notes, setNotes] = useState(() => {
    const stored = localStorage.getItem(LS_KEY);
    if (stored === undefined || stored === null) {
      return ['Click to edit'];
    } else {
      return JSON.parse(stored);
    }
  });

  const generateNotes = () =>
    notes.map((note: string, idx: number) => (
      <Note
        key={`${note}_${idx}`}
        index={idx}
        sourceText={note}
        onSave={(i, value) => {
          setNotes(
            notes
              .slice(0, i)
              .concat([value])
              .concat(notes.slice(i + 1))
          );
        }}
      />
    ));
  
    const addNewNote = () => {
      setNotes(['Click to edit'].concat(notes));
    }

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(notes));
  });

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
            onClick={addNewNote}
          >
            <AddIcon />
          </Fab>
        </div>
        <div>{generateNotes()}</div>
      </div>
    </MuiThemeProvider>
  );
}

export default withStyles(styles)(App);
