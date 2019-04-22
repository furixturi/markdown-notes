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

interface Props extends WithStyles<typeof styles> {
  index: number;
  sourceText?: string;
  onSave: (key: number, value: string) => void; 
}

function Note(props: Props) {
  const { classes, sourceText } = props;
  
  const [mdNoteSrc, setMdNoteSrc] = useState(
    props.sourceText ? props.sourceText : 'Click to edit'
  );
  const [editing, setEditing] = useState(false);

  return (
    <Card className={classes.Card}>
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
            console.log('DEBUG: onBlur, mdNoteSrc:', mdNoteSrc)
            setEditing(false);
            props.onSave(props.index, mdNoteSrc)
          }}
        />
      )}
    </Card>
  );
}

export default withStyles(styles)(Note);
