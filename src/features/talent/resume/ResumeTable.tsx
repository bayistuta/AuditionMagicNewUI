import React from 'react';
import { ResumeRow } from './ResumeRow';
import { IResumeTableRow } from './ResumeTypes';
import {
    DragDropContext,
    Draggable,
    Droppable,
    DroppableProvided,
    DroppableStateSnapshot, DraggableProvided, DraggableStateSnapshot
  } from 'react-beautiful-dnd';

type ResumeTableParam = {
    columns: number,
    rows: number,
    content: IResumeTableRow[],
    onCellChange: (value: string, row: number, column: number) => void,
    onDeleteRow: (rowIndex: number) => void,
    onReOrderRow: (sourceIndex: number, destIndex: number) => void,
}
const ResumeTable = (props: ResumeTableParam) => {

    const onDragEnd = (result: any) => {
        if (!result.destination) {
            return;
        }
        props.onReOrderRow(result.source.index, result.destination.index);
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided:DroppableProvided, snapshot:DroppableStateSnapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {[...Array(props.rows)].map((e, i) => {
                    let record = props.content[i];
                    if (!record) {
                        record = { values: [] };
                    }
                    return <Draggable key={i.toString()} draggableId={i.toString()} index={i}>
                      {(providedDraggable:DraggableProvided, snapshotDraggable:DraggableStateSnapshot) => (
                          <div>
                            <div
                              ref={providedDraggable.innerRef}
                              {...providedDraggable.draggableProps}
                            >
                             <ResumeRow columns={props.columns || 4}
                                onCellChange={(value: string, column: number) => props.onCellChange(value, i, column)}
                                onDeleteRow={(rowIndex: number) => props.onDeleteRow(rowIndex)}
                                index={i}
                                id={i}
                                key={i}
                                values={record.values}
                                dragableHandler={providedDraggable.dragHandleProps}
                            />
                            </div>
                          </div>
                        )}
                    </Draggable>
                    })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
        </DragDropContext>
    );
};

export default ResumeTable;
