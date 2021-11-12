"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let NoteController = class NoteController {
    constructor(noteRepository) {
        this.noteRepository = noteRepository;
    }
    async create(note) {
        return this.noteRepository.create(note);
    }
    async count(where) {
        return this.noteRepository.count(where);
    }
    async find(filter) {
        return this.noteRepository.find(filter);
    }
    async updateAll(note, where) {
        return this.noteRepository.updateAll(note, where);
    }
    async findById(id, filter) {
        return this.noteRepository.findById(id, filter);
    }
    async updateById(id, note) {
        await this.noteRepository.updateById(id, note);
    }
    async replaceById(id, note) {
        await this.noteRepository.replaceById(id, note);
    }
    async deleteById(id) {
        await this.noteRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/notes'),
    (0, rest_1.response)(200, {
        description: 'Note model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Note) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Note, {
                    title: 'NewNote',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], NoteController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/notes/count'),
    (0, rest_1.response)(200, {
        description: 'Note model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Note)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], NoteController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/notes'),
    (0, rest_1.response)(200, {
        description: 'Array of Note model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Note, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Note)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], NoteController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/notes'),
    (0, rest_1.response)(200, {
        description: 'Note PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Note, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Note)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Note, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], NoteController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/notes/{id}'),
    (0, rest_1.response)(200, {
        description: 'Note model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Note, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Note, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], NoteController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/notes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Note PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Note, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Note]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], NoteController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/notes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Note PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Note]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], NoteController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/notes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Note DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], NoteController.prototype, "deleteById", null);
NoteController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.NoteRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.NoteRepository])
], NoteController);
exports.NoteController = NoteController;
//# sourceMappingURL=note.controller.js.map