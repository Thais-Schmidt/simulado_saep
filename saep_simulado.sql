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