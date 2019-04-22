import {
  Card,
  TextField,
  Typography,
  WithStyles,
  withStyles,
  Fab
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './styles';

interface Props extends WithStyles<typeof styles> {
  index: number;
  sourceText?: string;
  onSave: (key: number, value: string) => void;
  onDelete: (key: number) => void;
}

function Note(props: Props) {
  const { classes, sourceText } = props;

  const [mdNoteSrc, setMdNoteSrc] = useState(
    props.sourceText ? props.sourceText : 'Click to edit'
  );
  const [editing, setEditing] = useState(false);

  return (
    <Card className={classes.Card}>
      <Fab
        color="secondary"
        aria-label="Delete"
        onClick={() => {
          props.onDelete(props.index);
        }}
      >
        <DeleteIcon />
      </Fab>
      {!editing && (
        <Typography
          component="div"
          variant="body1"
          gutterBottom
          onClick={() => {
            setEditing(true);
          }}
        >
          <ReactMarkdown source={mdNoteSrc} />
        </Typography>
      )}
      {editing && (
        <TextField
          multiline
          value={mdNoteSrc}
          onChange={e => {
            setMdNoteSrc(e.target.value);
          }}
          onBlur={() => {
            setEditing(false);
            props.onSave(props.index, mdNoteSrc);
          }}
        />
      )}
    </Card>
  );
}

export default withStyles(styles)(Note);
