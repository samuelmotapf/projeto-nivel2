-- Tabela PessoaJuridica
CREATE TABLE PessoaJuridica (
    PessoaJuridicaID INT PRIMARY KEY,
    NomeEmpresa VARCHAR(100),
    CNPJ VARCHAR(18) UNIQUE,
    Endereco VARCHAR(200),
    Contato VARCHAR(100)
);