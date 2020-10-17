import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ResumeParagraphy from './ResumeParagraphy';
import ResumeTable from './ResumeTable';
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        resumeContainer: {
            padding: '0 8%',
        },
        resumeSection: {
            border: '1px solid #D9D9D9',
            boxSizing: 'border-box',
            borderRadius: '4px',
            background: '#FFFFFF',
            padding: '24px',
            marginBottom: '16px',
            position: 'relative',
            '&:hover': {
                border: '2px solid #A4A4A4',
            }
        },
        selectedResumeSection: {
            border: '2px solid #A4A4A4',
        },
        input: {
            marginLeft: theme.spacing(1),
        },
    }));



export default function Resume() {
    const classes = useStyles();
    const [selectedSectionIndex, setSelectedSectionIndex] = React.useState(-1);
    const handleSectionClick = (index: number) => {
        setSelectedSectionIndex(selectedSectionIndex === index ? -1 : index);
    };
    const onRemoveSection = (index: number) => {
    };
    const onSortSection = (index: number, direction: number) => {
    };
    return (<div className={classes.resumeContainer}>
        <Box className={clsx(classes.resumeSection, {
            [classes.selectedResumeSection]: selectedSectionIndex === 0
        })} onClick={() => handleSectionClick(0)} >
            <ResumeParagraphy title="Skill Summary" paragraph=""
                selected={selectedSectionIndex === 0}
                onRemove={() => onRemoveSection(0)}
                onDown={()=>onSortSection(0, 1)}
                onUp={()=>onSortSection(0, -1)}
                />
        </Box>

        <Box className={clsx(classes.resumeSection, {
            [classes.selectedResumeSection]: selectedSectionIndex === 1
        })} onClick={() => handleSectionClick(1)}>
            <ResumeTable title="Television" columns={3} rows={3}
                selected={selectedSectionIndex === 1}
                onRemove={() => onRemoveSection(1)} 
                onDown={()=>onSortSection(1, 1)}
                onUp={()=>onSortSection(1, -1)}
                />
        </Box>

        <Box className={clsx(classes.resumeSection, {
            [classes.selectedResumeSection]: selectedSectionIndex === 2
        })} onClick={() => handleSectionClick(2)}>
            <ResumeTable title="Film" columns={5} rows={4}
             selected={selectedSectionIndex === 2}
             onRemove={() => onRemoveSection(2)}
             onDown={()=>onSortSection(2, 1)}
             onUp={()=>onSortSection(2, -1)}
             />
        </Box>

    </div>)
}