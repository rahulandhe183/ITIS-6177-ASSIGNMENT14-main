import { Entity } from '@loopback/repository';
export declare class Note extends Entity {
    id?: string;
    title: string;
    content?: string;
    constructor(data?: Partial<Note>);
}
export interface NoteRelations {
}
export declare type NoteWithRelations = Note & NoteRelations;
