import theme from '../../styles-theme/theme';
import deepPurple from '@material-ui/core/colors/deepPurple';

import { Theme, createStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const styles = (theme: Theme) => createStyles({
  Note: {
    minWidth: 275,
    maxWidth: 640,
    margin: '15px auto',
    '& p': {
      marginBottom: 0
    }
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '-16px -16px 16px',
    padding: '16px 16px 4px',
    backgroundColor: grey[50],
    boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.2)',
    color: theme.palette.text.hint
  },
  deleteButton: {
    margin: '-8px -8px 0 0',
    alignSelf: 'flex-start'
  },
  renderedText: {
    minHeight: 150,
    marginBottom: 0
  },
  textArea: {
    fontFamily: 'Times'
  },
  content: {
    minHeight: 150
  }
});

export default styles(theme);