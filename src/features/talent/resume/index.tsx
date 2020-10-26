import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { IResumeSection, ResumeState, Direction, ResumeSectionType } from './ResumeTypes';
import { RootState } from '../../../app/rootReducer';
import { removeSection, orderSection, addSection, changeText, deleteTableRow, changeTableConfig, changeTitle, reorderTableRow } from './resumeSlice'
import { ResumeSectionComponent as ResumeSection } from './ResumeSection';
import { AddNewIcon } from '../../../components/icon';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useConfirm } from 'material-ui-confirm';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        resumeContainer: {
            padding: '0 8%',
        },
        addNewContainer: {
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'relative',
            '& svg': {
                cursor: 'pointer'
            }
        },
        newSectionPanel: {
            width: '112px',
            height: '110px',
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 8px 8px rgba(55, 71, 79, 0.04), 0px 8px 16px rgba(55, 71, 79, 0.08), 0px 10px 48px rgba(55, 71, 79, 0.08)',
            borderRadius: '4px',
            position: 'absolute',
            top: '-80px',
            right: '20px',
            display: 'none',
        },
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '8px 0px 0px 8px',
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 8px 8px rgba(55, 71, 79, 0.04), 0px 8px 16px rgba(55, 71, 79, 0.08), 0px 10px 48px rgba(55, 71, 79, 0.08)',
            borderRadius: '4px'
        },
    }));



export default function Resume() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const confirm = useConfirm();
    const [selectedSection, setSelectedSection] = React.useState('');
    const [newDialgoOpen, setNewDialgoOpen] = React.useState(false);
    const handleSectionClick = (sectionId: string) => {
        setSelectedSection(selectedSection === sectionId ? '' : sectionId);
    };
    const resume: ResumeState = useSelector(
        (state: RootState) => state.resume
    );

    const toRemoveSection = (sectionId: string) => {
        confirm({
            title: 'Are you sure you want to delete this content?',
            description: 'The content, text or media related to this section you are deleting, will be removed if you proceed',
        })
            .then(() => {
                dispatch(removeSection({sectionId}));
            });
    };

    const toOrderSection = (sectionId: string, direction: Direction) => {
        dispatch(orderSection({ sectionId, direction }));
    };

    const toAddSection = (title: string, type: ResumeSectionType) => {
        dispatch(addSection({ title, type }));
    };

    const toChangeText = (sectionId: string, text: string, row?: number, column?: number) => {
        dispatch(changeText({ sectionId, text, row, column }));
    };

    const toChangeTitle = (sectionId: string, title: string) => {
        dispatch(changeTitle({ sectionId, title }));
    };

    const toDleteTableRow = (sectionId: string, rowIndex: number) => {
        confirm({
            title: 'Are you sure you want to delete this content?',
            description: 'The content, text or media related to this row you are deleting, will be removed if you proceed',
        })
            .then(() => {
                dispatch(deleteTableRow({ sectionId, rowIndex }));
            });
    }

    const toChangeTableConfig = (sectionId: string, rows: number, columns: number) => {
        dispatch(changeTableConfig({ sectionId, rows, columns }));
    }

    const toReorderTableRow = (sectionId: string, sourceIndex: number, destIndex: number) => {
        dispatch(reorderTableRow({ sectionId, sourceIndex, destIndex }));
    } 

    return (<Box onClick={() => setNewDialgoOpen(false)}>
        <Box className={classes.resumeContainer}>
            {resume.sections.map((section: IResumeSection) => {
                return <ResumeSection
                    {...section}
                    onRemove={() => toRemoveSection(section.sectionId)}
                    onReOrder={(direction: Direction) => toOrderSection(section.sectionId, direction)}
                    onChangeText={(text: string, row?: number, column?: number) => toChangeText(section.sectionId, text, row, column)}
                    onDeleteTableRow={(rowIndex: number) => toDleteTableRow(section.sectionId, rowIndex)}
                    onChangeTableConfig={(rows: number, columns: number) => toChangeTableConfig(section.sectionId, rows, columns)}
                    onChangeTitle={(title: string) => toChangeTitle(section.sectionId, title)}
                    onReorderTableRow={(sourceIndex: number, destIndex: number) => toReorderTableRow(section.sectionId, sourceIndex, destIndex) }
                    selected={selectedSection === section.sectionId}
                    onSectionClick={(sectionId: string) => handleSectionClick(sectionId)} />
            })}
        </Box>
        <Box className={classes.addNewContainer}>
            <AddNewIcon viewBox="0 0 128 118" style={{ width: 128, height: 118 }}
                onClick={(event: React.MouseEvent) => {
                    setNewDialgoOpen(true);
                    event.stopPropagation();
                }}
            />
            <Box className={classes.newSectionPanel} style={{
                ...newDialgoOpen ? { display: 'block' } : {}
            }}>
                <List dense={false}>
                    <ListItem button onClick={(event: React.MouseEvent) => {
                        toAddSection('', ResumeSectionType.Table); setNewDialgoOpen(false);
                    }}>
                        <ListItemText
                            primary="Table"
                        />
                    </ListItem>
                    <ListItem button onClick={() => { toAddSection('', ResumeSectionType.Paragraphy); setNewDialgoOpen(false); }}>
                        <ListItemText
                            primary="Text Area"
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    </Box>)
}