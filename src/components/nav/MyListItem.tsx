import { withStyles } from '@material-ui/core/styles';
import MuiListItem from '@material-ui/core/ListItem';

const MyListItem = withStyles({
  root: {
    '&$selected': {
      backgroundColor: '#4A4A4A',
    },
    '&$selected:hover': {
        backgroundColor: '#4A4A4A',
    },
    '&:hover': {
      backgroundColor: '#4A4A4A',
    },
    borderRadius: '4px',
    height: '40px',
    marginBottom: '16px',
    padding: '0px 0px 0px 8px',
    '& span': {
        fontSize: '14px',
        color: '#FFF',
    },
    '& .MuiListItemIcon-root': {
        minWidth: '46px',
    }
  },
  selected: {}
})(MuiListItem);

export default MyListItem;