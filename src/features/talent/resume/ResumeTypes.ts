export enum Direction { 
    Up, 
    Down 
}

export enum ResumeSectionType { 
    Paragraphy, 
    Table 
}

export interface IResumeSection {
    sectionId: string,
    title: string,
    type: ResumeSectionType
    rows?: number,
    columns?: number,
    content?: IResumeTableRow[]
    textContent?: string
}

export interface IResumeTableRow {
    values: string[]
}

export interface IResumeSectionAction {
    onRemove: any,
    onReOrder: any,
    onChangeText: any,
    onDeleteTableRow: any,
    onChangeTableConfig: any,
    onChangeTitle: any,
    onReorderTableRow: any,
}

export type ResumeState = {
    sections: IResumeSection[]
} 