"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/routes/user.routes.ts
var user_routes_exports = {};
__export(user_routes_exports, {
  userRoutes: () => userRoutes
});
module.exports = __toCommonJS(user_routes_exports);
var import_express = require("express");

// src/database/prisma.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();

// src/controllers/userController.ts
var userController = class {
  async index(req, res) {
    const user2 = await prisma.user.findFirstOrThrow();
    return res.status(200).json(user2);
  }
};

// src/routes/user.routes.ts
var userRoutes = (0, import_express.Router)();
var user = new userController();
userRoutes.get("/showUser", user.index);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  userRoutes
});
