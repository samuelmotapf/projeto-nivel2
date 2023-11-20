SELECT MC.ProdutoID, P.Nome AS Produto, PJ.NomeEmpresa AS Fornecedor, MC.Quantidade, MC.PrecoUnitario, (MC.Quantidade * MC.PrecoUnitario) AS ValorTotal
FROM MovimentoCompra MC
INNER JOIN Produto P ON MC.ProdutoID = P.ProdutoID
INNER JOIN PessoaJuridica PJ ON MC.PessoaJuridicaID = PJ.PessoaJuridicaID;