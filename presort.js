let n = 36
let matriz = []
for (let i = 0; i < n; i++) {
    matriz.push(Math.floor(Math.random() * 9999))
}
console.log("----Quiz aula 8----")
console.log("Matriz inicial: \n", matriz)
matriz.sort((a, b) => a - b) //presort
console.log("Matriz ordenada: \n", matriz)

let menor = matriz[1] - matriz[0] //a menor distância começa com os dois primeiros números.

for (let i = 1; i < n - 1; i++) {
    let distancia = matriz[i + 1] - matriz[i] //verifica a distância  do numero atual com a do próximo.
    if (distancia < menor) {
        menor = distancia //se for menor, é a nova menor distância.
    }
}

console.log("Menor distância:", menor)


/*Comparando com o algoritmo de força bruta, temos uma melhor eficiência por meio do presorting.

Utilizando a força bruta temos uma complexidade de  O(n^2) pois precisamos de 2 for loops para comparar
os pares de números (vamos comparar a matriz[0] com todos os outros números, e assim em diante).

Já por meio do presorting, temos uma complexidade de O(nLogn), pesquisei e vi que o .sort no JS geralmente usa
o quicksort, que tem complexidade de O(nLogn), o loop for tem complexidade de O(n), como nossa matriz já está 
ordenada, precisamos apenas de 1 for loop.
*/
