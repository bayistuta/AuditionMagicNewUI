import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Select, { SelectProps } from '@material-ui/core/Select';
import {MenuProps} from '@material-ui/core/Menu';

const useShadeSelectStyle = makeStyles((theme: Theme) => {
    return createStyles({
        root: {
            height: '40px',
            background: 'white',
            color: '#212121',
            fontSize: '14px',
            backgroundColor: '#F5F5F5',
            padding: "0 0 0 14px",
            borderRadius: '2px',
            marginTop: '6px',
            lineHeight: '40px',
            "&:hover": {
                boxShadow: `0 0 0 1px #2962FF`,
            },
            "&:focus": {
                boxShadow: `0 0 0 1px #2962FF`,
            },
        },
        icon: {
            right: '12px',
            color: '#4A4A4A',
        },
        list: {
            fontSize: '12px',
            lineHeight: '16px',
            '& li': {
                fontSize: '12px',
                lineHeight: '16px'
            }
        }
    })
});

export default function ShadeSelect(props: SelectProps) {
    const shadeSelectStyle = useShadeSelectStyle();
    const menuProps = {
        classes: {
            list: shadeSelectStyle.list
        },
        anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
        },
        transformOrigin: {
            vertical: "top",
            horizontal: "left"
        },
        getContentAnchorEl: null
    };
    return (
        <Select
            {...props}
            classes={shadeSelectStyle}
            disableUnderline
            MenuProps={menuProps as Partial<MenuProps>}
        >
            {props.children}
        </Select>
    );
}