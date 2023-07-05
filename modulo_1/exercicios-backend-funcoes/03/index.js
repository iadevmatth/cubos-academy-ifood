const carrinho = {
    // Formato padrão do carrinho dentro do objeto.
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
    // Imprime de forma resumida a quantidade de produto e totala pagar.
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
    // Adiciona um novo produto ao carrinho levando em consideracao se ele já existe pelo ID.
    // Se sim, ele adiciona apenas a quantidade. Se não, adiciona todo o produto.
    addProduto: function (carrinho, produto) {
        let itemExistente = false
        for (let item of carrinho.produtos) {
            if (produto.id === item.id) {
                item.qtd += produto.qtd
                itemExistente = true
                break
            }
        };

        if (!itemExistente) {
            carrinho.produtos.push(produto)
        }
    }
};

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}


carrinho.addProduto(carrinho, novaBermuda)
carrinho.addProduto(carrinho, novoTenis)
carrinho.imprimirResumo();
console.log(carrinho.produtos)