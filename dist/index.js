"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jokes_router_1 = __importDefault(require("./routes/jokes.router"));
const port = 8000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/jokes/api", jokes_router_1.default);
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
