import React, { useState, useCallback } from 'react';
import { ResumeRow } from './ResumeRow';
import { IResumeTableRow } from './ResumeTypes';

type ResumeTableParam = {
    columns: number,
    rows: number,
    content: IResumeTableRow[]
}
const ResumeTable = (props: ResumeTableParam) => {
    const [records, setRecords] = useState([
        {
            id: 1,
            texts: ['a', 'b', 'c', 'd', 'a'],
        },
        {
            id: 2,
            texts: ['a2', 'b2', 'c2', 'd2'],
        },
        {
            id: 3,
            texts: ['a3', 'b3', 'c3', 'd3'],
        },
    ]);

    const moveRow = useCallback(
        (dragIndex: number, hoverIndex: number) => {
        },
        [],
    );

    return (<>
        {[...Array(props.rows)].map((e, i) => {
                let record = records[i];
                if (!record) {
                    record = { id: i, texts: [] };
                }
                return <ResumeRow columns={props.columns || 4}
                    index={i}
                    id={record.id}
                    key={record.id}
                    values={record.texts}
                    moveRow={moveRow}
                />
            })}
    </>)
};

export default ResumeTable;
