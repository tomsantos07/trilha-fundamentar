// Falsy é quando um valor é considerado falso em contextos onde um booleano é obrigatório (condicionais e loops)

/*
false
0
-0
""
null
undefined
NaN
*/

console.log(Nan? 'verdadeiro': 'falso');

//Truthy é quando o calor considerado verdadeiro (true) em contextos onde um booleano é obrigatório (condicionais e loops)

/*
true
{}
[]
1
3.23
'0'
'false'
-1
Infinity
-Infinity
*/

console.log((Infinity ? 'verdadeiro' : 'falso'));