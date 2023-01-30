# Especificidade

É um cálculo matemático onde cada tipo de seletor e origem do estilo possuem valores a serem considerados.

0. Universal selector, combinators e negation pseudo-class (:not())
1. Element type selector e pseudo-elementos(::before, ::after)
10. Classes e attribute selectors ([type="radio"])
100. ID selector
1000. Inline

# observações: 
- o asterisco é um seletor universal e tem valor de zero - universal selector
- o padrão h1 {} é um type selector e tem valor de 1
- classes e seletores de atributo têm força 10. Ex: .title {color: red;}
- o id tem força 100
- inline tem força mil

Os mais fracos são universal selector, combinators e negation pseudo-class, com o valor de 0. Em seguida, com valor de 1, são os element type selector e pseudo-elements.

Também temos os classes e attribute selectors, com valor de 10, ou seja, são mais fortes que os anteriores.

O segundo mais forte, ID selector, com um valor de 100, vence todos os selectors anteriores.

Por fim, temos o inline, com o valor 1000, quaisquer desses selectors anteriormente citado