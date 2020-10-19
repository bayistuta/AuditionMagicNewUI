import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { IResumeSection, ResumeState, Direction, ResumeSectionType } from './ResumeTypes';
import { RootState } from '../../../app/rootReducer';
import { removeSection, orderSection, addSection, changeText, deleteTableRow, changeTableConfig } from './resumeSlice'
import { ResumeSectionComponent as ResumeSection } from './ResumeSection';
import { AddNewIcon } from '../../../components/icon';
import ResumeNewDialog from './ResumeNewDialog';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        resumeContainer: {
            padding: '0 8%',
        },
        addNewContainer: {
            display: 'flex',
            justifyContent: 'flex-end',
            '& svg': {
                cursor: 'pointer'
            }
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
    const dispatch = useDispatch()
    const classes = useStyles();
    const [selectedSection, setSelectedSection] = React.useState('');
    const [newDialgoOpen, setNewDialgoOpen] = React.useState(false);
    const handleSectionClick = (sectionId: string) => {
        setSelectedSection(selectedSection === sectionId ? '' : sectionId);
    };
    const resume: ResumeState = useSelector(
        (state: RootState) => state.resume
    );

    const toRemoveSection = (sectionId: string) => {
        dispatch(removeSection(sectionId));
    };

    const toOrderSection = (sectionId: string, direction: Direction) => {
        dispatch(orderSection({ sectionId, direction }));
    };

    const toAddSection = (title: string, type: ResumeSectionType) => {
        dispatch(addSection({ title, type }));
    };

    const toChangeText = (sectionId: string, text: string, row?: number, column?: number) => {
        dispatch(changeText({ sectionId, text, row, column }));
    }

    const toDleteTableRow = (sectionId: string, rowIndex: number) => {
        dispatch(deleteTableRow({ sectionId, rowIndex }));
    }

    const toChangeTableConfig = (sectionId: string, rows: number, columns: number) => {
        dispatch(changeTableConfig({ sectionId, rows, columns }));
    }

    return (<>
        <div className={classes.resumeContainer}>
            {resume.sections.map((section: IResumeSection) => {
                return <ResumeSection
                    {...section}
                    onRemove={() => toRemoveSection(section.sectionId)}
                    onReOrder={(direction: Direction) => toOrderSection(section.sectionId, direction)}
                    onChangeText={(text: string, row?: number, column?: number) => toChangeText(section.sectionId, text, row, column)}
                    onDeleteTableRow={(rowIndex: number) => toDleteTableRow(section.sectionId, rowIndex)}
                    onChangeTableConfig={(rows: number, columns: number) => toChangeTableConfig(section.sectionId, rows, columns)}
                    selected={selectedSection === section.sectionId}
                    onSectionClick={(sectionId: string) => handleSectionClick(sectionId)} />
            })}
        </div>
        <div className={classes.addNewContainer}>
            <AddNewIcon viewBox="0 0 128 118" style={{ width: 128, height: 118 }}
                onClick={() => setNewDialgoOpen(true)}
            />
        </div>
        <ResumeNewDialog
            open={newDialgoOpen}
            hanldeClose={() => setNewDialgoOpen(false)}
            onCreateSection={(type: ResumeSectionType, title: string)=> toAddSection(title, type)}
        />
    </>)
}