import {
  Fab,
  MuiThemeProvider,
  WithStyles,
  withStyles
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg';
import theme from '../../styles-theme/theme';
import Note from '../Note';
import styles from './styles';
import NoteData from '../../models/NoteData';
import shortid from 'shortid';

interface Props extends WithStyles<typeof styles> {}

function App(props: Props) {
  const { classes } = props;
  const LS_KEY = 'MARKDOWN_NOTES.notes';

  // Hooks
  const [notes, setNotes] = useState(() => {
    const stored = localStorage.getItem(LS_KEY);
    if (stored === undefined || stored === null) {
      return [];
    } else {
      return JSON.parse(stored);
    }
  });

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(notes));
  });

  // Looping component generator
  const generateNotes = () => {
    return notes.map((note: NoteData, idx: number) => (
      <Note
        key={`${shortid.generate()}_${idx}`}
        index={idx}
        noteData={note}
        onSave={updateNote}
        onDelete={deleteNote}
      />
    ));
  };

  // UI event handlers
  const createNote = () => {
    setNotes(
      [
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          mdText: 'Click to edit'
        }
      ].concat(notes)
    );
  };

  const deleteNote = (idx: number) => {
    setNotes(
      notes.slice(0, idx).concat(notes.slice(idx + 1))
    );
  };

  const updateNote = (idx: number, note: NoteData) => {
    setNotes(
      notes
        .slice(0, idx)
        .concat([note])
        .concat(notes.slice(idx + 1))
    );
  };

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
            onClick={createNote}
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
