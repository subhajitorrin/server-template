import { Router } from "express";
import { addUser, getAllUsers } from "../controllers/user";

const router = Router();

router.post("/user", addUser);
router.get("/user", getAllUsers);

export default router;
