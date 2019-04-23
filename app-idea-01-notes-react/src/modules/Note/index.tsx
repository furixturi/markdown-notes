import {
  Card,
  TextField,
  Typography,
  WithStyles,
  withStyles,
  Fab
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './styles';
import NoteData from '../../models/NoteData';

interface Props extends WithStyles<typeof styles> {
  index: number;
  noteData: NoteData;
  onSave: (idx: number, note: NoteData) => void;
  onDelete: (idx: number) => void;
}

function Note(props: Props) {
  const { classes, noteData, index } = props;

  const [note, setNote] = useState(noteData);

  const [editing, setEditing] = useState();

  useEffect(() => {
    if(editing === false) {
      props.onSave(index, note);
    }
  })

  return (
    <Card className={classes.Note}>
      <header className={classes.header}>
        <div className={classes.createdAt}>
          <Typography
            component="div"
            variant="body1"
            gutterBottom
          >
            {new Date(note.createdAt).toLocaleString()}
          </Typography>
          <Typography
            component="div"
            variant="body1"
            gutterBottom
          >
            {new Date(note.updatedAt).toLocaleString()}
          </Typography>
        </div>
        <Fab
          color="secondary"
          aria-label="Delete"
          onClick={() => {
            props.onDelete(props.index);
          }}
        >
          <DeleteIcon />
        </Fab>
      </header>

      {!editing && (
        <Typography
          component="div"
          variant="body1"
          gutterBottom
          onClick={() => {
            setEditing(true);
          }}
        >
          <ReactMarkdown source={note.mdText} />
        </Typography>
      )}
      {editing && (
        <TextField
          multiline
          value={note.mdText}
          onChange={e => {
            const mdText = e.target.value;
            setNote(prevNote => ({
              ...prevNote,
              mdText
            }));
          }}
          onBlur={() => {
            const updatedAt = new Date();
            setNote(prevNote => ({
              ...prevNote,
              updatedAt
            }));
            setEditing(false);
          }}
        />
      )}
    </Card>
  );
}

export default withStyles(styles)(Note);
