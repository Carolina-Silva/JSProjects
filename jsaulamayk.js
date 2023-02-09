let nota = 100;

if(nota >= 90){
  console.log("A")
}else if(nota >= 80 && nota <= 89){
  console.log("B")
}else if(nota >= 70 && nota <= 79){
  console.log("C")
}else if(nota >= 60 && nota <= 69){
  console.log("D")
}else if(nota <= 60){
  console.log("F")
}else{
  console.log("nota não identificada tente novamente mais tarde")
}

//-----------------------------------------------------------------
let familia = {
  receita: [1500, 3000, 700],
  despesa: [200, 400, 60, 50, 100, 40]
}
function calcula(array){
  let total = 0;

  for(let value of array){
    total += value
  }

  return total
}
function balanco(){
  const receitavalor = calcula(familia.receita);
  const despesavalor = calcula(familia.despesa);

  total = receitavalor - despesavalor;

  if(total < 0 ){
    console.log("negatuvo")
  }else{
    console.log("positivo")
  }
}
balanco()