import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Guid } from 'guid-typescript';
import { Direction, ResumeSectionType, ResumeState} from './ResumeTypes'

interface AddSectionPayload {
    title: string,
    type: string,
}

interface OrderSectionPayload {
    sectionId: string,
    direction: Direction,
}

interface ChangeResumeTablePayload {
    sectionId: string,
    direction: Direction,
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
                type: action.payload.type === 'Paragraph' ? ResumeSectionType.Paragraphy : ResumeSectionType.Table
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
        changeTableColumns(state: ResumeState, action: PayloadAction<ChangeResumeTablePayload>) {
            
        },
        changeTableRows(state: ResumeState, action: PayloadAction<ChangeResumeTablePayload>) {
            
        },
    }
})

export const {
    addSection,
    removeSection,
    orderSection,
    changeTableColumns,
    changeTableRows
} = resumeSlice.actions

export default resumeSlice.reducer
