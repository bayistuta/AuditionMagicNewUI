import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { ResumeMediaIcon, DeleteIcon, MoveIcon } from '../../../components/icon';
import RedditTextField from '../../../components/redditTextField';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        actionContainer: {
            width: 120,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingRight: '16px',
            '& svg': {
                width: 16,
                height: 16,
                marginLeft: 16,
                cursor: 'pointer'
            }
        }
    }));

export const ItemTypes = {
    CARD: 'card',
}

export interface ResumeRowProps {
    id: any
    index: number
    columns: number,
    values: string[],
    onCellChange: (value: string, colum: number) => void,
    onDeleteRow: (rowIndex: number) => void,
    moveRow: (dragIndex: number, hoverIndex: number) => void,
}

interface DragItem {
    index: number
    id: string
    type: string
}


export const ResumeRow = (props: ResumeRowProps) => {
    const classes = useStyles();
    return (<>
        <Grid container spacing={3}>
            {[...Array(props.columns)].map((e, i) => {
                return <Grid item xs>
                    <RedditTextField fullWidth value={props.values[i] || ''}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            event.stopPropagation();
                            if (props.onCellChange !== null) props.onCellChange((event.target as HTMLInputElement).value, i);
                        }} />
                </Grid>
            })}
            <Grid className={classes.actionContainer} >
                <ResumeMediaIcon viewBox="0 0 16 16" />
                <MoveIcon viewBox="0 0 16 16" />
                <DeleteIcon viewBox="0 0 16 16"
                    onClick={(event: React.MouseEvent) => {
                        event.stopPropagation();
                        if (props.onDeleteRow !== null) props.onDeleteRow(props.index);
                    }}
                />
            </Grid>
        </Grid>
    </>)
};
