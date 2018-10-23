# JavaScript Style Guide

> **Nota:** Nuestro código JavaScript seguira las recomendaciones que marca [standardjs](https://standardjs.com), si conoces buenas practicas de desarrollo colabora haciendo un PR a este documento, dar un vistazo a [Resources](#resources) donde encontraras buenas practicas de código ya implentados.

## Content
1. [Referencias](#referencias)
2. [Resources](#resources)

## Referencias
* Usa const para todas las referencias; evitar usar var. (const asegura que no puedas reasiganar sus referencias, lo que puede generar errores y códigos dificiles de comprender)

```javascript
// bad
var a = 1
var b = 2

// good
const a = 1
const b = 1
```

* Use let para reasignar referencia, use let en lugar de var. let es block-scoped en lugar de function-scoped como var

```javascript
// let vs var
var a = 5
var b = 10

if (a === 5) {
  let a = 4 // El alcance es dentro del bloque if
  var b = 1 // El alcance es global

  console.log(a) // 4
  console.log(b) // 1
}

console.log(a) //5
console.log(b) // 1

// bad
var cont = 1
if (true) {
  cont += 1
}

// good
let count = 1
if (true) {
  cont += 1
}
```

* Note que ``let`` y ``const`` son block-scoped

```javascript
// const y let solo existen en el block que son definidos
{
  let a = 1
  const b = 1
}
console.log(a) // ReferenceError
console.log(b) // ReferenceError
```

## Resources

- [airbnb js style guide](https://github.com/airbnb/javascript/blob/master/README.md)
- [airbnb React/JSX style guide](https://github.com/airbnb/javascript/tree/master/react)
- [airbnb css-in-js style guide](https://github.com/airbnb/javascript/tree/master/css-in-javascript)
