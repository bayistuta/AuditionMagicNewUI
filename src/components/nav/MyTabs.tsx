import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';

const MyTabs = withStyles({
  root: {
    borderBottom: "1px solid #D9D9D9"
  },
  indicator: {
    backgroundColor: "#212121"
  },
  selected: {}
})(Tabs);

export default MyTabs;