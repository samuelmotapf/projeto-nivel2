-- Tabela Produto
CREATE TABLE Produto (
    ProdutoID INT PRIMARY KEY,
    Nome VARCHAR(100),
    QuantidadeEmEstoque INT,
    PrecoVendaAtual DECIMAL(10, 2)
);