create database dindin;

create table usuarios(
  id serial primary key,
  nome varchar(100) not null,
  email varchar(100) not null unique,
  senha text not null
);

create table categorias(
  id serial primary key,
  descricao text
);

insert into categorias
(descricao)
values
('Alimentação'),
('Assinaturas e Serviços'),
('Casa'),
('Mercado'),
('Cuidados Pessoais'),
('Educação'),
('Família'),
('Lazer'),
('Pets'),
('Presentes'),
('Roupas'),
('Saúde'),
('Transporte'),
('Salário'),
('Vendas'),
('Outras receitas'),
('Outras despesas');

create table transacoes(
  id serial primary key,
  descricao text,
  valor integer,
  data timestamp,
  categoria_id INTEGER REFERENCES categorias(id),
  usuario_id INTEGER REFERENCES usuarios(id),
  tipo varchar(50)
);