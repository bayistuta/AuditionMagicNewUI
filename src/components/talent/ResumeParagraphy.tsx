import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { IResumeSection, ResumeSection } from './ResumeSection';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
        marginLeft: theme.spacing(1),
    },
  }));

interface IResumeParagraphy extends IResumeSection {
    paragraph: string
}
const ResumeParagraphy = ({ title, selected, paragraph, onRemove, onDown, onUp }: IResumeParagraphy) => {
    const classes = useStyles();
    return (<>
        <ResumeSection title={title} selected={selected} onRemove={onRemove} onDown={onDown} onUp={onUp}>
            <InputBase
                className={classes.input}
                placeholder="Enter text here ..."
                inputProps={{ 'aria-label': '' }}
                value={paragraph}
            />
        </ResumeSection>
    </>)
};

export default ResumeParagraphy;