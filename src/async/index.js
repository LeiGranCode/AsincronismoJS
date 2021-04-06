const doSomethingAsync=()=>{
  return new Promise((resolve, reject)=>{
    (true)
    ?setTimeout(()=>resolve('Do Someting Async'),3000)
    :reject(new Error('Test Error'))
  });
}

const doSomething= async()=>{
  const something=await doSomethingAsync()
  console.log(doSomething);
}
console.log('Before');
doSomething();
console.log('After');

const OtraFuncion=async()=>{
  try{
    const something=await doSomethingAsync();
    console.log(something);
  }catch(error){
    console.error(error)
  }
}
console.log('Before1');
OtraFuncion();
console.log('After1');