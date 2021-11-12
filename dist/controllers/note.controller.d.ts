import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Note } from '../models';
import { NoteRepository } from '../repositories';
export declare class NoteController {
    noteRepository: NoteRepository;
    constructor(noteRepository: NoteRepository);
    create(note: Omit<Note, 'id'>): Promise<Note>;
    count(where?: Where<Note>): Promise<Count>;
    find(filter?: Filter<Note>): Promise<Note[]>;
    updateAll(note: Note, where?: Where<Note>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Note>): Promise<Note>;
    updateById(id: string, note: Note): Promise<void>;
    replaceById(id: string, note: Note): Promise<void>;
    deleteById(id: string): Promise<void>;
}
