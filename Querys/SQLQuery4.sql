-- Tabela Usuário
CREATE TABLE Usuario (
    UserID INT PRIMARY KEY,
    Username VARCHAR(50) UNIQUE,
    PasswordHash VARCHAR(100),
    TipoOperador VARCHAR(20),
    PessoaFisicaID INT,
    PessoaJuridicaID INT,
    FOREIGN KEY (PessoaFisicaID) REFERENCES PessoaFisica(PessoaFisicaID),
    FOREIGN KEY (PessoaJuridicaID) REFERENCES PessoaJuridica(PessoaJuridicaID)
);