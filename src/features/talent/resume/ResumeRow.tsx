import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { ResumeMediaIcon, DeleteIcon, MoveIcon } from '../../../components/icon';
import RedditTextField from '../../../components/redditTextField';
import { useDrag, useDrop, DropTargetMonitor } from 'react-dnd';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    actionContainer: {
        width: 200,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        '& svg': {
            width: 16,
            height: 16,
            marginLeft: 16,
            cursor:'pointer'
        }
    }
  }));


export interface ResumeRowProps {
    id: any
    index: number
    columns: number,
    values: string[]
    moveRow: (dragIndex: number, hoverIndex: number) => void
}

interface DragItem {
    index: number
    id: string
    type: string
}


export const ResumeRow: React.FC<ResumeRowProps> = ({ id, index, columns, values, moveRow }) => {
    const classes = useStyles();
   
    return (<>
        <Grid container spacing={3}>
            {[...Array(columns)].map((e, i) => {
                return <Grid item xs>
                    <RedditTextField fullWidth value={values[i] || ''}/>
                </Grid>
            })}
            <Grid className={classes.actionContainer} >
                <ResumeMediaIcon viewBox="0 0 16 16"  />
                <MoveIcon viewBox="0 0 16 16"  />
                <DeleteIcon viewBox="0 0 16 16"  />
            </Grid>
        </Grid>
    </>)
};
