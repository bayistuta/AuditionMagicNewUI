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
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';
import {range} from '../../../utils/array';
import { grey } from '@material-ui/core/colors';
import { blue } from '@material-ui/core/colors';

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
            height: '48px',
            padding: '14px 18px',
            position: 'absolute',
            right: '-16px',
            top: '-56px',
            display: 'none',
            '& svg': {
                cursor: 'pointer',
            },
        },
        actionContainerSelected: {
            display: 'flex',
            justifyContent: 'space-between',
        },
        actionContainerItem: {
            display: 'flex',
            justifyContent: 'space-between',
        },
        actionContainerLong: {
            width: '418px',
        },
        sectionTitle: {
            fontSize: '20px',
            color:'#212121',
            fontWeight: 500,
            lineHeight: 24,
            marginBottom: '9px'
        },
        select: {
            width: '90px',
            background: 'white',
            color: '#212121',
            fontSize: '14px',
            backgroundColor: '#F5F5F5',
            paddingLeft: 14,
            borderRadius: '4px',
            "&:hover": {
                borderColor: grey[400],
            },
            "&:focus": {
                borderRadius: '4px',
                background: 'white',
                borderColor: blue[200]
            },
        },
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
            onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                e.stopPropagation();
                if (typeof props.onSectionClick === 'function') props.onSectionClick(props.sectionId);
            }}
        >
            <Typography variant="h6" gutterBottom>
                <InputBase
                    placeholder="Enter title here ..."
                    value={props.title}
                    className={classes.sectionTitle}
                    onChange={ (event: React.ChangeEvent<{ value: unknown }>) => {
                        props.onChangeTitle( event.target.value );
                    }}
                />
            </Typography>
            <Box onClick={(event: React.MouseEvent) => {
                event.stopPropagation();
            }}>
                {props.type === ResumeSectionType.Paragraphy &&
                    <ResumeParagraph content={props.textContent || ''}
                        onCellChange={props.onChangeText}
                    />}
                {props.type !== ResumeSectionType.Paragraphy &&
                    <ResumeTable rows={props.rows || 3} columns={props.columns || 4}
                        onCellChange={props.onChangeText}
                        onDeleteRow={props.onDeleteTableRow}
                        onReOrderRow={props.onReorderTableRow}
                        content={props.content || []} />}
            </Box>
            <Box className={clsx(classes.actionContainer, {
                [classes.actionContainerSelected]: props.selected,
                [classes.actionContainerLong]: props.type !== ResumeSectionType.Paragraphy
            })} >
                {
                    props.type !== ResumeSectionType.Paragraphy &&
                    <div className={classes.actionContainerItem} style={{width:270}}>
                        <Select
                            id="demo-simple-select"
                            disableUnderline
                            value={props.rows}
                            classes={{ root: classes.select}}
                            onChange={ (event: React.ChangeEvent<{ value: unknown }>) => {
                                props.onChangeTableConfig(event.target.value as number, props.columns || 4);
                            }}>
                                {range(2, 10).map( x => {
                                    return <MenuItem value={x}>{x} Rows</MenuItem>
                                })}
                        </Select>
                        <Select
                            id="demo-simple-select"
                            disableUnderline
                            value={props.columns}
                            classes={{ root: classes.select}}
                            onChange={ (event: React.ChangeEvent<{ value: unknown }>) => {
                                props.onChangeTableConfig(props.rows || 3, event.target.value as number);
                            }}>
                                {range(2, 6).map( x => {
                                    return <MenuItem value={x}>{x} Columns</MenuItem>
                                })}
                        </Select>
                    </div>
                }
                <div className={classes.actionContainerItem} style={{width:90}}>
                    <DownIcon viewBox="0 0 16 16" style={{ width: 16, height: 16 }}
                        onClick={(e: React.MouseEvent) => {
                            e.preventDefault();
                            e.stopPropagation();
                            if (typeof props.onReOrder === 'function') props.onReOrder(Direction.Down);
                        }}
                    ></DownIcon>
                    <UpIcon viewBox="0 0 16 16" style={{ width: 16, height: 16 }}
                        onClick={(e: React.MouseEvent) => {
                            e.preventDefault();
                            e.stopPropagation();
                            if (typeof props.onReOrder === 'function') props.onReOrder(Direction.Up);
                        }}
                    ></UpIcon>
                    <DeleteIcon viewBox="0 0 16 16" style={{ width: 16, height: 16 }}
                        onClick={(e: React.MouseEvent) => {
                            e.preventDefault();
                            e.stopPropagation();
                            if (typeof props.onRemove === 'function') props.onRemove();
                        }}
                    ></DeleteIcon>
                </div>
            </Box>
        </Box>
    )
};
