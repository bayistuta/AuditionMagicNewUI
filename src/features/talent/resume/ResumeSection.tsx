import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from "clsx";
import {
   UpIcon,
   DownIcon,
   DeleteIcon
} from '../../../components/icon';

import { IResumeSection, IResumeSectionAction, ResumeSectionType, Direction } from './ResumeTypes';
import ResumeParagraph from './ResumeParagraph';
import ResumeTable from './ResumeTable';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    actionContainer: {
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 8px 8px rgba(55, 71, 79, 0.04), 0px 8px 16px rgba(55, 71, 79, 0.08), 0px 10px 48px rgba(55, 71, 79, 0.08)',
        borderRadius: '8px',
        minWidth: '128px',
        height: '48px',
        padding: '14px 18px',
        position: 'absolute',
        right: '-16px',
        top: '-56px',
        display: 'none',
        '& svg': {
            cursor: 'pointer',
        }
    },
    actionContainerSelected: {
        display: 'flex',
        justifyContent: 'space-between',
    }
  }));

export type ResumeSectionState = {
    selected: boolean,
    onSectionClick: any,
    children?: any,
} & IResumeSection & IResumeSectionAction

export const ResumeSectionComponent: React.FC<ResumeSectionState> = (props: ResumeSectionState) => {
    const classes = useStyles();
    return (
        <Box className={clsx(classes.resumeSection, {
            [classes.selectedResumeSection]: props.selected
        })} 
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (typeof props.onSectionClick === 'function') props.onSectionClick(props.sectionId);
            }} 
        >
            <Typography variant="h6" gutterBottom>
            {props.title}
            </Typography>
            {props.type === ResumeSectionType.Paragraphy && 
                <ResumeParagraph content={props.textContent || ''} />}
            {props.type !== ResumeSectionType.Paragraphy && 
                <ResumeTable rows={props.rows || 3} columns={props.columns || 4} content={props.content || []} />}
            <Box className={clsx(classes.actionContainer, {
                [classes.actionContainerSelected]: props.selected
            })} >
            <DownIcon viewBox="0 0 16 16" style={{ width: 16, height: 16 }} 
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (typeof props.onReOrder === 'function') props.onReOrder(Direction.Down);
                    }}
            ></DownIcon>
            <UpIcon viewBox="0 0 16 16" style={{ width: 16, height: 16 }}  
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (typeof props.onReOrder === 'function') props.onReOrder(Direction.Up);
                    }}
            ></UpIcon>
            <DeleteIcon viewBox="0 0 16 16" style={{ width: 16, height: 16 }} 
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (typeof props.onRemove === 'function') props.onRemove();
                    }}
            ></DeleteIcon>
            </Box>
        </Box>
    )
};
