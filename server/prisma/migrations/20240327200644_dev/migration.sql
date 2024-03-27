/*
  Warnings:

  - You are about to drop the `Client` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Employee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "TipoUsuario" AS ENUM ('CLIENTE', 'EMPREGADO', 'ESTAGIARIO', 'ADMINISTRADOR');

-- DropTable
DROP TABLE "Client";

-- DropTable
DROP TABLE "Employee";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "tipo" "TipoUsuario" NOT NULL,
    "clienteId" INTEGER,
    "empregadoId" INTEGER,
    "estagiarioId" INTEGER,
    "admin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "nomeEmpresa" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "caracteristicas" TEXT NOT NULL,
    "empregadoId" INTEGER,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contato" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "clienteId" INTEGER NOT NULL,

    CONSTRAINT "Contato_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Empregado" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,

    CONSTRAINT "Empregado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Estagiario" (
    "id" SERIAL NOT NULL,
    "nomeCurso" TEXT NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "nomeResponsavel" TEXT NOT NULL,
    "clienteId" INTEGER NOT NULL,

    CONSTRAINT "Estagiario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Periodico" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "editora" TEXT NOT NULL,
    "exemplares" INTEGER NOT NULL,

    CONSTRAINT "Periodico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Emprestimo" (
    "id" SERIAL NOT NULL,
    "nomeUsuario" TEXT NOT NULL,
    "dataEmprestimo" TIMESTAMP(3) NOT NULL,
    "dataDevolucao" TIMESTAMP(3) NOT NULL,
    "periodoId" INTEGER NOT NULL,
    "clienteId" INTEGER,

    CONSTRAINT "Emprestimo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_clienteId_key" ON "Usuario"("clienteId");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_empregadoId_key" ON "Usuario"("empregadoId");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_estagiarioId_key" ON "Usuario"("estagiarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_cnpj_key" ON "Cliente"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "Contato_email_key" ON "Contato"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Empregado_cpf_key" ON "Empregado"("cpf");

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_empregadoId_fkey" FOREIGN KEY ("empregadoId") REFERENCES "Empregado"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_estagiarioId_fkey" FOREIGN KEY ("estagiarioId") REFERENCES "Estagiario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cliente" ADD CONSTRAINT "Cliente_empregadoId_fkey" FOREIGN KEY ("empregadoId") REFERENCES "Empregado"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contato" ADD CONSTRAINT "Contato_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estagiario" ADD CONSTRAINT "Estagiario_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Emprestimo" ADD CONSTRAINT "Emprestimo_periodoId_fkey" FOREIGN KEY ("periodoId") REFERENCES "Periodico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Emprestimo" ADD CONSTRAINT "Emprestimo_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE SET NULL ON UPDATE CASCADE;
