

use loja1;

-- Tabela PessoaFisica
CREATE TABLE PessoaFisica (
    PessoaFisicaID INT PRIMARY KEY,
    Nome VARCHAR(100),
    CPF VARCHAR(14) UNIQUE,
    Endereco VARCHAR(200),
    Contato VARCHAR(100)
);