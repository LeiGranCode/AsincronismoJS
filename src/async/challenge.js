const fetchData=require('../utils/fetchData');
const API='https://rickandmortyapi.com/api/character/';

const OtraFuncion=async(url_api)=>{
  try{
    const data=await fetchData(url_api)
    const character= await fetchData(`${API}${data.results[0].id}`);
    const origin =await fetchData(character.origin.url);
    
    console.log(data.info.count);
    console.log(character.name);
    console.log(origin.dimension);
  }catch(error){
    console.error(error);
  }
}
console.log('Before');
OtraFuncion(API);
console.log('After');
/*VENTAJAS Y DESVENTAJAS DE CALLBACKS, PROMESAS Y ASYNC/AWAIT
CALLBACKS
+ ES SIMPLE 
+ FÁCIL DE IMPLEMENTAR
+ SON UNIVERSALES, CORREN EN CUALQUIER NAVEGADOR

- COMPOSICIÓN TOSCA
- CALLBACK HELL, MUY DIFÍCIL DE LEER
- FLUJO POCO INTUITUVO 
- MANEJO DE ERRORES TEDIOSO

PROMESAS
+ FACILMENTE ENLAZABLE
+ NOS DA UNA GRAN CAPACIDAD DE ASINCRONISMO

- NO MANEJA EXCEPCIONES
- PROPENSO A ERRORES SI NO SE RETORNA EL VALOR
- REQUIERE BABEL PARA PODER USARSE EN TODOS LOS NAVEGADORES

ASYNC AWAIT
+ USO DE TRY CATCH
+ MÁS FÁCILES DE LEER

- ESPERAR POR CADA LLAMADO
- REQUERIMOS UN PORIFY COMO BABEL IGUAL QUE CON LAS PROMESAS
*/
