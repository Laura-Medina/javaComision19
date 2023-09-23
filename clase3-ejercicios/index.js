// ### Ejercicio 1
// - Crear una funcion que reciba como argumento un string y devuelva la cantidad de caracteres que tenga el mismo.
// ```
// candidadDeCaracteres("Hola Mundo!") // deberia devolver 11
// ```

// let saludo = "Hola Mundo "
// const funcion =()=>{
//     return saludo
// }

// console.log(saludo.length)


// ### Ejercicio 2
// - Tomar la siguiente variable, convertirla a todo mayusculas y mostrar por consola. Hacer lo mismo pero con minusculas.
// ```
// let string = "El artista WOS cantando QUEREME"
// ```

// let string = "El artista WOS cantando QUEREME"
// console.log(string.toUpperCase())

// let string = "El artista WOS cantando QUEREME"
// console.log(string.toLowerCase())

// ### Ejercicio 3
// - Tomar la variable del ejercicio 2 y cortar el string devolviendo solo "WOS" y hacer el mismo proceso pero devolver "QUEREME".

// let string = "El artista WOS cantando QUEREME"
// console.log(string.slice (11,15))


// ### Ejercicio 4
// - Tomar la variable del ejercicio 2 y reemplazar "WOS" por "Queen" y "QUEREME" por "Bohemian Rhapsody"

// let string = "El artista WOS cantando QUEREME"
// console.log(string.replace("WOS", "queen", "quereme", "Bohemian Rhapsody"))

// ### Ejercicio 5
// - Crear una funcion que tome por parametro un numero de DNI y retorne el mismo valor pero como un string
// ```javascript
// parsearDNI(12345678) // deberia devolver "12345678"
// ```


// let num = 37053890
// const funcion =()=>{
// return num.toString
// }
// console.log(typeof num.toString())

// ### Ejercicio 6
// - Crear una funcion que tome por parametro al menos 4 numeros y retorne el numero menor de ellos
// - Realizar lo mismo pero con otra funcion que retorne el numero mayor
// ```javascript
// minimo(5, 10, -7, 43) // deberia devolver -7
// maximo(-1, 12, 32, 18) // deberia devolver 32
// ```

// let numMin = (5, 10, -7, 43)
// const funcion=()=>{
//     return Math.min
// }
// console.log(Math.min(5, 10, -7, 43))

// let numMax = (-1, 12, 32, 18)
// const funcion1=()=>{
//     return Math.max
// }
// console.log(Math.max(-1, 12, 32, 18))

// ### Ejercicio 7
// - Crear una funcion que tome por argumento un numero y retorne un numero aleatorio entre el 0 y el argumento.
// ```javascript
// numeroRandom(100) // puede devolver cualquier numero entre 0 y 100
// ```

// let random = 100
// const funcion=()=>{
//     return Math.random(0)
// }
// console.log(Math.random(0) * 100)


// ### Ejercicio 8
// - Tomar la siguiente variable y lograr las siguientes tareas:
//     - Redondear el numero hacia arriba
//     - Redondear el numero hacia abajo
// ```javascript
// let number = 12.49
// ```
// let number = 12.49
// console.log(Math.ceil(number))
// console.log(Math.floor(number))