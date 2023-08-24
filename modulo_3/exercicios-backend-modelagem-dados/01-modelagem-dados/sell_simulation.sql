insert into pedidos
(cliente_cpf, vendedor_cpf)
values
('80371350042', '28007155023');

update pedidos
set
valor = 300 + 700 + (6 * 1200) + 1000 + (5 * 90)
where id = 3

insert into itens_do_pedido
(pedido_id, quantidade, produto_id)
values
(3, 1, 1),
(3, 1, 10),
(3, 6, 18),
(3, 1, 14),
(3, 5, 2);

update produtos
set
quantidade_em_estoque = quantidade_em_estoque - 1
where id = 1;

update produtos
set
quantidade_em_estoque = quantidade_em_estoque - 1
where id = 10;

update produtos
set
quantidade_em_estoque = quantidade_em_estoque - 6
where id = 18;

update produtos
set
quantidade_em_estoque = quantidade_em_estoque - 1
where id = 14;

update produtos
set
quantidade_em_estoque = quantidade_em_estoque - 5
where id = 2;