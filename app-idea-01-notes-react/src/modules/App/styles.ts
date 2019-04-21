import theme from '../../styles-theme/theme';
import { Theme, createStyles } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    App: {
      textAlign: 'center',
      backgroundColor: '#ffffff'
    },

    h1: {
      fontWeight: 500
    },

    AppLogo: {
      animation: 'App-logo-spin infinite 5s linear',
      height: '1em',
      pointerEvents: 'none',
      lineHeight: '1em',
      verticalAlign: 'middle'
    },

    AppHeader: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.primary.main
    },

    fab: {},

    '@keyframes App-logo-spin': {
      from: {
        transform: 'rotate(0deg)'
      },
      to: {
        transform: 'rotate(360deg)'
      }
    }
  });

export default styles(theme);
