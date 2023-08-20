select * from farmacia; -- Toda a tabela
select * from usuarios; -- Toda a tabela
select count(*) from farmacia; -- quantidade de medicamentos da tabela
select min(idade) from usuarios; -- idade do usuario mais novo cadastrado na tabela usuarios
select max(idade) from usuarios; -- idade do usuario mais velho cadastrado na tabela usuarios
select avg(idade) from usuarios where idade >= 18; -- média de idade entre os usuários na tabela usuarios com idade maior ou igual a 18 anos.
select categoria, count(id), sum(estoque) from farmacia where categoria in('blue', 'black') group by categoria; -- total do estoque de todos os medicamentos das categorias blue e black
select categoria, sum(estoque) as soma_total from farmacia where categoria is not null group by categoria; -- soma do estoque de todos os medicamentos de cada categoria
select categoria, sum(estoque) as soma_sem_categoria from farmacia where categoria is null group by categoria; -- soma do estoque disponível dos medicamentos sem categoria
select concat(medicamento, '  ', '(', categoria, ')') as produto from farmacia where categoria is not null; -- retorna uma única coluna com a junção do nome do medicamento e a categoria entre parenteses 
select concat(id, ' - ', medicamento, '  ', '(', coalesce(categoria, 'sem categoria'), ')') from farmacia; -- Quando a categoria for nula, substituir por (sem categoria)
