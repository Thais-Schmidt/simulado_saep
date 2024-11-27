create database simulado_saep;

use simulado_saep;

create table usuario (
id_usuario int not null auto_increment primary key,
nome varchar(100) not null,
email varchar(80) not null
);

create table tarefa (
id_tarefa int not null auto_increment primary key,
id_usuario int not null,
descricao varchar(100) not null,
equipe varchar(45) not null,
prioridade enum("baixa", "media", "alta"),
data_cadastro datetime default current_timestamp,
status enum ("finalizado", "em desenvolvimento", "não iniciado"),
foreign key (id_usuario) references usuario(id_usuario)
);

SELECT 
	T.id_tarefa, T.descricao, T.equipe, T.prioridade, T.data_cadastro, T.status 
FROM tarefa T
INNER JOIN USUARIO U
ON T.id_usuario = U.id_usuario;

SELECT id_usuario, nome FROM usuario;

SELECT * FROM simulado_saep.tarefa;

UPDATE tarefa SET status='em desenvolvimento' WHERE id_tarefa=1;