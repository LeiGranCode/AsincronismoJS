//Callbacks encapsular una función dentro de otra
function suma(num1, num2){
  return num1+num2;
}
function calc(num1, num2, callback){
return callback(num1,num2);
}
console-console.log(calc(8,2,suma));
//Otro Ejemplo
function date(callback){
  console.log(new Date);
  setTimeout(function(){
  let date= new Date;
  callback(date);
  },3000)
}
function printDate(dateNow){
  console.log(dateNow);
}
date(printDate);