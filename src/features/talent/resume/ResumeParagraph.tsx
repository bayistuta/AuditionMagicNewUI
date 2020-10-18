import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        input: {
            marginLeft: theme.spacing(1),
        },
    }));

type ResumeParagraphPara = {
    content: string
}
const ResumeParagraph = (props:ResumeParagraphPara) => {
    const classes = useStyles();
    return (<>
         <InputBase
            className={classes.input}
            placeholder="Enter text here ..."
            inputProps={{ 'aria-label': '' }}
            value={props.content}
        />
    </>)
};

export default ResumeParagraph;