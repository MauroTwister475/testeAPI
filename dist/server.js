"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/server.ts
var import_express5 = __toESM(require("express"));
var import_dotenv = __toESM(require("dotenv"));
var import_cors = __toESM(require("cors"));

// src/routes/index.ts
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

// src/server.ts
import_dotenv.default.config();
var app = (0, import_express5.default)();
app.use(import_express5.default.json());
app.use((0, import_cors.default)());
app.use(routes);
var port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`SERVER RUNNING AT PORT ${port}`);
});
