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

// src/routes/report.routes.ts
var report_routes_exports = {};
__export(report_routes_exports, {
  reportRoutes: () => reportRoutes
});
module.exports = __toCommonJS(report_routes_exports);
var import_express = require("express");

// src/database/prisma.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();

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
var reportRoutes = (0, import_express.Router)();
var report = new reportController();
reportRoutes.post("/createReport", report.create);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  reportRoutes
});
