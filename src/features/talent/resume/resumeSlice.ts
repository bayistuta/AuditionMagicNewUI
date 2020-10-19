import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Guid } from 'guid-typescript';
import { Direction, ResumeSectionType, ResumeState} from './ResumeTypes'

interface AddSectionPayload {
    title: string,
    type: ResumeSectionType,
}

interface OrderSectionPayload {
    sectionId: string,
    direction: Direction,
}

interface ChangeResumeTablePayload {
    sectionId: string,
    direction: Direction,
}

interface ChangeSectionTextPayload {
    sectionId: string,
    text: string,
    row?: number,
    column?: number
}

interface DeleteTableRowPayload {
    sectionId: string,
    rowIndex: number,
}

interface ChangeTableRowConfigPayload {
    sectionId: string,
    rows: number,
    columns: number,
}

let initialState: ResumeState = {
    sections: [{
        sectionId: Guid.create().toString(),
        title: 'Skill Summary',
        textContent: '',
        type: ResumeSectionType.Paragraphy
    }, {
        sectionId: Guid.create().toString(),
        title: 'Film',
        rows: 3,
        columns: 4,
        content: [
            {
                values: ['a', 'a','a', 'a']
            },
            {
                values: ['b', 'b','b', 'b']
            },
            {
                values: ['c', 'c','c', 'c']
            },
        ],
        type: ResumeSectionType.Table
    }
    , {
        sectionId: Guid.create().toString(),
        title: 'Film',
        rows: 4,
        columns: 3,
        content: [
            {
                values: ['a', 'a','a', 'a']
            },
            {
                values: ['b', 'b','b', 'b']
            },
            {
                values: ['c', 'c','c', 'c']
            },
            {
                values: ['d', 'd','d', 'd']
            },
        ],
        type: ResumeSectionType.Table
    }
    , {
        sectionId: Guid.create().toString(),
        title: 'Traning',
        textContent: '',
        type: ResumeSectionType.Paragraphy
    }]
}

const resumeSlice = createSlice({
    name: 'resume',
    initialState,
    reducers: {
        addSection(state: ResumeState, action: PayloadAction<AddSectionPayload>) {
            state.sections.push({
                sectionId: Guid.create().toString(),
                title: action.payload.title,
                type: action.payload.type
            });
        },
        removeSection(state: ResumeState, action: PayloadAction<string>) {
           state.sections = state.sections.filter(section => section.sectionId !== action.payload);
        },
        orderSection(state: ResumeState, action: PayloadAction<OrderSectionPayload>) {
            const toOrderSectionIndex = state.sections.findIndex(section => section.sectionId === action.payload.sectionId);
            if (toOrderSectionIndex > -1) {
                if (toOrderSectionIndex === 0 && action.payload.direction === Direction.Up) {
                    return 
                }
                if (toOrderSectionIndex === state.sections.length - 1 && action.payload.direction === Direction.Down) {
                    return;
                }
                const toReplaceIndex = toOrderSectionIndex + (action.payload.direction === Direction.Up ? -1 : 1);
                const section = state.sections[toOrderSectionIndex];
                const toReplaceSection = state.sections[toReplaceIndex];
                state.sections[toOrderSectionIndex] = toReplaceSection;
                state.sections[toReplaceIndex] = section;
            }
        },
        changeText(state: ResumeState, action: PayloadAction<ChangeSectionTextPayload>) {
            const section = state.sections.find(x => x.sectionId === action.payload.sectionId);
            const findSection = section || {content: []};
            if (section?.type === ResumeSectionType.Paragraphy) {
                section.textContent = action.payload.text;
            } else {
                let rowIndex = action.payload.row || 0;
                let columnIndex = action.payload.column || 0;
                let rows = findSection.content || [];
                rows[rowIndex].values[columnIndex] = action.payload.text;
            }
        },
        deleteTableRow(state: ResumeState, action: PayloadAction<DeleteTableRowPayload>) {
            const section = state.sections.find(x => x.sectionId === action.payload.sectionId);
            if (section !== null && section?.type === ResumeSectionType.Table) {
                let rows = section.content || [];
                if (action.payload.rowIndex < rows.length) {
                    section.content = rows.filter((x,i) => i !== action.payload.rowIndex);
                    section.rows = (section.rows || 0) - 1 ;
                }
            }
        },
        changeTableConfig(state: ResumeState, action: PayloadAction<ChangeTableRowConfigPayload>) {
            const section = state.sections.find(x => x.sectionId === action.payload.sectionId && 
                x.type === ResumeSectionType.Table);
            const findSection = section || {rows: 0, columns: 0};
            if (section !== null) {
                findSection.rows = action.payload.rows;
                findSection.columns = action.payload.columns;
            }
        },
    }
})

export const {
    addSection,
    removeSection,
    orderSection,
    changeText,
    deleteTableRow,
    changeTableConfig
} = resumeSlice.actions

export default resumeSlice.reducer
