import React, { useState, useCallback } from 'react';
import { ResumeRow } from './ResumeRow';
import { IResumeTableRow } from './ResumeTypes';

type ResumeTableParam = {
    columns: number,
    rows: number,
    content: IResumeTableRow[],
    onCellChange: (value: string, row: number, column: number) => void,
    onDeleteRow: (rowIndex: number) => void,
}
const ResumeTable = (props: ResumeTableParam) => {

    const moveRow = useCallback(
        (dragIndex: number, hoverIndex: number) => {
        },
        [],
    );

    return (<>
        {[...Array(props.rows)].map((e, i) => {
            let record = props.content[i];
            if (!record) {
                record = { values: [] };
            }
            return <ResumeRow columns={props.columns || 4}
                onCellChange={(value: string, column: number) => props.onCellChange(value, i, column)}
                onDeleteRow={(rowIndex: number) => props.onDeleteRow(rowIndex)}
                index={i}
                id={i}
                key={i}
                values={record.values}
                moveRow={moveRow}
            />
        })}
    </>)
};

export default ResumeTable;
