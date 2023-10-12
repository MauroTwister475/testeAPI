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

// src/routes/member.routes.ts
var member_routes_exports = {};
__export(member_routes_exports, {
  memberRoutes: () => memberRoutes
});
module.exports = __toCommonJS(member_routes_exports);
var import_express = require("express");

// src/database/prisma.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();

// src/controllers/memberController.ts
var memberController = class {
  async index(req, res) {
    const members = await prisma.membro.findMany();
    return res.status(200).json(members);
  }
};

// src/routes/member.routes.ts
var memberRoutes = (0, import_express.Router)();
var member = new memberController();
memberRoutes.get("/showMembers", member.index);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  memberRoutes
});
