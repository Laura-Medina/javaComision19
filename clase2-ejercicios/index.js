
// ### Ejercicio 0
// - Crear una funcion que reciba como parametro un nombre y muestre por consola un saludo a esa persona.

// const saludo = (nombre) =>{
//     console.log(`Hola, bienvenida ${nombre}`)
// }
// saludo("Laura")

// ### Ejercicio 1
// - Crear una funcion que reciba como parametro dos numeros y devuelva el resultado de cada calculo aritmetico.
// ```javascript
// sumar(a, b)
// restar(a, b)
// dividir(a, b)
// multiplicar(a, b)
// ```

// const sumar =(a,b) =>{
//     return a+b
// }

// const restar =(a,b) =>{
//     return a-b
// }

// const dividir =(a,b) =>{
//     return a/b
// }

// const prooducto =(a,b) =>{
//     return a*b
// }
// const num1=Number(prompt("ingrese primero numero:"))
// const num2=Number(prompt("ingrese segundo numero:"))

// console.log(sumar(num1,num2))
// console.log(restar(num1,num2))
// console.log(dividir(num1,num2))
// console.log(prooducto(num1,num2))

// ### Ejercicio 2
// - Crear una funcion que reciba como parametro un sueldo y un numero que representa el porcentaje de aumento. La funcion debe devolver el sueldo mas el aumento.
// ```javascript
// aumentarSueldo(1000, 10) // deberia devolver 1100
// ```

// const aumentarSueldo = (sueldo) =>{
//     return sueldo+100
// }
// const sueldo=Number(prompt("Ingrese su sueldo"))
// console.log(sueldo+100)

// ### Ejercicio 3
// - Crear una funcion que reciba como parametros un nombre, una edad, una profesion y un pais y retorne un string con la concatenacion de los datos ingresados. Probar con varios datos varias veces para comprobar funcionamiento.
// Ejemplo: Me llamo Pepa, tengo 30 anios, vivo en Colombia y soy abogada.

// const datos = (nombre,edad,profesion,pais) =>{
//     return (`Me llamo ${nombre}, tengo ${edad} anios, soy ${profesion},y vivo en ${pais}`)
// }
// const nombre = prompt("Ingrese su nombre:")
// const edad = prompt("Ingrese su edad:")
// const profesion = prompt("Ingrese su profesion:")
// const pais = prompt("Ingrese su pais:")

// console.log((`Me llamo ${nombre}, tengo ${edad} anios, soy ${profesion},y vivo en ${pais}`))

// ### Ejercicio 4
// - Crear una funcion que reciba como parametro un precio y devuelva el precio mas el IVA.

const impuesto = (precio) =>{
    const resultado = precio + 0.21
    return resultado
}


// ### Ejercicio 5
// - Como harian para usar las funciones del ejercicio 1 pero que los numeros se los pidamos al usuario?
// - Repetir solucion pero para el ejercicio 2 y ejercicio 3

// ### Bonus:
// - Crear una funcion contador() que cada vez que se ejecute, sume en una unidad a una variable.