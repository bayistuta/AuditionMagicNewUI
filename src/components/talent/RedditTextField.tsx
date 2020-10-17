import React from 'react';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { OutlinedInputProps } from '@material-ui/core/OutlinedInput';

const useStylesReddit = makeStyles((theme: Theme) =>
    createStyles({
    root: {
        width: '100%',
        border: '1px solid #e2e2e1',
        overflow: 'hidden',
        padding: '0px 5px',
        borderRadius: 2,
        backgroundColor: '#F5F5F5',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:hover': {
            backgroundColor: '#fff',
        },
        '&$focused': {
            backgroundColor: '#fff',
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            borderColor: theme.palette.primary.main,
        },
    },
    focused: {},
    }),
);

export default function RedditTextField(props: TextFieldProps) {
  const classes = useStylesReddit();

  return (
    <TextField
      InputProps={{ classes, disableUnderline: true } as Partial<OutlinedInputProps>}
      {...props}
    />
  );
}