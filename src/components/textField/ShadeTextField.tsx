import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { OutlinedInputProps } from '@material-ui/core/OutlinedInput';
import { grey } from '@material-ui/core/colors';

const useInputBaseStyle = makeStyles((theme: Theme) => {
    const error = '#ff6b81';
    return createStyles({
        root: {
            backgroundColor: grey[200],
            transition: '0.3s',
            height: '40px',
            borderRadius: '2px',
            "&:hover": {
                boxShadow: `0 0 0 1px #2962FF`,
            },
        },
        focused: {
            backgroundColor: '#fff',
            //border: '1px solid #2962FF',
            boxShadow: `0 0 0 1px #2962FF`,
        },
        error: {
            backgroundColor: '#fff0f0',
            '&$focused': {
                boxShadow: `0 0 0 2px ${error}`,
            },
        },
        disabled: {
            backgroundColor: grey[50],
        },
        input: {
            padding: '1rem',
        },
        formControl: {
            'label + &': {
                marginTop: 22,
            },
        },
    })
});

export const useInputLableStyle = makeStyles((theme: Theme) => {
    return createStyles({
        root: {
            fontSize: '14px',
            fontWeight: 500,
            color: '#4A4A4A',
            letterSpacing: '0.1px',
            '&$focused:not($error)': {
              color: theme.palette.text.primary,
            },
        },
        error: {},
        focused: {},
        shrink: {},
    })
});


export default function ShadeTextField(props: TextFieldProps) {
    const inputBaseStyle = useInputBaseStyle();
    const inputLableStyle = useInputLableStyle();
    return (
        <TextField
            InputProps={{ classes: inputBaseStyle, disableUnderline: true } as Partial<OutlinedInputProps>}
            InputLabelProps={{shrink: true, classes: inputLableStyle}}
            {...props}
        />
    );
}