const express = require("express");
const accounts = require("../../accounts");
const {
  createAccount,
  getAllAccounts,
  deleteAccount,
  updateAccount,
} = require("./controllers");
const accountsRouter = express.Router();

accountsRouter.get("/api/accounts", getAllAccounts);

accountsRouter.post("/api/account", createAccount);

accountsRouter.delete("/api/account/:id", deleteAccount);
accountsRouter.put("/api/account/:id", updateAccount);

module.exports = accountsRouter;
