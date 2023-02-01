 # Box Sizing
 
 O box-sizing é  responsável pelo calculo do tamanho total da caixa (box).

Podemos usar a ferramenta de desenvolvedor do próprio navegador para visualizar as especificações dos elementos da página

💻 Exemplo:
HTML:

<div>
	CSS é incrível!
</div>
CSS:

div {
   width: 100px; 
   height: 100px;
   border: 1px solid red;
   margin: 10%;
}

Normalmente usa-se o código abaixo como forma de "resetar" o box-sizing que vem por padrão nos navegadores.

* {
   box-sizing: border-box;
}
O seletor * seleciona todos os elementos da página.
