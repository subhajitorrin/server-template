"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("./routes/route"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use("/", route_1.default);
app.get("/", (req, res) => {
    res.send("Server is Running!");
});
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
