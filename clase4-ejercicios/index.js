// # Condicionales y operadores lógicos
// ## Ejercicios con operadores lógicos

// ### `puedeVerPelicula(edad, tieneAutorizacion)`

// Crear una función `puedeVerPelicula` que tome como argumentos un número `edad` y un booleano `tieneAutorizacion`, y devuelva `true` si la persona está habilitada para ver la película o `false` si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

// ```javascript
// puedeVerPelicula(12, false) // false
// puedeVerPelicula(12, true)  // true
// puedeVerPelicula(16, false) // true
// puedeVerPelicula(18, true)  // true
// ```

// const age= 15
// const tieneAutorizacion = true

// const edadUsuario = prompt("Ingrese su edad:")
// const puedeVerPelicula=(age, tieneAutorizacion)=>{
//     if (age>=15 || tieneAutorizacion){
// return true
// }else{
//     return false
// }
// }

// console.log(puedeVerPelicula(edadUsuario))

// ### `estaEnRango(valor, minimo, maximo)`
// Crear una función `estaEnRango` que tome como argumentos tres números, un `valor`, un número `minimo` y un número `maximo`, y devuelva `true` si el `valor` se encuentra entre los números `minimo` y `maximo` o `false` si no (si el `valor` es igual a uno de los extremos se considera que está dentro del rango)

// ```javascript
// estaEnRango(3, 1, 10)   // true
// estaEnRango(1, 1, 10)   // true
// estaEnRango(10, 1, 10)  // true
// estaEnRango(12, 1, 10)  // false
// estaEnRango(-3, 1, 10)  // false
// ```

// const num=true

// const estaEnRango=(num,numMin, numMax)=>{
//     if (num>=numMin&&num<=numMax){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(estaEnRango(num))

// ### `puedeAvanzar(colorSemaforo)`
// Crear una función `puedeAvanzar` que tome como argumento un string con el color del semáforo y devuelva `true` si puede avanzar o `false` si no. Si no se ingresa un color válido, debe devolver un string que diga: `Error: color de semáforo inválido`

// ```javascript
// puedeAvanzar('verde')     // true
// puedeAvanzar('amarillo')  // false
// puedeAvanzar('rojo')      // false
// puedeAvanzar('lila')      // 'Error: color de semáforo inválido'
// ```

// const puedeAvanzar =(colorSemaforo)=>{
//     if(colorSemaforo==="verde"){
//     return true
// }else if( colorSemaforo==="amarillo" || "rojo"){
//     return false
// }else{
//     return "error: color de semaforo invalido";
// }
// }
// console.log(puedeAvanzar('verde'))
// console.log(puedeAvanzar('amarillo'))
// console.log(puedeAvanzar('rojo'))
// console.log(puedeAvanzar('lila'))


// ### `esVocal(letra)`
// Crear una función `esVocal` que tome como argumento un string `letra` y devuelva `true` si `letra` es una vocal o `false` si no lo es.

// ```javascript
// esVocal('a') // true
// esVocal('n') // false
// ```

// const regex = new RegExp('[aeiouAEIOU]')
// const letra = prompt("Ingresa una letra")
// if (regex.test(letra)) {
//     console.log("Es una vocal")
//     } else {
//     console.log("Es una consonante")
// }


// ### `esConsonante(letra)`
// Crear una función `esConsonante` que tome como argumento un string `letra` y devuelva `true` si `letra` es una consonante o `false` si no lo es

// ```javascript
// esVocal('a') // false
// esVocal('n') // true
// ```


// const regexConsonantes = new RegExp('[^aeiouAEIOU]', 'g');

// const letra = prompt("Ingresa una letra")
// if (regexConsonantes.test(letra)){
//     console.log("Es una consonante")
//     } else {
//     console.log("Es una vocal")
// }

// ### `esHoraValida(hora)`
// Crear una función `esHoraValida` que tome como argumento un string `hora` con el formato `HH:mm` y determine si es una hora válida del día o no

// ```javascript
// esHoraValida('12:23') // true
// esHoraValida('12:65') // false
// esHoraValida('28:05') // false
// esHoraValida('00:00') // true
// ```

// const regexformatoHora = new RegExp('^([01]\d|2[0-3]):([0-5]\d)$');
// const esHoraValida=(hora)=>{
//     if (regexformatoHora.test(hora)){
//         console.log("es una hora valida")
//     } else {
//         console.log("no es una hora valida")
//     }
// }

// ### `puedeRenovarCarnet(pasoTests, tieneMultasImpagas, pagoImpuestos)`
// Crear una función `puedeRenovarCarnet` que tome como argumentos tres booleanos, `pasoTests`, `tieneMultasImpagas` y `pagoImpuestos`, y devuelva `true` si una persona está habilitada para renovar su carnet de conducir o `false` si no. Una persona puede renovar su carnet si pasó los tests, no tiene multas impagas y pagó todos los impuestos

// ```javascript
// puedeRenovarCarnet(true, true, true)    // false
// puedeRenovarCarnet(true, true, false)   // false
// puedeRenovarCarnet(true, false, true)   // true
// puedeRenovarCarnet(true, false, false)  // false
// puedeRenovarCarnet(false, true, true)   // false
// puedeRenovarCarnet(false, true, false)  // false
// puedeRenovarCarnet(false, false, true)  // false
// puedeRenovarCarnet(false, false, false) // false
// ```

// const pasoTest = true
// const pagoImpuestos = true
// const tieneMultasImpagas = false

// const puedeRenovarCarnet = ()=>{
//     if(pasoTest && pagoImpuestos){
//         console.log("puede renovar su carnet")
// }else if (tieneMultasImpagas){
//     console.log("no puede renovar su carnet")
// }
// }

// ### `puedeGraduarse(asistencia, materiasAprobadas, tesisAprobada)`
// Crear una función `puedeGraduarse` que tome como argumentos dos números `asistencia` y `materiasAprobadas` y un booleano `tesisAprobada`, y devuelva `true` si una persona puede gruadarse o `false` si no. Una persona puede graduarse si tiene un 75% de asistencia o más, 50 materias aprobadas o más y la tesis aprobada.

// ```javascript
// puedeGraduarse(80, 50, true)  // true
// puedeGraduarse(80, 50, false) // false
// puedeGraduarse(80, 45, true)  // false
// puedeGraduarse(80, 45, false) // false
// puedeGraduarse(65, 50, true)  // false
// puedeGraduarse(33, 55, false) // false
// puedeGraduarse(42, 45, true)  // false
// puedeGraduarse(28, 45, false) // false
// ```

// const puedeGraduarse=(asistencia, materiasAprobadas, tesisAprobada)=>{
//     if(asistencia >=75 && materiasAprobadas>=50 && tesisAprobada){
//         return true
//     }else{
//         return false
//     }
// }




// ## Ejercicios con condicionales
// ### `esParOImpar(numero)`
// Crear una función `esParOImpar` que acepte como argumento un `numero` y devuelva el string `par` si el `numero` es par, o el string `impar` si el `numero` es impar

// ```javascript
// esParOImpar(3)  // 'impar'
// esParOImpar(10) // 'par'
// ```


// const esParOImpar=(numero)=>{
//     if (numero % 2 === 0){
//     return "es par"
// }else{
//     return "es impar"
// }
// }

// console.log(esParOImpar(3))
// console.log(esParOImpar(10))

// ### `esPositivoONegativo(numero)`
// Crear una función `esPositivoONegativo` que acepte como argumento un `numero` y devuelva el string `positivo` si el `numero` es positivo, o el string `negativo` si el `numero` es negativo

// ```javascript
// esPositivoONegativo(3)  // 'positivo'
// esPositivoONegativo(-5) // 'negativo'
// ```

// const esPositivoONegativo=(numero)=>{
//     if (numero >=0){
//     return "es numero positivo"
// }else if(numero<=-0){
//     return "es numero negativo"
// }
// }
// console.log(esPositivoONegativo(3))
// console.log(esPositivoONegativo(-5))

// ### `avanzarSemaforo(colorActual)`
// Crear una función `avanzarSemaforo` que acepte como argumento un string `colorActual` y devuelva un string con el siguiente color del semáforo, siguiendo el orden: verde -> amarillo -> rojo -> verde

// ```javascript
// avanzarSemaforo('verde')     // 'amarillo'
// avanzarSemaforo('amarillo')  // 'rojo'
// avanzarSemaforo('rojo')      // 'verde'
// ```

// const avanzarSemaforo =(colorActual)
// if (colorActual === 'verde') {
//     return 'amarillo'
// }
//     if (colorActual === 'amarillo') {
//     return 'rojo'
//     }
// if (colorActual === 'rojo') {
//     return 'verde'
// }

// ### `obtenerDiasMes(mes)`
// Crear una función `obtenerDiasMes` que tome como argumento un string `mes` y devuelva un número dependiendo de la cantidad de días que tenga ese mes

// ```javascript
// obtenerDiasMes("diciembre") // 31
// obtenerDiasMes("febrero")   // 29
// ```

// const obtenerDiasMes=(mes)=>{
//     if(mes === "diciembre"){
//     return 31
// }if(mes ==="febrero")
// return 29
// }
// console.log(obtenerDiasMes("diciembre"))
// console.log(obtenerDiasMes("febrero"))

// ### `obtenerGeneracion(anioNacimiento)`
// Crear una función `obtenerGeneracion` que tome como argumento un número `anioNacimiento` y devuelva un string con la generación a la que pertenece, siguientdo estas reglas:

// | Generación | Años de nacimiento |
// | --- | --- |
// | Baby boomer | 1949-1968 |
// | Generación X | 1969-1980 |
// | Millennials | 1981-1993 |
// | Generación Z | 1994-2010 |

// const obtenerGeneracion=(anioNacimiento)=>{
//     if(anioNacimiento>=1949 && anioNacimiento<=1968){
//         return "sos baby boomer"
//     }if(anioNacimiento>=1969 && anioNacimiento<=1980){
//         return "sos generacion X"
//     }if (anioNacimiento>=1981&& anioNacimiento<=1993){
//         return "sos millenial"
//     }if (anioNacimiento>=1994&& anioNacimiento<=2010)
//             return "sos generacion Z"
//         }

//         console.log(obtenerGeneracion(1992))

// ### `obtenerSensacion(temperatura)`
// Crear una función `obtenerSensacion` que tome como argumento un número `temperatura` y devuelva un string dependiendo de la `temperatura`, con las siguientes reglas:
// | Temperatura | Mensaje |
// | --- | --- |
// | Menor a 0° | ¡Está helando!
// | Mayor o igual a 0° y menor a 15° | ¡Hace frío!
// | Mayor o igual a 15° y menor a 25° | Está lindo
// | Mayor o igual a entre 25° y menor a 30° | Hace calor
// | Mayor o igual de 30° | ¡Hace mucho calor!

// ```javascript
// obtenerSensacion(33) // "¡Hace mucho calor!"
// ```

// const obtenerSensacion=(temperatura)=>{
//     if(temperatura <= 0){
//     return "esta helado"
//     }if(temperatura >=0 && temperatura<= 15){
//     return "hace frio"
//     }if(temperatura >=15 && temperatura<=25){
//     return "esta lindo"
//     }if(temperatura >=25 && temperatura<=30){
// return "hace calor"
//     }if (temperatura>=30 ){
// return "hace mucho calor "
// }
// }

// console.log(obtenerSensacion(33))


// ### `obtenerNota(puntaje)`
// Crear una función `obtenerNota` que tome como argumento un número `puntaje` y devuelva un string dependiendo del `puntaje` redondeado, con las siguientes reglas:
// | Puntaje | Nota |
// | --- | --- |
// | Menor a 6 | Desaprobado
// | Mayor o igual a 6 y menor a 7 | Regular
// | Mayor o igual a 7 y menor a 8 | Bueno
// | Mayor o igual a entre 8 y menor a 10 | Muy bueno
// | 10 | Excelente
// | Menor a 0 o mayor a 10 | Puntaje inválido

// ```javascript
// obtenerNota(7)    // "Bueno"
// obtenerNota(9.6)  // "Excelente"
// obtenerNota(12)   // "Puntaje inválido"
// ```

// const obtenerNota=(puntaje)=>{
//     if(puntaje<6){
//         return "desaprobado"
//     }if(puntaje>=6 && puntaje<=7){
//         return "regular"
//     }if(puntaje>=7 && puntaje<=10){
//         return"muy bueno"
//     }if(puntaje===10){
//         return "excelente"
//     }if(puntaje<0 || puntaje>10){
//         return "puntaje invalido"
//     }

// }
// console.log(obtenerNota(7))
// console.log(obtenerNota(9.6))
// console.log(obtenerNota(12))

// ### `jugarPiedraPapelTijera(a, b)`
// Crear una función `jugarPiedraPapelTijera` que tome como argumentos dos strings `a` y `b` que representen una jugada (`piedra`, `papel`, `tijera`) y dependiendo el devuelva un string con un mensaje avisando qué jugada ganó (o si hubo empate)

// ```javascript
// jugarPiedraPapelTijera('tijera', 'piedra')  // ¡Ganó piedra!
// jugarPiedraPapelTijera('piedra', 'tijera')  // ¡Ganó piedra!
// jugarPiedraPapelTijera('papel', 'piedra')   // ¡Ganó papel!
// jugarPiedraPapelTijera('piedra', 'papel')   // ¡Ganó papel!
// jugarPiedraPapelTijera('papel', 'tijera')   // ¡Ganó tijera!
// jugarPiedraPapelTijera('tijera', 'papel')   // ¡Ganó tijera!
// jugarPiedraPapelTijera('piedra', 'piedra')  // ¡Empate!
// jugarPiedraPapelTijera('papel', 'papel')    // ¡Empate!
// jugarPiedraPapelTijera('tijera', 'tijera')  // ¡Empate!

// const jugarPiedraPapelTijera=(a,b )=>{
//     if (a === "piedra"&& b==="tijera" || a==="tijera"&& b==="piedra"){
//     return "gano piedra "
// }if (a==="papel"&&b==="piedra"||a==="piedra"&&b==="papel"){
//     return "gano papel"
// }if (a==="papel" && b==="tijera"||a==="tijera" && b==="papel"){
//     return "gano tijera"
// }if (a==="piedra"&&b==="piedra"||a==="papel"&& b==="papel"|| a==="tijera"&& b==="tijera"){
//     return "empate"
// }
// }
// console.log(jugarPiedraPapelTijera('tijera', 'piedra'))
// console.log(jugarPiedraPapelTijera('piedra', 'tijera'))
// console.log(jugarPiedraPapelTijera('papel', 'piedra'))
// console.log(jugarPiedraPapelTijera('piedra', 'papel'))
// console.log(jugarPiedraPapelTijera('papel', 'tijera'))
// console.log(jugarPiedraPapelTijera('tijera', 'papel'))
// console.log(jugarPiedraPapelTijera('piedra', 'piedra'))
// console.log(jugarPiedraPapelTijera('papel', 'papel'))
// console.log(jugarPiedraPapelTijera('tijera', 'tijera'))