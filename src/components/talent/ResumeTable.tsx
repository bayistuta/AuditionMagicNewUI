import React, { useState, useCallback }  from 'react';
import Typography from '@material-ui/core/Typography';
import {ResumeRow} from './ResumeRow';
import { IResumeSection, ResumeSection } from './ResumeSection';

export interface IResumeTableProps extends IResumeSection {
    rows: number,
    columns: number,
}

const ResumeTable: React.FC<IResumeTableProps> = ({ title, selected, rows, columns, onRemove, onDown, onUp}) => {
    const [records, setRecords] = useState([
        {
            id: 1,
            texts: ['a','b','c','d','a'],
        },
        {
            id: 2,
            texts: ['a2','b2','c2','d2'],
        },
        {
            id: 3,
            texts: ['a3','b3','c3','d3'],
        },
      ]);
 
    const moveRow = useCallback(
        (dragIndex: number, hoverIndex: number) => {
        },
        [],
    ); 
      
    return (<>
        <ResumeSection title={title} selected={selected} onRemove={onRemove} onDown={onDown} onUp={onUp}>
            {[...Array(rows)].map((e, i) => {
                let record = records[i];
                if (!record) {
                    record = {id : i, texts: []};
                }
                return <ResumeRow columns={columns} 
                    index={i} 
                    id={record.id} 
                    key={record.id} 
                    values={record.texts} 
                    moveRow={moveRow}
                />
            })}

        </ResumeSection>

        
    </>)
};

export default ResumeTable;