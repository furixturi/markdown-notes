import theme from '../../styles-theme/theme';
import { Theme, createStyles } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
  Note: {
    minWidth: 275,
    maxWidth: 640,
    margin: '15px auto',
    padding: '30px 15px'
  },
  header: {
    display: 'flex',
  },
  createdAt: {
    
  }
});

export default styles(theme);