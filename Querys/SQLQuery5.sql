-- Tabela MovimentoCompra
CREATE TABLE MovimentoCompra (
    MovimentoCompraID INT PRIMARY KEY,
    ProdutoID INT,
    PessoaJuridicaID INT,
    Quantidade INT,
    PrecoUnitario DECIMAL(10, 2),
    Data DATE,
    FOREIGN KEY (ProdutoID) REFERENCES Produto(ProdutoID),
    FOREIGN KEY (PessoaJuridicaID) REFERENCES PessoaJuridica(PessoaJuridicaID)
);