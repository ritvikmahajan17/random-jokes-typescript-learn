"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jokes_controller_1 = __importDefault(require("../controllers/jokes.controller"));
const jokesRouter = (0, express_1.Router)();
jokesRouter.get('/getRandomJoke', jokes_controller_1.default.getRandomJoke);
exports.default = jokesRouter;
