# Comando Select

O comando SELECT tem por função buscar informações e mostrar as informações.

Perceba que os comandos em SQL são sempre em letras maiúsculas.

Veja a seguir um exemço onde o comando SELECT vai extrair as informações da tabela aluno.

Ex: SELECT * FROM aluno


## Comandos Específicos

É possível definir campos específicos usando o comando SELECT. Quando usamos SELECT * FROM, teremos os retorno de todos os campos disponíveis na tabela, logo, para exibir campos específicos, fazemos da seguinte forma:

(pegando como exemplo a tabela alunos que retorna os campos nome, cpf e responsável)

SELECT nome, responsavel FROM aluno

O retorno dos campos será na mesma ordem que o comando for realizado. Ex: SELECT responsavel, nome FROM aluno. Neste o campo responsavel será exibido antes do campo aluno.

### SELECT com WHERE

O comando WHERE no SQLite é usado para filtrar os registros de uma tabela com base em uma condição específica. Imagine que você tenha uma tabela chamada "aluno" com informações sobre os alunos, como nome, idade e nota. Você pode usar o comando WHERE para selecionar apenas os registros que atendem a uma condição específica.

Por exemplo, se você quiser selecionar todos os alunos com idade maior que 18 anos, você usaria o comando WHERE da seguinte forma:

SELECT * FROM aluno WHERE idade > 18;
Isso retornaria todos os registros da tabela "aluno" onde a idade é maior que 18. O comando WHERE permite que você especifique várias condições para filtrar os resultados conforme necessário, ajudando a recuperar apenas os dados que são relevantes para sua consulta.

usado para selecionar todos os registros da tabela "aluno" onde o valor na coluna "nome" contém a letra "G" em qualquer parte do nome.

SELECT *: Isso indica que você deseja selecionar todas as colunas da tabela "aluno" para os registros que atendem à condição especificada.

FROM aluno: Isso especifica a tabela da qual você deseja recuperar os registros, que é a tabela "aluno" neste caso.

WHERE nome like '%G%': Esta é a cláusula WHERE que define a condição. A expressão nome like '%G%' usa o operador LIKE para encontrar registros onde a coluna "nome" contenha a letra "G" em qualquer posição. O símbolo de porcentagem (%) é um caractere curinga que corresponde a qualquer sequência de caracteres. Portanto, %G% significa que a letra "G" pode estar em qualquer parte do nome, seja no início, meio ou fim.

Em resumo, essa consulta retornaria todos os registros da tabela "aluno" onde o nome do aluno contém a letra "G" em qualquer lugar do nome. Por exemplo, se você tiver os nomes "Maria", "João", "Gustavo" e "Carla" na tabela, essa consulta retornaria apenas "Gustavo" como resultado.

SELECT * FROM aluno WHERE nome like '%G%