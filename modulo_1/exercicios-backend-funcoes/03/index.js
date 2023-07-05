const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],

    imprimirResumo: function () {
        let totalQtdProdutos = 0;
        let valorTotal = 0;
        for (let item of carrinho.produtos) {
            totalQtdProdutos += item.qtd
            valorTotal += item.qtd * item.precoUnit
        };
        console.log(`Cliente: ${carrinho.nomeDoCliente}`);
        console.log(`Total de itens: ${totalQtdProdutos}`);
        console.log(`Total a pagar: R$ ${(valorTotal / 100).toFixed(2)}`);
    },
};

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

// function addProdutoAoCarrinho(carrinho, produto) {
//     for (let item of carrinho.produtos) {
//         if (produto === item.produtos)
//     }
// };

// addProdutoAoCarrinho(carrinho, novaBermuda)
carrinho.imprimirResumo();