# Font-variant e font-stretch

Descrição

## Font Variant

Faz variações na apresentação da fonte

p {
	font-variant: small-caps;
}

https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant

## Font Stretch

Alargamento ou encolhimento da fonte
Aceita palavras-chaves como: expanded, condensed, normal
Aceita porcentagens de 50% a 200%
Essa propriedade não vai funcionar em todas as fontes

p {
	font-stretch: expanded;
}

https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch

Referência
https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals


# Letter e word-spacing

Descrição

## Letter spacing
Define o espaçamento entre os caracteres
p {
	letter-spacing: 4px;
}
https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing

## Word spacing
Define o espaçamento entre palavras
p {
	word-spacing: 1em;
}
https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing


## Line-height e text-transform

Descrição

## Line height
Define os espaços entre linhas
Pode ser com unidades ou sem unidades de medida
Valores comuns: 1.5 ou 2

p {
	line-height: 1.5;
}

https://developer.mozilla.org/en-US/docs/Web/CSS/line-height

## Text transform

Transformação do texto
Valores podem ser: none | capitalize | uppercase | lowercase | full-width | full-size-kana

p {
	text-transform: uppercase;
}

https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform

## Text-decoration

Descrição

Aparência decorativa de um texto:
line: underline | overline | line-through
podemos aplicar mais de 1 valor
stye: wavy | dotted | double | dashed | solid
color: <color> values

h1 {
  text-decoration: unverline; /* shorthand */
}

p {
  text-decoration: wavy overline blue; /* shorthand */
}

https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration


## Text-align

Descrição
Text align
Alinhamento de um texto
Valores: start | end | left | right | center | justify | match-parent

p {
	text-align: center;
}

https://developer.mozilla.org/en-US/docs/Web/CSS/text-align


## Text-shadow

Descrição
Text shadow
Sombra aplicada a um texto
Permite múltiplos valores

p {
  text-shadow: 1px 1px 1px red,
	       2px 2px 1px green; /* offset-x | offset-y | blur-radius | color */
}

https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow

## Shorthand

Descrição
Podemos usar o shorthand font para determinar os seguintes valores: font-style, font-variant, font-weight, font-stretch, font-size, line-height e font-family

p {
  font: italic normal bold normal 3em/1.5 Helvetica, Arial, sans-serif;
}