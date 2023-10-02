# Tipo: Texto

Toda tabela possui campos que precisam de configurações, onde é preciso especificar cada tipo. Basicamente é preciso dizer ao banco de dados qual é o tipo de informação quer será guardada em cada campo. 
Ex: 
    text - (texto: informação a ser guardada é texto (também inclui letras misturadas com números))

    number - (número: é para um campo que possua APENAS números guardados). Para guardar número de telefone, por exemplo.

    datatime - é um tipo de campo para registar data e hora. Guarda números e traços, que é um tipo de caractere especial. Sendo consdiderado do tipo texto.

    Primarykey - é um tipo de campo identificador. Ele nunca se repete, muito comumente usado para registrar usuários. Normalmente a primary key é um número e nunca pode se repetir.
    Ex: id user: NUMBER PRIMARY KEY

Existem algumas regras a serem seguidas para escrever o nome de tabelas e campos:

1- Deve começar por uma letra do alfabeto (excluídos os caracteres especiais, números e etc)

2- Os seguintes cacacteres não são permitidos () + - / * " ; = & | # > < ^ > ' {} % 

3- Não pode conter espaços. 

4- Não pode conter acentuação

Veja o exemplo de um escopo de uma tabela de que possui registros de usuário



Tabela: Perfil

Nome: TEXT
Nome_de_usuario: TEXT UNIQUE
Descricao: TEXT
Telefone: Number
id_user: NUMBER PRIMARY KEY

