import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {ResumeSectionType} from './ResumeTypes';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

type NewSectionParam = {
    open: boolean,
    onCreateSection: (type: ResumeSectionType, title: string) => void
    hanldeClose: () => void
}

const ResumeNewDialog = (props: NewSectionParam) => {
    const [title, setTitle] = React.useState('');
    const [type, setType] = React.useState('Paragraph');
    return (
        <div>
            <Dialog open={props.open} onClose={props.hanldeClose} aria-labelledby="form-dialog-title" 
                onEntered={ (node: HTMLElement, isAppearing: boolean) => {
                    setTitle(''); 
                    setType('Paragraph');
                }}>
                <DialogTitle id="form-dialog-title">New Section</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Section Title"
                        type="text"
                        value={title}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setTitle((event.target as HTMLInputElement).value);
                        }}
                        fullWidth
                    />
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={type}
                        onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                            setType(event.target.value as string);
                        }}
                    >
                        <MenuItem value={'Paragraph'}>Paragraph</MenuItem>
                        <MenuItem value={'Table'}>Table</MenuItem>
                    </Select>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.hanldeClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => {
                        props.hanldeClose();
                        if (props.onCreateSection !== null) 
                            props.onCreateSection(type !== 'Paragraph' ? ResumeSectionType.Table : ResumeSectionType.Paragraphy, title);
                    }} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ResumeNewDialog;