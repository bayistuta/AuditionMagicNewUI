import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {MyTab, MyTabs} from '../../components/nav';
import Box from '@material-ui/core/Box';
import MyAccount from "./myAccount";
interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
  }
  
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Box>{children}</Box>
          </Box>
        )}
      </div>
    );
  }

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tab: {
        
    },
    tabLabel: {
        '& span':{
            alignItems: 'flex-start',
            color: '#4A4A4A !important',
            textTransform: 'capitalize',
        }
    }
  })
);

export default function Settings() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <MyTabs value={value} onChange={handleChange}  className={classes.tab}>
                <MyTab label="My Account" />
                <MyTab label="Statistics" />
                <MyTab label="Skills" />
                <MyTab label="Social" />
                <MyTab label="Integrations" />
                <MyTab label="Plan"  />
                <MyTab label="Billing/Invoices" />
            </MyTabs>
            <TabPanel value={value} index={0}>
                <MyAccount />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2} >
                Item Three
            </TabPanel>
        </>
    );
}