import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from "clsx";
import {
   UpIcon,
   DownIcon,
   DeleteIcon
} from '../icon';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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

export interface IResumeSection {
    title: string,
    selected: boolean,
    onRemove: any,
    onUp?: any,
    onDown?: any
}

export const ResumeSection: React.FC<IResumeSection> = ({ children, title, selected, onRemove, onUp, onDown}) => {
    const classes = useStyles();
    return (<>
        <Typography variant="h6" gutterBottom>
            {title}
        </Typography>
        {children}
        <Box className={clsx(classes.actionContainer, {
            [classes.actionContainerSelected]: selected
        })} >
           <DownIcon viewBox="0 0 16 16" style={{ width: 16, height: 16 }} 
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (typeof onDown === 'function') onDown();
                }}
           ></DownIcon>
           <UpIcon viewBox="0 0 16 16" style={{ width: 16, height: 16 }}  
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (typeof onUp === 'function') onUp();
                }}
           ></UpIcon>
           <DeleteIcon viewBox="0 0 16 16" style={{ width: 16, height: 16 }} 
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (typeof onRemove === 'function') onRemove();
                }}
           ></DeleteIcon>
        </Box>
    </>)
};
