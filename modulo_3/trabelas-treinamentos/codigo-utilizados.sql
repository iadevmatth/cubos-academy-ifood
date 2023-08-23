-- Funções PostgreSQL
select now();
select * from agendamentos where cast(agendamento as date) > now();
select * from agendamentos where cast(agendamento as timestamp) > now();
select cast(agendamento as date) from agendamentos;
select cast(agendamento as time) from agendamentos;
select cast(agendamento as timestamp) from agendamentos;

select age('2022-03-16 12:00:00', '2021-02-15 11:32:34'); --Comparação de tempo
select age(cast('1997-10-30 21:54:00' as timestamp)); --Tempo que já vivi kkkk
select *, age(cast(agendamento as timestamp)) from agendamentos where cast(agendamento as timestamp) < now(); --tempo que já se passou do agendamento

select * from usuarios;
select coalesce(NULL, 'batata'); --substituição de valor NULL
select concat(nome, ' - ', coalesce(telefone, 'Não possui telefone')) from usuarios; --substituindo todos os campos NULL
select concat(nome, ' - ', coalesce(telefone, email, 'Não possui')) from usuarios; --substituição em 2 etapas
select idade, count(id), sum(idade) from usuarios group by idade; --agrupando

-- CRUD SQL
insert into produtos (nome, preco, categoria) values ('camisa', 5990, 'Roupas'); -- Inserindo produto na ausencia de um campo
insert into produtos (nome, descricao, preco, categoria) values ('Calça Jeans', NULL, 12900, 'Roupas'), ('Bermuda', 'Bermuda Longa Preta', 12900, 'Roupas'); -- Inserindo mais de um produto
update produtos set nome = 'Camisa Preta' where id = 1; -- Atualizando produto com condição
update produtos set nome = 'Camisa Preta', preco = 6000 where id = 1; -- Atualizando mais de um campo do produto com condição
delete from produtos where id = 3; -- Deletando um produto
select * from produtos; -- Exibindo toda a tabela

-- Modelagem de dados

create table editoras (
	id serial primary key, 
  nome text not null, 
  cnpj text unique, 
  data_cadastro timestamp default now() 
);

insert into editoras (nome, cnpj) values ('Buzz Editora', '26.175.092/0002-15');

create table livros (
	isbn integer primary key, 
  editora_id integer references editoras(id), 
  titulo text not null,
  data_publicacao date not null
);

insert into livros 
(isbn, editora_id, titulo, data_publicacao)
values
(978, 3, 'Ponto de Inflexão', '2019-02-04');

create table enderecos (
	id serial primary key,
  editora_id integer references editoras(id),
  cep text not null,
  rua text,
  bairro text,
  cidade text,
  estado char(2),
  pais text
);

insert into enderecos 
(editora_id, cep)
values
(3, '01310-100');

create table categorias (
	id serial primary key,
  nome text not null
);

-- Criando tabela de relacionamento N:N
create table livro_categoria (
	livro_isbn integer references livros(isbn),
  categoria_id integer references categorias(id)
);

insert into categorias 
(nome) 
values 
('Desenvolvimento Pessoal'), 
('Negócios'), 
('Liderança'), 
('Autoajuda');

insert into livro_categoria
(livro_isbn, categoria_id)
values
(978, 1),
(978, 2),
(978, 3),
(978, 4);

-- Criando tabela de auto relacionamento
create table comentarios (
	id serial primary key,
  descricao text not null,
  comentario_id integer references comentarios(id),
  livro_isbn integer references livros(isbn)
);

insert into comentarios (livro_isbn, descricao) values (978, 'Livro ótimo');
insert into comentarios (comentario_id, descricao) values (1, 'Que bom que gostou, amigo!');