import {
  Card,
  TextField,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './styles';

interface Props extends WithStyles<typeof styles> {}

function Note(props: Props) {
  const [mdNoteSrc, setMdNoteSrc] = useState(
    'Click to start writing'
  );

  const [editing, setEditing] = useState(false);

  const { classes } = props;

  return (
    <Card className={classes.Card}>
      {!editing && (
        <Typography
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
          }}
        />
      )}
    </Card>
  );
}

export default withStyles(styles)(Note);
