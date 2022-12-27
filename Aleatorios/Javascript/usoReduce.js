const rocket = [
  {pais: 'Rússia', lancamentos: 32},
  {pais: 'USA', lancamentos: 23},
  {pais: 'China', lancamentos: 16},
  {pais: 'Espanha', lancamentos: 7},
  {pais: 'India', lancamentos: 4},
  {pais: 'Japão', lancamentos: 3}
]

const totalLancamentos = rocket.reduce((preVal, elem) => preVal + elem.lancamentos, 0)

console.log(totalLancamentos)