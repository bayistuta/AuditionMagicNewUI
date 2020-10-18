import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { IResumeSection, ResumeState, Direction, ResumeSectionType } from './ResumeTypes';
import { RootState } from '../../../app/rootReducer';
import { removeSection, orderSection, addSection } from './resumeSlice'
import { ResumeSectionComponent as ResumeSection } from './ResumeSection';
import { AddNewIcon } from '../../../components/icon';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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
    const [sectionType, setSectionType] = React.useState('');
    const [sectionTitle, setSectionTitle] = React.useState('');
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

    const toAddSection = () => {
        dispatch(addSection({ title: sectionTitle, type: sectionType }));
    };
    // const onSortSection = (index: number, direction: number) => {
    // };
    return (<>
        <div className={classes.resumeContainer}>
            {resume.sections.map((section: IResumeSection) => {
                return <ResumeSection
                    {...section}
                    onRemove={() => toRemoveSection(section.sectionId)}
                    onReOrder={(direction: Direction) => toOrderSection(section.sectionId, direction)}
                    selected={selectedSection === section.sectionId}
                    onSectionClick={(sectionId: string) => handleSectionClick(sectionId)} />
            })}
        </div>
        <div className={classes.addNewContainer}>
            <AddNewIcon viewBox="0 0 128 118" style={{ width: 128, height: 118 }}
                onClick={() => setNewDialgoOpen(true)}
            />
        </div>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={newDialgoOpen}
            onClose={() => setNewDialgoOpen(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={newDialgoOpen}>
                <div className={classes.paper}>
                    <h2 id="transition-modal-title">New Resume Section</h2>
                    <div>
                        <div>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Section Type</FormLabel>
                                <RadioGroup row aria-label="position" name="position" defaultValue="top" value={sectionType} onChange={
                                    (event: React.ChangeEvent<HTMLInputElement>) => {
                                        setSectionType((event.target as HTMLInputElement).value);
                                      }
                                }>
                                    <FormControlLabel value="Paragraph" control={<Radio color="primary" />} label="Paragraph" />
                                    <FormControlLabel value="Table" control={<Radio color="primary" />} label="Table" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Section Title</FormLabel>
                                <TextField id="standard-required" value={sectionTitle} onChange={
                                    (event: React.ChangeEvent<HTMLInputElement>) => {
                                        setSectionTitle((event.target as HTMLInputElement).value);
                                    }} />
                            </FormControl>
                        </div>
                        <div>
                            <Link href="#" onClick={(event: React.SyntheticEvent) => {
                                event.preventDefault();
                                toAddSection();
                                setNewDialgoOpen(false);
                            }}>
                                Continue
                            </Link>
                        </div>
                    </div>
                </div>
            </Fade>
        </Modal>
    </>)
}