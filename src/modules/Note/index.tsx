import {
  Card,
  TextField,
  Typography,
  WithStyles,
  withStyles,
  CardContent,
  IconButton
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
    if (editing === false) {
      props.onSave(index, note);
    }
  });

  return (
    <Card className={classes.Note}>
      <CardContent>
        
        <header className={classes.header}>
          <div>
            <Typography
              component="span"
              variant="body2"
            >
              {`Updated at: ${new Date(
                note.updatedAt
              ).toLocaleString()}`}
            </Typography>
            <Typography
              component="span"
              variant="body2"
              color="textSecondary"
            >
              {`Created at: ${new Date(
                note.createdAt
              ).toLocaleString()}`}
            </Typography>
          </div>
          <IconButton
            aria-label="Delete"
            className={classes.deleteButton}
            onClick={() => {
              props.onDelete(props.index);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </header>
        <div className={classes.content}>
        {!editing && (
          <Typography
            className={classes.renderedText}
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
            className={classes.textArea}
            multiline
            fullWidth
            autoFocus
            value={note.mdText}
            InputProps={{disableUnderline: true}}
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
            onFocus={e => {
              e.target.select()
            }}
          />
        )}
        </div>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(Note);
