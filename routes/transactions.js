import express from "express";

import {
  getTransactions,
  addTransaction,
  deleteTransactions,
} from "../controllers/transactions.js";
const router = express.Router();

router.route("/").get(getTransactions).post(addTransaction);

router.route("/:id").delete(deleteTransactions);

export default router;
