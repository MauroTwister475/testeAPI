-- CreateTable
CREATE TABLE "membro" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "iso_code" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "joined" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "report" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ponto" TEXT NOT NULL,
    "tema" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "referencia" TEXT NOT NULL,
    "atribuicao" TEXT NOT NULL,
    "documento" TEXT NOT NULL,
    "comentario" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "decisao" TEXT NOT NULL,
    "Contextualizacao" TEXT NOT NULL,
    "participacao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);
