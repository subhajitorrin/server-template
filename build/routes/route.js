"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const router = (0, express_1.Router)();
router.post("/user", user_1.addUser);
router.get("/user", user_1.getAllUsers);
exports.default = router;
