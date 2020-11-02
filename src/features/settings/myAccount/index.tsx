import React, { useContext} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ShadeTextField, ShadeSelect, useInputLableStyle } from '../../../components/textField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import {ThemeContext} from '../../../app/SwitchThemeProvider';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            padding: '0 8%',
        },
        card: {
            border: '1px solid #D9D9D9',
            boxSizing: 'border-box',
            borderRadius: '4px',
        },
        formItem: {
            '& .MuiFormControl-root': {
                width: '100%',
            }
        },
        formControlLabel: {
            '& svg': {
                width: '18px',
                height: '18px'
            }
        },
        formControlLabelText: {
            fontSize: '14px',
            color: '#212121'
        }
    }));



export default function MyAccount() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const inputLableStyle = useInputLableStyle();
    const setThemeName = useContext(ThemeContext);
    return (<Box className={classes.container}>
        <Grid container spacing={2}>
            <Grid xs={12} md={6} item >
                <Card variant="outlined" className={classes.card}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            My details
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid xs={12} md={6} item className={classes.formItem}>
                                <ShadeTextField
                                    label={'First Name'}
                                    placeholder={''}
                                    margin={'normal'}
                                />
                            </Grid>
                            <Grid xs={12} md={6} item className={classes.formItem}>
                                <ShadeTextField
                                    label={'Last Name'}
                                    placeholder={''}
                                    margin={'normal'}
                                />
                            </Grid>
                            <Grid xs={12} md={6} item className={classes.formItem}>
                                <FormControl margin={'normal'}>
                                    <InputLabel id="labelGender" classes={inputLableStyle} shrink>Gender</InputLabel>
                                    <ShadeSelect
                                        labelId={'labelGender'}
                                        placeholder={''}
                                    >
                                        <MenuItem value={'MALE'}>Male</MenuItem>
                                        <MenuItem value={'FMALE'}>Female</MenuItem>
                                    </ShadeSelect>
                                </FormControl>
                            </Grid>
                            <Grid xs={12} md={6} item className={classes.formItem}>
                                <ShadeTextField
                                    label={'Date of birth'}
                                    placeholder={''}
                                    margin={'normal'}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid xs={12} md={6} item >
                <Card variant="outlined" className={classes.card}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Contact details
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid xs={12} item className={classes.formItem}>
                                <ShadeTextField
                                    label={'Email address'}
                                    placeholder={''}
                                    margin={'normal'}
                                />
                            </Grid>
                            <Grid xs={12} md={6} item className={classes.formItem}>
                                <FormControl margin={'normal'}>
                                    <InputLabel id="labelCountry" classes={inputLableStyle} shrink>Country of residence</InputLabel>
                                    <ShadeSelect
                                        labelId={'labelCountry'}
                                        placeholder={''}
                                    >
                                        <MenuItem value={'US'}>United States</MenuItem>
                                        <MenuItem value={'AU'}>Austrialia</MenuItem>
                                        <MenuItem value={'NZ'}>Newzeland</MenuItem>
                                    </ShadeSelect>
                                </FormControl>
                            </Grid>
                            <Grid xs={12} md={6} item className={classes.formItem}>
                                <ShadeTextField
                                    label={'Contact number'}
                                    placeholder={''}
                                    margin={'normal'}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid xs={12} item>
                <Card variant="outlined" className={classes.card}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Talent details
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid xs={12} md={6} lg={3} item className={classes.formItem}>
                                <FormControl margin={'normal'}>
                                    <InputLabel id="labelArtistType" classes={inputLableStyle} shrink>Primary talent type</InputLabel>
                                    <ShadeSelect
                                        labelId={'labelArtistType'}
                                        placeholder={''}
                                    >
                                        <MenuItem value={'ARTS'}>Artists</MenuItem>
                                        <MenuItem value={'MODE'}>Model</MenuItem>
                                        <MenuItem value={'COMM'}>Commercial</MenuItem>
                                    </ShadeSelect>
                                </FormControl>
                            </Grid>
                            <Grid xs={12} md={6} lg={3}  item className={classes.formItem}>
                                <FormControl margin={'normal'}>
                                    <InputLabel id="labelAdult" classes={inputLableStyle} shrink>Adult/Minor</InputLabel>
                                    <ShadeSelect
                                        labelId={'labelAdult'}
                                        placeholder={''}
                                    >
                                        <MenuItem value={'ADULT'}>Adult</MenuItem>
                                        <MenuItem value={'CHLD'}>Children</MenuItem>
                                    </ShadeSelect>
                                </FormControl>
                            </Grid>
                            <Grid xs={12} md={6} lg={3}  item className={classes.formItem}>
                                <FormControl margin={'normal'}>
                                    <InputLabel id="labelAgeFrom" classes={inputLableStyle} shrink>Age range from</InputLabel>
                                    <ShadeSelect
                                        labelId={'labelAgeFrom'}
                                        placeholder={''}
                                    >
                                        <MenuItem value={10}>10 years old</MenuItem>
                                        <MenuItem value={20}>20 years old</MenuItem>
                                    </ShadeSelect>
                                </FormControl>
                            </Grid>
                            <Grid xs={12} md={6} lg={3}  item className={classes.formItem}>
                                <FormControl margin={'normal'}>
                                    <InputLabel id="labelAgeTo" classes={inputLableStyle} shrink>Age range to</InputLabel>
                                    <ShadeSelect
                                        labelId={'labelAgeTo'}
                                        placeholder={''}
                                    >
                                        <MenuItem value={10}>10 years old</MenuItem>
                                        <MenuItem value={20}>20 years old</MenuItem>
                                    </ShadeSelect>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <FormControlLabel classes={{label: classes.formControlLabelText, root: classes.formControlLabel}} control={<Checkbox name="checkedC" />} label="I am seeking representation and would like to be contacted by Agents and Managers" />
                        <Grid container spacing={2}>
                            <Grid xs={12} md={6} lg={3} item className={classes.formItem}>
                                <FormControl margin={'normal'}>
                                    <InputLabel id="lablContactMethod" classes={inputLableStyle} shrink>Preferred method of contact</InputLabel>
                                    <ShadeSelect
                                        labelId={'lablContactMethod'}
                                        placeholder={''}
                                    >
                                        <MenuItem value={'ARTS'}>Email</MenuItem>
                                        <MenuItem value={'MODE'}>Phone</MenuItem>
                                        <MenuItem value={'COMM'}>SMS</MenuItem>
                                    </ShadeSelect>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid xs={12} item >
                <Card variant="outlined" className={classes.card}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Change password
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid xs={12} lg={3} item className={classes.formItem}>
                                <ShadeTextField
                                    label={'Current password'}
                                    placeholder={''}
                                    margin={'normal'}
                                />
                            </Grid>
                            <Grid xs={12} lg={3}  item className={classes.formItem}>
                                <ShadeTextField
                                    label={'New password'}
                                    placeholder={''}
                                    margin={'normal'}
                                />
                            </Grid>
                            <Grid xs={12} lg={3}  item className={classes.formItem}>
                                <ShadeTextField
                                    label={'Confirm'}
                                    placeholder={''}
                                    margin={'normal'}
                                />
                            </Grid>
                        </Grid>
                        <FormControlLabel classes={{label: classes.formControlLabelText, root: classes.formControlLabel}} control={<Checkbox name="checkedC" />} label="Enable Multi-Factor Authentication" />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
       <Button variant="contained" color="primary" disableElevation onClick={()=>setThemeName('darkTheme')}>
  Drak
</Button>
<Button variant="contained" color="primary" disableElevation onClick={()=>setThemeName('lightTheme')}>
  Light
</Button>
    </Box>)
}