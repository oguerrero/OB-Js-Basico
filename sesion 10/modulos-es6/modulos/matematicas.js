export function suma (a, b) {
  return a + b
}

export function multiplica (a, b) {
  return a * b
}

export function eleva (a, b) {
  return a ** b
}

export function factorial (a) {
  let factorial = 1
  for (let i = 2; i < a; i++) {
    factorial *= i
  }
  return factorial
}

const fact = factorial(5)
console.log(fact)

const sum = suma(5 + 5)
console.log(sum)

const ele = eleva(5)
console.log(ele)
