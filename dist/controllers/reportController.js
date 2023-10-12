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

// src/controllers/reportController.ts
var reportController_exports = {};
__export(reportController_exports, {
  reportController: () => reportController
});
module.exports = __toCommonJS(reportController_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  reportController
});
