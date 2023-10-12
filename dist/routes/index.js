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

// src/routes/index.ts
var routes_exports = {};
__export(routes_exports, {
  routes: () => routes
});
module.exports = __toCommonJS(routes_exports);
var import_express4 = require("express");

// src/routes/user.routes.ts
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

// src/routes/member.routes.ts
var import_express2 = require("express");

// src/controllers/memberController.ts
var memberController = class {
  async index(req, res) {
    const members = await prisma.membro.findMany();
    return res.status(200).json(members);
  }
};

// src/routes/member.routes.ts
var memberRoutes = (0, import_express2.Router)();
var member = new memberController();
memberRoutes.get("/showMembers", member.index);

// src/routes/report.routes.ts
var import_express3 = require("express");

// src/controllers/reportController.ts
var reportController = class {
  async create(req, res) {
    const {
      ponto,
      tema,
      titulo,
      referencia,
      atribuicao,
      documento,
      comentario,
      data,
      decisao,
      Contextualizacao,
      participacao
    } = req.body;
    const newReport = await prisma.report.create({
      data: {
        ponto,
        tema,
        titulo,
        referencia,
        atribuicao,
        documento,
        comentario,
        data,
        decisao,
        Contextualizacao,
        participacao
      }
    });
    return res.status(201).json(newReport);
  }
};

// src/routes/report.routes.ts
var reportRoutes = (0, import_express3.Router)();
var report = new reportController();
reportRoutes.post("/createReport", report.create);

// src/routes/index.ts
var routes = (0, import_express4.Router)();
routes.get("/", (_, res) => {
  res.json({ message: "Hello world" });
});
routes.use(userRoutes);
routes.use(memberRoutes);
routes.use(reportRoutes);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  routes
});
