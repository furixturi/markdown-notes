import theme from '../../styles-theme/theme';
import { Theme, createStyles } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
  Card: {
    minWidth: 275,
    maxWidth: 640
  }
});

export default styles(theme);