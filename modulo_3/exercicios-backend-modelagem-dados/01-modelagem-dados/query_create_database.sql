create database ecommerce;

create table categorias (
	id serial primary key,
  nome varchar(50) not null
);

create table produtos (
	id serial primary key,
  nome varchar(100) not null,
  descricao text not null,
  preco integer not null,
  quantidade_em_estoque integer not null,
  categoria_id integer references categorias(id)
);

create table vendedores (
	cpf char(11) unique not null,
  nome varchar(150) not null
);

create table clientes (
	cpf char(11) unique not null,
  nome varchar not null
);

create table pedidos (
	id serial primary key,
  valor integer,
  cliente_cpf char(11) references clientes(cpf),
  vendedor_cpf char(11) references vendedores(cpf)
);

create table itens_do_pedido (
	id serial primary key,
  pedido_id integer references pedidos(id),
  quantidade integer not null,
  produto_id integer references produtos(id)
);