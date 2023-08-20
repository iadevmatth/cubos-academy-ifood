// Funções PostgreSQL
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